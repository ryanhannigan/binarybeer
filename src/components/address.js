import React from 'react';
import Typography from '@material-ui/core/Typography';

export default ({ addressLine, town, city, postcode }) => (
  <div>
    {addressLine && <Typography variant="body2">{addressLine}</Typography>}
    {town && <Typography variant="body2">{town}</Typography>}
    {city && <Typography variant="body2">{city}</Typography>}
    {postcode && <Typography variant="body2">{postcode}</Typography>}
  </div>
);