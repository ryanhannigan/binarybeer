import React from 'react';
import StarRatings from 'react-star-ratings';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default ({title, rating, children, topGutter = 0, leftGutter = 1}) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" marginLeft={leftGutter} style={{ backgroundColor: '#fff' }} paddingLeft={1} paddingRight={1} flex={1} marginTop={topGutter}>
      <Typography variant="h6" style={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {children}
      <StarRatings
        rating={rating}
        starRatedColor="#F2C94C"
        numberOfStars={rating}
        name={`${title} rating`}
        starDimension="28px"
      />
    </Box>
  );
}