import React, { useState, useEffect } from 'react';
import BlueContainer from '../components/bluecontainer';
import Pub from '../components/publisting';
import Title from '../components/Title';

export default () => {
  const [ pubList, setPubList ] = useState([]);

  useEffect(() => {
    //fetch pub list

    setPubList([
      {
        imageSrc: 'http://www.thoroughlymodernmilly.com/wp-content/uploads/2012/04/IMG_6262.jpg',
        pubname: 'The Mall',
        rating: 4,
        pubId: 'themall',
      },
      {
        imageSrc: 'http://www.thoroughlymodernmilly.com/wp-content/uploads/2012/04/IMG_6262.jpg',
        pubname: 'The George',
        rating: 2,
        pubId: 'thegeorge',
      },
      {
        imageSrc: 'http://www.thoroughlymodernmilly.com/wp-content/uploads/2012/04/IMG_6262.jpg',
        pubname: 'The Stepping Stone',
        rating: 5,
        pubId: 'stepping',
      },
    ])
  }, [])

  return (
    <BlueContainer>
      <Title>Pub List</Title>
      {
        pubList && pubList.map((pub) => (
          <Pub imageSrc={pub.imageSrc} pubname={pub.pubname} rating={pub.rating} pubId={pub.pubId} />
        ))
      }
    </BlueContainer>
  );
}