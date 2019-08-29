import React from 'react';
import BlueContainer from '../components/bluecontainer';
import Pub from '../components/publisting';

import Title from '../components/Title';
export default () => {
  return (
    <BlueContainer>
      <Title>Pub List</Title>

      <Pub imageSrc="http://www.thoroughlymodernmilly.com/wp-content/uploads/2012/04/IMG_6262.jpg" pubname="The Mall" rating={4} pubId="themall"/>
      <Pub imageSrc="http://www.thoroughlymodernmilly.com/wp-content/uploads/2012/04/IMG_6262.jpg" pubname="The George" rating={4} pubId="thegeorge"/>
      <Pub imageSrc="http://www.thoroughlymodernmilly.com/wp-content/uploads/2012/04/IMG_6262.jpg" pubname="Spoons" rating={4} pubId="spoons"/>
    </BlueContainer>
  );
}