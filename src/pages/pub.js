import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import BlueContainer from '../components/bluecontainer';
import SquareImage from '../components/squareimage';
import StarRating from '../components/starrating';
import Address from '../components/address';
import Title from '../components/Title';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default ({match}) => {

  const [pubName, setPubName] = useState('');
  const [pubRating, setPubRating] = useState(0);
  const [pubAddress, setPubAddress] = useState({});
  const [pubImageSrc, setPubImageSrc] = useState('');
  const [pubFeatures, setPubFeatures] = useState([]);
  const [individualRatings, setIndividualRatings] = useState([]);

  useEffect(() => {
    //fetch data

    setPubName('The Mall');
    setPubRating(3);
    setPubAddress({
      addressLine: '71 Palace Gardens Terrace',
      town: 'Kensington',
      city: 'London',
      postcode: 'W8 4RU',
    });
    setPubImageSrc('http://www.thoroughlymodernmilly.com/wp-content/uploads/2012/04/IMG_6262.jpg');
    setIndividualRatings([
      {title: 'Trendiness', value: 5},
      {title: 'Grottiness', value: 2},
      {title: 'Busy-ness', value: 1},
      {title: 'Welcoming', value: 5},
      {title: 'EasyToGetService', value: 2},
      {title: 'EnoughSeating', value: 3},
      {title: 'CocktailSelection', value: 4},
      {title: 'BeerSelection', value: 2},
      {title: 'ValueForMoney', value: 1},
    ]);
    setPubFeatures([
      "StreetDrinking",
      "Quiz"
    ]);
  }, []);

  return (
    <BlueContainer>
      <Title>
        <span>Pub</span><br/>
        <span>*</span> {pubName} <span>*</span>
      </Title>
      <Box display="flex" flexDirection="row" marginLeft="10px" marginTop="8px" marginRight="10px">
        {
          pubImageSrc && <SquareImage src={pubImageSrc} size={116}/>
        }
        <StarRating rating={pubRating}>
          <Address {...pubAddress} />
        </StarRating>
      </Box>
      <Box display="flex" flexDirection="column" marginTop={1}  alignItems="center">
        <Box minWidth="95%">
        {
          individualRatings && individualRatings.map((rating) => (<StarRating key={rating.title} title={rating.title} rating={rating.value} topGutter={1} leftGutter={0} />))
        }
        </Box>
        
        <hr/>

        <Box display="flex" flexDirection="column" justifyContent="space-between" marginLeft={0} style={{ backgroundColor: '#fff', borderRadius:'5px' }} paddingLeft={1} paddingRight={1} flex={1} marginTop={1} minWidth="95%">
          <Typography variant="h5" style={{ fontWeight: 700 }}>
            Pub Features
          </Typography>
          {pubFeatures.map((feature) => (
            <Typography key={feature} variant="body2">{feature}</Typography>
          ))}
        </Box>
      </Box>

      <Typography align="center" component="div" style={{width:'110%', margin:'5px -5%', paddingBottom:'20px', borderBottom:'1px solid #DDC000'}}>
            <Button variant="contained" size="large" color="primary" component={Link} to="/publist">Back</Button>
      </Typography>
    </BlueContainer>
  );
}