import React, { Component } from 'react';
import './PreviewImages.css';

class PreviewImages extends Component {
  constructor() {
    super();
    this.state = {
      previewAlbum: [],
      currentPreviewPhoto: ''
    }
  }

  render() {
    return (
      <section className="preview-image-section">
        <img src={require('../Data/Images/ants-and-plants.JPG')} />
      </section>
    )
  }
}

export default PreviewImages