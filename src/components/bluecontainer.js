import React from 'react';
import Container from '@material-ui/core/Container';


export default ({children}) => {
  return (
    <Container style={{ backgroundColor: '#46BADF', minHeight: '100vh', paddingTop: '8px', paddingBottom: '8px' }}>{children}</Container>
  );
}