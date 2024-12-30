"use strict";

document.addEventListener('DOMContentLoaded', initializeMap);

function initializeMap() {
  var map = createMap();
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
  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-113.5263186, 53.4560181] // Kaskitayo Park

      },
      properties: {
        title: 'Kaskitayo Park'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-113.4505800, 53.4681600] // Millwoods Turf Field

      },
      properties: {
        title: 'Millwoods Turf Field'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-113.4857340, 53.5654030] // Commonwealth Recreation Centre

      },
      properties: {
        title: 'Commonwealth Recreation Centre'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-113.5263186, 53.5232180] // Foote Field (UofA)

      },
      properties: {
        title: 'Foote Field (UofA)'
      }
    }]
  };
  var frisbeeIcon = L.icon({
    iconUrl: 'https://img.icons8.com/hatch/64/frisbee.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
  L.geoJSON(geojson, {
    pointToLayer: function pointToLayer(feature, latlng) {
      return L.marker(latlng, {
        icon: frisbeeIcon
      });
    },
    onEachFeature: function onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.title) {
        layer.bindPopup(feature.properties.title);
      }
    }
  }).addTo(map);
  map.fitBounds(L.geoJSON(geojson).getBounds());
}

function addControls(map) {
  L.control.zoom({
    position: 'topright'
  }).addTo(map);
  L.control.scale().addTo(map);
  L.control.fullscreen({
    position: 'topright'
  }).addTo(map);
  addDirectionsControl(map);
}

function addDirectionsControl(map) {
  var dirControl = L.control({
    position: 'topleft'
  });

  dirControl.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    div.innerHTML = '<button class="controls" onclick="alert(\'Directions functionality here!\')">Get Directions</button>';
    return div;
  };

  dirControl.addTo(map);
}
//# sourceMappingURL=app.dev.js.map
