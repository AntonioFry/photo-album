import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import renderer from 'react-test-renderer';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Gallery', () => {

  afterEach(cleanup);

  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Gallery />, div);
  });

  it('Should render correctly', () => {
    const { getByTestId } = render(<Gallery />);
    expect(getByTestId('photo-comment-1')).toHaveTextContent('This is one the first image I took of any sort of insect. After being able to see how much detail that was visible in the image versus the naked eye, I decided to try taking more of the small critters that roam the earth.')
  });

  it('Should match snapshot', () => {
    const tree = renderer.create(<Gallery />);
    expect(tree).toMatchSnapshot();
  });

});