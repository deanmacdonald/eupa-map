import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../src/components/Footer';

test('renders footer with correct text', () => {
  const { getByText } = render(<Footer />);
  const footerElement = getByText(/All Rights Reserved 2025/i);
  expect(footerElement).toBeInTheDocument();
});
