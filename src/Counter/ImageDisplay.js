import React from 'react';

export default ({ image }) => (
  <div>
    {image ? <img src={image.url} style={{ height: 200 }} /> : null}
  </div>
)