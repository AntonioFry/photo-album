import React from 'react';
import ReactDOM from 'react-dom';
import PhotoCard from './PhotoCard';

describe('PhotoCard', () => {
  
  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhotoCard imageSrc='some.JPG' photoComment="It's something"/>, div);
  })
})