import React from 'react';
import ReactDOM from 'react-dom';
import PhotoCard from './PhotoCard';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('PhotoCard', () => {
  
  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhotoCard imageSrc='some.JPG' photoComment="It's something"/>, div);
  });

  it('Should render correctly', () => {
    const {getByTestId} = render(<PhotoCard imageSrc='some.JPG' photoComment="It's a photo of something" photoDescription='A something'/>);
    expect(getByTestId('photo-comment')).toHaveTextContent("It's a photo of something");
  })
})