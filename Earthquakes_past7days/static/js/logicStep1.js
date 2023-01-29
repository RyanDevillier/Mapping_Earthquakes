// Adding console.log to check to see if the code is working
console.log("Working.");

// Light tile layer that we can toggle to display onto our map 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Dark tile layer that we can toggle to display onto our map
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Creating the base layer that holds the maps we can toggle through (light/dark)
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// Creating the map object with center, zoom level, and default layer
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 5,
    layers: [streets]
});

// Passing our map layers into our layers control and adding the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Retrieving the earthquake GeoJSON data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data).addTo(map);
});