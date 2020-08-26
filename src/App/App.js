import React, { Component } from 'react';
import './App.css';
import ImageInspector from '../ImageInspector/ImageInspector';
import Gallery from '../Gallery/Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPhotoAlbum: [],
    }
  }

  setCurrentPhotoAlbum = (photos) => {
    this.setState({ currentPhotoAlbum: photos })
  };

  render() {
    return (
      <main>
        <header>
          <h1 data-testid="title" className="title-heading">My Photo Album</h1>
        </header>
        <Gallery setCurrentPhotoAlbum={this.setCurrentPhotoAlbum} />
        <ImageInspector imageCollection={this.state.currentPhotoAlbum} />
      </main>
    );
  }
}

export default App;