import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Map from './Map';  // Ensure the correct path to your component

test('renders Map component', () => {
  render(<Map />);
  const mapElement = screen.getByTestId('map');  // The test ID from your Map component
  expect(mapElement).toBeInTheDocument();
});
