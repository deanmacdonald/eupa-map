document.addEventListener('DOMContentLoaded', () => {
  let map = L.map('map').setView([53.5444, -113.4909], 10); // Centered on Edmonton

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
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

  geojson.features.forEach(marker => {
    L.marker([marker.geometry.coordinates[1], marker.geometry.coordinates[0]])
      .bindPopup(marker.properties.title)
      .addTo(map);
  });

  // Fit the map to show all markers
  let bounds = L.latLngBounds(geojson.features.map(marker => {
    return [marker.geometry.coordinates[1], marker.geometry.coordinates[0]];
  }));
  map.fitBounds(bounds);
});
