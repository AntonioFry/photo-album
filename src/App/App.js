import React, { Component } from 'react';
import './App.css';
import Gallery from '../Gallery/Gallery';

class App extends Component {

  render() {
    return (
      <main>
        <header>
          <h1 className="title-heading">My Photo Album</h1>
        </header>
        <Gallery />
      </main>
    );
  }
}

export default App;