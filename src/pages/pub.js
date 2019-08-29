import React from 'react';

export default ({match}) => {
  return (
    <p>{`Single Pub: ${match.params.id}`}</p>
  );
}