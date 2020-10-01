import React, { Component } from 'react';
import './ImageInspector.css';

class ImageInspector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCollection: props.imageCollection || [],
      currentImageIndex: 0,
      currentImage: props.startingPhoto,
    }
  }

  changePhoto = async (direction) => {
    const { imageCollection, currentImageIndex } = this.state;
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
        <button className="close-button" onClick={() => this.props.closeInspector()}>X</button>
        <button 
          className='left-button' 
          onClick={() => this.changePhoto('left')} 
          disabled={imageCollection[currentImageIndex - 1] === undefined}>
            {'<'}
        </button>
        <div className="image-container">
          <img className='inspected-image' src={currentImage} alt={imageCollection[currentImageIndex].photoDescription}/>
          <article className="image-inspector-photo-comment">
            <p>{imageCollection[currentImageIndex].photoComment}</p>
          </article>
        </div>
        <button
          className='right-button'
          onClick={() => this.changePhoto('right')}
          disabled={imageCollection[currentImageIndex + 1] === undefined}>
            {'>'}
        </button>
      </section>
    )
  }
};

export default ImageInspector;