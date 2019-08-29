import React from 'react';
import Title from '../components/Title';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import BlueContainer from '../components/bluecontainer';
import Image from '../components/squareimage';

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
        <Box display="flex" flexDirection="column" alignItems="center">
          <Title bottomGutter={1}>Herr's pub club</Title>
          <Image size={300} src={require(`../assets/hersh.png`)} />
          <Typography align="center" component="div" style={{width:'100%', margin:'30px 0'}}>
            <Button variant="contained" size="large" color="primary" component={Link} to="/publist">View pubs</Button>
          </Typography>
        </Box>
      </BlueContainer>
    </div>
  );
}