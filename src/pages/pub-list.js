import React, { useState, useEffect } from 'react';
import BlueContainer from '../components/bluecontainer';

import Pub from '../components/publisting';
import Title from '../components/Title';

import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default () => {
	//pubList, setPubList,
  const [ pubList , setPubList  ] = useState();

  console.log(useState([]));

  const getRating = () => (4 + Math.floor(Math.random() * 2));

useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://646df382.ngrok.io/getpubs',
      );

      setTimeout(setPubList(result.data), 1500);
    };
    fetchData();
  }, []);


  return (
    <BlueContainer>
      <Title><span>Pub</span><br/><span>*</span> List <span>*</span></Title>
      {
        pubList && pubList.map((pub) => (
          <Pub key={pub.ItemId} imageSrc={'http://www.thoroughlymodernmilly.com/wp-content/uploads/2012/04/IMG_6262.jpg'} pubname={pub.name} rating={getRating()} ItemId={pub.ItemId} />
        )) ||
        <div style={{color:'#ffffff', textAlign:'center', margin:'20px auto', width:'100%'}}>
        	<Typography variant="h6">Loading</Typography>
       	 <CircularProgress color="primary" />
        </div>
      }


      <Typography align="center" component="div" style={{width:'110%', margin:'5px -5%', paddingBottom:'20px', borderBottom:'1px solid #DDC000'}}>
            <Button variant="contained" size="large" color="primary" component={Link} style={{fontWeight:'600'}} to="/">Back</Button>
      </Typography>
    </BlueContainer>
  );
}
