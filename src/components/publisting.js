import React from 'react';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Image from '../components/squareimage';

export default ({imageSrc, pubname, pubId, rating}) => {
  return (
    <Link to={`/pub/${pubId}`} style={{ textDecoration: 'none', cursor: 'pointer', color: '#000' }}>
      <Box display="flex" flexDirection="row" padding={1}>
        <Image src={imageSrc} pubname={pubname} />
        <Box display="flex" flexDirection="column" justifyContent="centre" marginLeft={1} style={{ backgroundColor: '#fff' }} paddingLeft={1} paddingRight={1} flex={1}>
          <Typography variant="h6" style={{ fontWeight: 700 }}>
            {pubname}
          </Typography>
          <StarRatings
            rating={rating}
            starRatedColor="#F2C94C"
            numberOfStars={5}
            name={`${pubname} rating`}
            starDimension="28px"
          />
        </Box>
      </Box>
    </Link>
  );
}