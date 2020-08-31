import React, { Component } from 'react';
import './App.css';
import ImageInspector from '../ImageInspector/ImageInspector';
import Gallery from '../Gallery/Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPhotoAlbum: [],
      currentPhoto: ''
    }
  }

  setCurrentPhotoAlbum = (photos) => {
    this.setState({ currentPhotoAlbum: photos });
    this.setState({ currentPhoto: photos[0].imageSrc });
  };
  
  render() {
    return (
      <main>
        <header>
          <h1 data-testid="title" className="title-heading">My Photo Album</h1>
        </header>
        <Gallery setCurrentPhotoAlbum={this.setCurrentPhotoAlbum} />
        { this.state.currentPhoto === '' ? null : <ImageInspector
         imageCollection={this.state.currentPhotoAlbum}
         startingPhoto={this.state.currentPhoto} 
        /> }
      </main>
    );
  }
}

export default App;