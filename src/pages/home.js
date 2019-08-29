import React from 'react';
import Title from '../components/Title';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import BlueContainer from '../components/bluecontainer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));



export default () => {
	const classes = useStyles();
  return (
    <div class="home">

    <BlueContainer>
          <Title>Herr's pub club</Title>
          <Typography align="center" component="div" style={{width:'100%', margin:'30px 0'}}>
          	<Button variant="contained" size="large" color="primary" component={Link} to="/publist">View pubs</Button>
          </Typography>
       </BlueContainer>
    </div>
  );
}