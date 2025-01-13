import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../../src/pages/HomePage';

test('renders homepage with correct text', () => {
  const { getByText } = render(<HomePage />);
  const homePageElement = getByText(/Welcome to the EUAP Map Locations/i);
  expect(homePageElement).toBeInTheDocument();
});
