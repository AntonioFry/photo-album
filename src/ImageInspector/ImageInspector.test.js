import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import ImageInspector from './ImageInspector';
import renderer from 'react-test-renderer';

describe('ImageInspector', () => {
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

  it('Should render correctly', () => {
    const { getByTestId } = render(<ImageInspector 
      imageCollection={mockData.photos}
      startingPhoto={mockData.photos[0]}
      closeInspector={() => jest.fn()}
    />)
    expect(getByTestId('photo-comment')).toHaveTextContent(mockData.photos[0].photoComment)
  });

  it('Should match Snapshot', () => {
    const tree = renderer.create(<ImageInspector
      imageCollection={mockData.photos}
      startingPhoto={mockData.photos[0]}
      closeInspector={() => jest.fn()}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  })

})