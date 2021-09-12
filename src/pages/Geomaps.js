import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useGoogleMap, useMap } from "../hooks/useGoogleMaps";
import { ListGroup } from "react-bootstrap";

const Geomaps = React.memo(() => {
  const history = useHistory();
  const geoMapsRef = useRef(null);
  const googleMap = useGoogleMap();

  const geoMapData = history.location.state.geoData;

  //google maps load
  useMap({ googleMap, geoMapsRef, geoMapData });

  return geoMapData !== null ? (
    <div>
      <ListGroup
        defaultActiveKey="#link1"
        className="list-group-head"
        horizontal
      >
        <ListGroup.Item
          className="list-group-items"
          action
          href="/"
          variant="info"
        >
          뒤로
        </ListGroup.Item>
        <ListGroup.Item className="list-group-items" style={{fontWeight: "bold"}}>국가명</ListGroup.Item>
        <ListGroup.Item>{geoMapData.CountryName}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "bold"}}>언어</ListGroup.Item>
        <ListGroup.Item>{geoMapData.language}</ListGroup.Item>
      </ListGroup>
      <div
        style={{
          height: "100vh",
          width: "100%",
        }}
        ref={geoMapsRef}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
});

export default Geomaps;
