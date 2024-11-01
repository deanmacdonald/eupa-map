document.addEventListener('DOMContentLoaded', initializeMap);

function initializeMap() {
  let map = createMap();
  addTileLayer(map);
  addGeoJsonData(map);
  addControls(map);
}

function createMap() {
  return L.map('map').setView([53.5461, -113.4938], 10); // Centered on Edmonton
}

function addTileLayer(map) {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

function addGeoJsonData(map) {
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-113.5263186, 53.4560181] // Kaskitayo Park
        },
        properties: {
          title: 'Kaskitayo Park'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-113.4505800, 53.4681600] // Millwoods Turf Field
        },
        properties: {
          title: 'Millwoods Turf Field'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-113.4857340, 53.5654030] // Commonwealth Recreation Centre
        },
        properties: {
          title: 'Commonwealth Recreation Centre'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-113.5263186, 53.5232180] // Foote Field (UofA)
        },
        properties: {
          title: 'Foote Field (UofA)'
        }
      }
    ]
  };

  const frisbeeIcon = L.icon({
    iconUrl: 'https://img.icons8.com/hatch/64/frisbee.png', // Frisbee icon URL
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  L.geoJSON(geojson, {
    pointToLayer: (feature, latlng) => L.marker(latlng, { icon: frisbeeIcon }),
    onEachFeature: (feature, layer) => {
      if (feature.properties && feature.properties.title) {
        layer.bindPopup(feature.properties.title);
      }
    }
  }).addTo(map);

  map.fitBounds(L.geoJSON(geojson).getBounds());
}

function addControls(map) {
  L.control.zoom({ position: 'topright' }).addTo(map);
  L.control.scale().addTo(map);
  L.control.fullscreen({ position: 'topright' }).addTo(map);

  addNavigationControl(map);
  addDirectionsControl(map);
}

function addNavigationControl(map) {
  const navControl = L.control({ position: 'topleft' });
  navControl.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');[_{{[_{{{CITATION{{{_1{](https://github.com/maxpou-slides/vuejs-training/tree/635d88467630e3f33a550d6f9c95a37105896715/docs%2Fpart-1.md)[_{{{CITATION{{{_2{](https://github.com/afutseng/MySQL-HBase-SQLBridge/tree/05e9d9b4e8ccef24c91f43270a8cd61df3c3ac61/examples%2Fhbasemyadmin%2Fimport-table.php){CITATION{{{_3{](https://github.com/anandimous/Personal-Website-Nandi/tree/b0542e80fba802a2e67e92e04a270b18a285c2ff/index.php)