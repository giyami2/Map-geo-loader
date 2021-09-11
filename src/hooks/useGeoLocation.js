import axios from "axios";
import { FETCH_GEO_LOCATION } from "../reducers/geolocation";

export const getGeoLocation = () => async (dispatch) => {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  
  const api = "/api/geo/getCountryData";
  const res = await axios.get(api);

  dispatch({
    type: FETCH_GEO_LOCATION,
    payload: res.data,
  });
};
