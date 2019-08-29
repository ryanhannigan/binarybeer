import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import BlueContainer from '../components/bluecontainer';
import SquareImage from '../components/squareimage';
import StarRating from '../components/starrating';
import Address from '../components/address';
import Title from '../components/Title';

export default ({match}) => {

  const [pubName, setPubName] = useState('');
  const [pubRating, setPubRating] = useState(0);
  const [pubAddress, setPubAddress] = useState({});
  const [pubImageSrc, setPubImageSrc] = useState('');
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
  }, []);

  return (
    <BlueContainer>
      <Title>{pubName}</Title>
      <Box display="flex" flexDirection="row" marginTop="8px">
        {
          pubImageSrc && <SquareImage src={pubImageSrc} size={116}/>
        }
        <StarRating rating={pubRating}>
          <Address {...pubAddress} />
        </StarRating>
      </Box>
      <Box display="flex" flexDirection="column" marginTop={1} alignItems="center">
        <Box minWidth="95%">
        {
          individualRatings && individualRatings.map((rating) => (<StarRating key={rating.title} title={rating.title} rating={rating.value} topGutter={1} leftGutter={0} />))
        }
        </Box>
      </Box>
    </BlueContainer>
  );
}