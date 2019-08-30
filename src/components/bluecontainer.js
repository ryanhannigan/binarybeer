import React from 'react';
import Container from '@material-ui/core/Container';


export default ({children}) => {
  return (
    <Container style={{ backgroundColor: '#222', minHeight: '100vh', paddingTop: '8px', paddingBottom: '8px' }}>
    	<div style={{border:'1px double #DDC000'}}>{children}</div>
    </Container>
  );
}