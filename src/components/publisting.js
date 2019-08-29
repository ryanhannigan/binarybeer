import React from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Image from '../components/squareimage';
import StarRating from '../components/starrating';

export default ({imageSrc, pubname, pubId, rating}) => {
  return (
    <Link to={`/pub/${pubId}`} style={{ textDecoration: 'none', cursor: 'pointer', color: '#000' }}>
      <Box display="flex" flexDirection="row" padding={1}>
        <Image src={imageSrc} pubname={pubname} />
        <Box display="flex" flexDirection="column" justifyContent="centre" marginLeft={1} style={{ backgroundColor: '#fff' }} paddingLeft={1} paddingRight={1} flex={1}>
          <StarRating
            title={pubname}
            rating={rating}
          />
        </Box>
      </Box>
    </Link>
  );
}