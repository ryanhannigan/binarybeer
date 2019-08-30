import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#DDC000',
    padding: theme.spacing(1),
    width:'110%',
    textAlign:'center',
    borderTop:'1px solid #DDC000',
    marginTop:'5px',
    marginLeft:'-5%',
    marginRight:'-5%',
    '& span':{
      color:'#fff',
      fontSize:'45%',
      fontWeight:'600'
    }
  },
}));

export default function Title({ children, bottomGutter = 0 }) {
  const classes = useStyles();

  return <Typography variant="h2" className={classes.root} gutterBottom={bottomGutter}>{children}</Typography>;
}