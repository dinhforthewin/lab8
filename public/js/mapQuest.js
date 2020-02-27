function initMap() {
	// add your code here
	L.mapquest.key = 'dTH3AJtsf3zMl04PD6GPTYSxgGiGl6Pd';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.878873, -117.235899],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12,
  zoomControl: false
});

// Add marker to map
L.marker([32.878873, -117.235899]).addTo(map);
}