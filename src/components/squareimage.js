import React from 'react';

export default ({src, pubname, size = 65}) => {
  return (
    <img src={src} style={{borderRadius:'5px'}} alt={` ${pubname}`} height={size} width={size}/>
  );
}