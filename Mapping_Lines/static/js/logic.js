// Adding console.log to check to see if the code is working
console.log("Working.");

// Creating the map object with a center ([lat, lng]) and zoom level
let map = L.map('mapid').setView([37.6214, -122.3790], 5);

// Coordinates for each point to be used in the line
let line = [
    [37.6214, -122.3790],
    [30.2027, -97.6655],
    [43.6775, -79.6308],
    [40.6418, -73.7810]
];

// Creating a polyline using the line coordinates and making the line red
L.polyline(line, {
    color: "blue",
    dashArray: '7, 7',
    weight: 4,
    opacity: 0.5
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


