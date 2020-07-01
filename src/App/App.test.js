import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom';

describe('App', () => {

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should render correctly', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('title')).toHaveTextContent('My Photo Album');
  });

})
