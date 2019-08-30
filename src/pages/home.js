import React from 'react';
import Title from '../components/Title';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import BlueContainer from '../components/bluecontainer';
import Image from '../components/roundimage';

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
    <div className="home">
      <BlueContainer>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Title bottomGutter={1}>
          <span>Welcome</span><br/>
          Herr's pub<br/> <span>*</span> club <span>*</span>
          </Title>
          <Image size={300} src={require(`../assets/hersh.png`)} />
           <Typography align="center" component="div" style={{width:'110%', margin:'5px -5%', padding:'20px 0', borderBottom:'1px solid #DDC000'}}>
            <Button variant="contained" size="large" color="primary" component={Link} style={{fontWeight:'600'}} to="/publist">View Pubs</Button>
      </Typography>
        </Box>
      </BlueContainer>
    </div>
  );
}