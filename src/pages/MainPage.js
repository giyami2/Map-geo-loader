import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGeoLocation } from "../hooks/useGeoLocation";
import { Table, Button } from "react-bootstrap";

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const geoLocations = useSelector((state) => state.geolocations);
  const { data, loading } = geoLocations;

  useEffect(() => {
    dispatch(getGeoLocation());
  }, [dispatch]);

  const moveToGoogleMaps = (data) => {
    console.log(data);
    history.push({
      pathname: '/geomaps',
      state: { geoData: data }
    })
  }

  if (loading) {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>국가명</th>
            <th>위도</th>
            <th>경도</th>
            <th>줌사이즈</th>
            <th>언어</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr key={d.CountryId}>
                <td>
                  <input
                    className="textbox"
                    type="text"
                    defaultValue={d.CountryName}
                  />
                </td>
                <td>
                  <input
                    className="textbox"
                    size="10"
                    defaultValue={d.latitude}
                  />
                </td>
                <td>
                  <input
                    className="textbox"
                    size="10"
                    defaultValue={d.longitude}
                  />
                </td>
                <td>
                  <input className="textbox" size="3" defaultValue={d.zoom} />
                </td>
                <td>
                  <input
                    className="textbox"
                    size="4"
                    defaultValue={d.language}
                  />
                </td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => moveToGoogleMaps(d)}
                  >
                    지도
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default MainPage;
