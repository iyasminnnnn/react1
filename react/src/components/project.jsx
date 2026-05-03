import React from 'react';
import createReactClass from 'create-react-class';
import image from "../images/pro1.jpg"
import image1 from "../images/pro2.jpg"
import image2 from "../images/pro3.jpg"
import image3 from "../images/pro4.jpg"
import image4 from "../images/pro5.jpg"
import image5 from "../images/pro6.jpg"
import image6 from "../images/pro7.jpg"
import image7 from "../images/pro8.jpg"
var Project = createReactClass({
  render: function() {
    return (
      <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}>
        {/* Project Section */}
        <div className="w3-container w3-padding-32" id="projects">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
        </div>
        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
              <img src={image} alt="House" style={{width: '100%'}} />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
              <img src={image1} alt="House" style={{width: '100%'}} />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
              <img src={image2} alt="House" style={{width: '100%'}} />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
              <img src={image3} alt="House" style={{width: '100%'}} />
            </div>
          </div>
        </div>
        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
              <img src={image4} alt="House" style={{width: '99%'}} />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
              <img src={image5} alt="House" style={{width: '99%'}} />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
              <img src={image6} alt="House" style={{width: '99%'}} />
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
              <img src={image7} alt="House" style={{width: '99%'}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
export default Project