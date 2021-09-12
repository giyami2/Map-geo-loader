import { combineReducers } from "redux";
import geolocation from "./geolocation";

export default combineReducers({
  geolocations: geolocation,
});
