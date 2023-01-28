// Adding console.log to check to see if the code is working
console.log("Working.");

// Light tile layer that we can toggle to display onto our map 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Dark tile layer that we can toggle to display onto our map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Creating the base layer that holds the maps we can toggle through (light/dark)
let baseMaps = {
    Street: streets,
    Dark: dark
};

// Creating the map object with center, zoom level, and default layer
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});

// Passing our map layers into our layers control and adding the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/RyanDevillier/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing the GeoJSON data
d3.json(airportData).then(function(data) {
  console.log(data);
  
  // Creating a GeoJSON layer with the retrieved data
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "</h2> <hr>" + "Airport Name: " + feature.properties.name);
    }
  }).addTo(map);

});