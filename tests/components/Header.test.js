import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@components/Header'; // Updated import

test('renders header with correct text', () => {
  render(<Header />);
  const headerElement = screen.getByText(/EUAP Map Locations/i);
  expect(headerElement).toBeInTheDocument();
});
