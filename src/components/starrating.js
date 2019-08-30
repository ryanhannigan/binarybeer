import React from 'react';
import StarRatings from 'react-star-ratings';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default ({title, rating, children, topGutter = 0, leftGutter = 1}) => {
  return (
    <Box display="flex" flexDirection="column" style={{background:'rgb(66, 66, 66)', marginBottom:'1px', color:'#fff', borderRadius:'5px'}} justifyContent="space-between" marginLeft={leftGutter}  paddingLeft={1} paddingRight={1} flex={1} marginTop={topGutter}>
      <Typography variant="h6" style={{ fontWeight: 700 }}>
        {title}
      </Typography>

      
      {children}
      
      <StarRatings
        rating={rating}
        starRatedColor="#DDC000"
        numberOfStars={5}
        name={`${title} rating`}
        starDimension="28px"
      />
    </Box>
  );
}