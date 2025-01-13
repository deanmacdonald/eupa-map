import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../client-side/src/App';

test('full app rendering/navigating', async () => {
  render(
    <Router>
      <App />
    </Router>
  );
  
  // Verify HomePage renders
  expect(screen.getByText(/EUAP Map Locations/i)).toBeInTheDocument();

  // Simulate navigation to MapPage
  fireEvent.click(screen.getByText(/Go to Map/i));
  
  // Check if Loading... text appears while navigating
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  // Wait for the MapPage to load
  await waitFor(() => expect(screen.getByTestId('map')).toBeInTheDocument());
});
