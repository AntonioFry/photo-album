import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom';

describe('App', () => {
  let mockData;

  beforeEach(() => {
    mockData = {
      albumName: 'Bird Photos',
      photos: [
        {
          imageSrc: require('../Data/Images/grey-jay.JPG'),
          photoComment: "Took this shot up at Echo Lake when the bird landed meer feet away from me. It wasn't until I searched up th bird I realized it was a grey jay.",
          photoDescription: "Grey Jay perched and looking out"
        },
        {
          imageSrc: require('../Data/Images/blue-scrub-jay.JPG'),
          photoComment: "Though they are common in Southern Colorado, they really stand out to me because of their color",
          photoDescription: "Blue scrub jay perched and looking out"
        }
      ]
    }
  });

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should render correctly', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('title')).toHaveTextContent('My Photo Album');
  });

  it('Should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

})
