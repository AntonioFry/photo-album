import React, { Component } from 'react';
import './ImageInspector.css';

class ImageInspector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCollection: props.imageCollection || [],
      currentImageIndex: 0,
      currentImage: props.startingPhoto
    }
  }

  componentDidUpdate(pervProps) {
    if (this.props.startingPhoto !== pervProps.startingPhoto) {
      this.setState({ imageCollection: this.props.imageCollection });
      this.setState({ currentImage: this.props.startingPhoto });
      this.setState({ currentImageIndex: 0 });
    }
  }

  render() {
    const { currentImage } = this.state;
    return (
      <section className="faded-background">
        <div className="image-container">
          <button className='left-button'>{'<'}</button>
          <img className='inspected-image' src={currentImage} alt={currentImage.photoDescription}/>
          <button className='right-button'>{'>'}</button>
        </div>
      </section>
    )
  }
};

export default ImageInspector;