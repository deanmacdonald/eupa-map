import React from 'react';
import { render, waitFor } from '@testing-library/react';
import MapPage from '../../src/pages/MapPage';

test('renders map component', async () => {
  const { container } = render(<MapPage />);
  await waitFor(() => expect(container.querySelector('.leaflet-container')).toBeInTheDocument());
});
