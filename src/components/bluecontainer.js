import React from 'react';
import Container from '@material-ui/core/Container';


export default ({children}) => {
  return (
    <Container style={{ backgroundColor: '#46BADF', height: '100vh' }}>{children}</Container>
  );
}