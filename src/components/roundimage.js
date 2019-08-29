import React from 'react';

export default ({src, pubname, size = 65}) => {
  return (
    <img src={src} alt={` ${pubname}`} height={size} width={size} style={{ borderRadius: '50%' }}/>
  );
}