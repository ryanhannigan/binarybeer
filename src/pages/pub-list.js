import React, { useState, useEffect } from 'react';
import BlueContainer from '../components/bluecontainer';

import Pub from '../components/publisting';
import Title from '../components/Title';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default () => {
  const [ pubList, setPubList ] = useState([]);

  const getRating = () => (Math.floor(Math.random() * 5));


  useEffect(() => {
    //fetch incoming data
    const incomingData =[{"ItemId":"45579d5f-ac2e-4f03-86d3-7dbac279e0dc","name":"The Mall","address":{"streetAddress1":"123 mall road","streetAddress2":"Mall town","town":"London","postcode":"MALL","country":"UK"},"features":["Garden"]},{"ItemId":"62f929cf-82a6-4057-8edb-fa57563ab7ba","name":"The Mall","address":{"streetAddress1":"123 mall road","streetAddress2":"Mall town","town":"London","postcode":"MALL","country":"UK"},"features":["Garden"]},{"ItemId":"68dcd571-cb04-4bc2-a39e-ec1da9c56d10","name":"Michal's Pub","address":{"streetAddress1":"123 Michal road","streetAddress2":"Michal town","town":"London","postcode":"Michal","country":"UK"},"features":["Food"]},{"ItemId":"3880ecdd-9c4c-4116-90ef-44e60faefc19","name":"Luca's Pub","address":{"streetAddress1":"123 Luca road","streetAddress2":"Luca town","town":"London","postcode":"LUCA","country":"UK"},"features":["StreetDrinking","Quiz"]},{"ItemId":"d61b8d38-1e02-49a2-9690-52c9430d11af","name":"The Mall","address":{"streetAddress1":"123 mall road","streetAddress2":"Mall town","town":"London","postcode":"MALL","country":"UK"},"features":["Garden"]},{"ItemId":"cb6ad579-c24c-4601-951d-e9e367571e6b","name":"Hershiv's Pub","address":{"streetAddress1":"123 Hershiv road","streetAddress2":"Hershiv town","town":"London","postcode":"Hershiv","country":"UK"},"features":["Food","Garden","StreetDrinking"]},{"ItemId":"4df85e6e-f595-409b-89fe-645e98c08f79","name":"Joe's Pub","address":{"streetAddress1":"123 Joe road","streetAddress2":"Joe town","town":"London","postcode":"Joe","country":"UK"},"features":["Food","Quiz"]}];

    // map incoming data
    setPubList(incomingData.map((entry) => ({
      imageSrc: 'http://www.thoroughlymodernmilly.com/wp-content/uploads/2012/04/IMG_6262.jpg',
      pubname: entry.name,
      rating: getRating(),
      pubId: entry.ItemId,
    })))
  }, [])

  return (
    <BlueContainer>
      <Title><span>Pub</span><br/><span>*</span> List <span>*</span></Title>
      {
        pubList && pubList.map((pub) => (
          <Pub imageSrc={pub.imageSrc} pubname={pub.pubname} rating={pub.rating} pubId={pub.pubId} />
        ))
      }

      <Typography align="center" component="div" style={{width:'110%', margin:'5px -5%', paddingBottom:'20px', borderBottom:'1px solid #DDC000'}}>
            <Button variant="contained" size="large" color="primary" component={Link} style={{fontWeight:'600'}} to="/">Back</Button>
      </Typography>
    </BlueContainer>
  );
}