import React from 'react';
import ReactDOM from 'react-dom';
import PhotoCard from './PhotoCard';
import renderer from 'react-test-renderer';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('PhotoCard', () => {

  afterEach(cleanup);
  
  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhotoCard imageSrc='some.JPG' photoComment="It's something" testId="photo-comment"/>, div);
  });

  it('Should render correctly', () => {
    const { getByTestId } = render(<PhotoCard imageSrc='some.JPG' photoComment="It's a photo of something" photoDescription='A something' testId="photo-comment"/>);
    expect(getByTestId('photo-comment')).toHaveTextContent("It's a photo of something");
  });

  it('Should match snapshot', () => {
    const tree = renderer.create(<PhotoCard imageSrc='some.JPG' photoComment="It's something" testId="photo-comment"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});