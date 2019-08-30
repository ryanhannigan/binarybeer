import React from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Image from '../components/squareimage';
import StarRating from '../components/starrating';

export default ({imageSrc, pubname, ItemId, rating}) => {
  return (
    <Link to={`/pub/${ItemId}`} style={{ textDecoration: 'none', cursor: 'pointer', color: '#000' }}>
      <Box display="flex" color="text.primary" flexDirection="row" padding={1} style={{ color: '#fff',background:'#000 !important', borderTop:'1px solid rgb(66, 66, 66)' }}>
        <Image src={imageSrc} pubname={pubname} style={{borderRadius:'5px'}} />
        <Box display="flex" flexDirection="column" justifyContent="centre" marginLeft={0}  paddingLeft={0} paddingRight={1} flex={1}>
          <StarRating
            title={pubname}
            rating={rating}
          />
        </Box>
      </Box>
    </Link>
  );
}