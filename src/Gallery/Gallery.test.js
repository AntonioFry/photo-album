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

  it('Should match snapshot', () => {
    const tree = renderer.create(<Gallery />);
    expect(tree).toMatchSnapshot();
  });

});