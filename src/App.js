import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/home';
import PubList from './pages/pub-list';
import Pub from './pages/pub';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary:{
     main: '#DDC000',
     contrastText:'#fff'
   },
    secondary: {
      main:'#008AFC'
    }
  },
  typography:{
    fontFamily:"'Kelly Slab', cursive",
    h2:{
      fontFamily: "'Kelly Slab', cursive"
    }
  }
});

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/publist" component={PubList} />
        <Route path="/pub/:id/" component={Pub} />
      </Router>
    </ThemeProvider>
  );
}

export default AppRouter;