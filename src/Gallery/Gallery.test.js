import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';
import renderer from 'react-test-renderer';

import { render cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Gallery', () => {

  afterEach(cleanup);
  
})