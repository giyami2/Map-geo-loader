/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = "";

export const useGoogleMap = () => {
  const [googleMap, setGoogleMap] = useState(null);
  const loader = new Loader({
    apiKey: API_KEY,
    // version: "weekly",
    // libraries: ["places"]
  });

  useEffect(() => {
    loader
      .load()
      .then((google) => {
        setGoogleMap(google);
      })
      .catch((e) => {
        // do something
      });
  }, []);

  return googleMap;
};

export const useMap = ({ googleMap, geoMapsRef, geoMapData }) => {
  const initialConfig = {
    zoom: 10,
    center: { lat: 37.5665, lng: 126.978 },
    mapId: "55ab1ddbf370133d",
  };
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!googleMap || !geoMapsRef.current || geoMapData === null) {
      return null;
    }

    let geoMapConfig = {
      zoom: geoMapData.zoom,
      center: { lat: geoMapData.latitude, lng: geoMapData.longitude },
      mapId: "55ab1ddbf370133d",
    };
    let config = geoMapData === null ? initialConfig : geoMapConfig;

    const map = new googleMap.maps.Map(geoMapsRef.current, config);
    setMap(map);
  }, [googleMap, geoMapsRef]);

  return map;
};
