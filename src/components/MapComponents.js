import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.fullscreen';
import 'leaflet/dist/leaflet.css';
import 'leaflet.fullscreen/Control.FullScreen.css';
import '@styles/MapPage.css'; // Ensure the alias is used correctly

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map-container').setView([53.5461, -113.4938], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-113.5263186, 53.4560181],
          },
          properties: {
            title: 'Kaskitayo Park',
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-113.4505800, 53.4681600],
          },
          properties: {
            title: 'Millwoods Turf Field',
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-113.4857340, 53.5654030],
          },
          properties: {
            title: 'Commonwealth Recreation Centre',
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-113.5263186, 53.5232180],
          },
          properties: {
            title: 'Foote Field (UofA)',
          },
        },
      ],
    };

    const frisbeeIcon = L.icon({
      iconUrl: 'https://img.icons8.com/hatch/64/frisbee.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    L.geoJSON(geojson, {
      pointToLayer: (feature, latlng) => L.marker(latlng, { icon: frisbeeIcon }),
      onEachFeature: (feature, layer) => {
        if (feature.properties && feature.properties.title) {
          layer.bindPopup(feature.properties.title);
        }
      },
    }).addTo(map);

    map.fitBounds(L.geoJSON(geojson).getBounds());

    L.control.zoom({ position: 'topright' }).addTo(map);
    L.control.scale().addTo(map);
    L.control.fullscreen({ position: 'topright' }).addTo(map);
  }, []);

  return <div id="map-container" style={{ height: '600px' }}></div>;
};

export default MapComponent;
