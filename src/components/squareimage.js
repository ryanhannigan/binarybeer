import React from 'react';

export default ({src, pubname}) => {
  return (
    <img src={src} alt={` ${pubname}`} height="65" width="65"/>
  );
}