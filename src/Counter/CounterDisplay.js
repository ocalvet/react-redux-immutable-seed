import React from 'react';

export default ({ count, image }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ fontSize: '3em' }}>
        {image ? <img src={image.image_url} /> : null}
        {count}
      </div>
    </div>
  )
};
