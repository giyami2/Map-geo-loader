import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import MainPage from "./pages/MainPage";
import GeoMaps from "./pages/Geomaps";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/geomaps" exact>
          <GeoMaps />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
