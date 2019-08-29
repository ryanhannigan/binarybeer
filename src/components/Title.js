import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#FFF',
    padding: theme.spacing(1),
    width:'100%',
    textAlign:'center'
  },
}));

export default function Title({ children, bottomGutter = 0 }) {
  const classes = useStyles();

  return <Typography variant="h2" className={classes.root} gutterBottom={bottomGutter}>{children}</Typography>;
}