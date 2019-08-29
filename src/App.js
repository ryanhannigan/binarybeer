import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/home';
import PubList from './pages/pub-list';
import Pub from './pages/pub';

function AppRouter() {
  return (
    <>
    <CssBaseline />
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/publist" component={PubList} />
      <Route path="/pub/:id/" component={Pub} />
    </Router>
    </>
  );
}

export default AppRouter;