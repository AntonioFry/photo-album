import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
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
  });

  it('Should call closeInspector when close button is clicked', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<ImageInspector
      imageCollection={mockData.photos}
      startingPhoto={mockData.photos[0]}
      closeInspector={() => handleClick()}
    />)

    const closeButton = getByTestId('close-btn');

    fireEvent.click(closeButton);
    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it('Should change photo when a navigational button is clicked', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<ImageInspector
      imageCollection={mockData.photos}
      startingPhoto={mockData.photos[0]}
      closeInspector={() => handleClick()}
    />);

    const rightBtn = getByTestId('right-btn');
    const leftBtn = getByTestId('left-btn');
    const inspectedImg = getByTestId('inspected-img');

    fireEvent.click(rightBtn);
    fireEvent.click(leftBtn);
    
    expect(inspectedImg).toHaveAttribute('alt', 'Grey Jay perched and looking out');
  });

  it('Should disable navigational button when there is no photo ether prior or to follow in the array', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<ImageInspector
      imageCollection={mockData.photos}
      startingPhoto={mockData.photos[0]}
      closeInspector={() => handleClick()}
    />);

    const rightBtn = getByTestId('right-btn');
    const leftBtn = getByTestId('left-btn');
    const inspectedImg = getByTestId('inspected-img');

    fireEvent.click(leftBtn);
    
    expect(inspectedImg).toHaveAttribute('alt', 'Grey Jay perched and looking out');

    fireEvent.click(rightBtn);
    fireEvent.click(rightBtn);

    expect(inspectedImg).toHaveAttribute('alt', 'Blue scrub jay perched and looking out');
  });

})