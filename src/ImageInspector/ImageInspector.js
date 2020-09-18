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

  changePhoto = async (direction) => {
    const { imageCollection, currentImage, currentImageIndex } = this.state;
    if (direction === 'left') {
      await this.setState({ currentImageIndex: currentImageIndex - 1 });
      this.setState({ currentImage: imageCollection[this.state.currentImageIndex].imageSrc });
    } else if (direction  === 'right') {
      await this.setState({ currentImageIndex: currentImageIndex + 1 });
      this.setState({ currentImage: imageCollection[this.state.currentImageIndex].imageSrc });
    }
  }

  render() {
    const { currentImage, imageCollection, currentImageIndex } = this.state;

    return (
      <section className="faded-background">
        <button className="close-button">X</button>
        <div className="image-container">
          <button className='left-button' onClick={() => this.changePhoto('left')} disabled={imageCollection[currentImageIndex - 1] === undefined}>{'<'}</button>
          <img className='inspected-image' src={currentImage} alt={currentImage.photoDescription}/>
          <button className='right-button' onClick={() => this.changePhoto('right')} disabled={imageCollection[currentImageIndex + 1] === undefined}>{'>'}</button>
        </div>
      </section>
    )
  }
};

export default ImageInspector;