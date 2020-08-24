import React, { Component } from 'react';
import './ImageInspector.css';

class ImageInspector extends Component {
  constructor() {
    super();
    this.state = {
      imageCollection: [],
    }
  }

  render() {
    return (
      <section className="faded-background">
        <div className="image-container">
          
        </div>
      </section>
    )
  }
};