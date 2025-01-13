import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css'; // Updated import path for your main CSS file
import 'leaflet/dist/leaflet.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
