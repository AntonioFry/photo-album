import React, { Component } from 'react';
import './ImageInspector.css';

class ImageInspector extends Component {
  constructor() {
    super();
    this.state = {
      imageCollection: [],
      currentImageIndex: 0,
    }
  }

  render() {
    return (
      <section className="faded-background">
        <div className="image-container">
          <img src={null}/>
        </div>
      </section>
    )
  }
};

export default ImageInspector;