import React from 'react';
import createReactClass from 'create-react-class';
import image from "../images/map.jpg"
var Map = createReactClass({
  render: function() {
    return (

      <div className="w3-container">
        <img src={image} className="w3-image" style={{width: '100%'}} />
      </div>
    );
  }
});
export default Map