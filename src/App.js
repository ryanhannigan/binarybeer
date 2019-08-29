import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home';
import PubList from './pages/pub-list';
import Pub from './pages/pub';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/publist" component={PubList} />
      <Route path="/pub/:id/" component={Pub} />
    </Router>
  );
}

export default AppRouter;