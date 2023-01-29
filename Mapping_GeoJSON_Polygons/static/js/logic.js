
// Adding console.log to check to see if the code is working
console.log("Working.");

// Light tile layer that we can toggle to display onto our map 
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
    Street: light,
    Dark: dark
};

// Creating the map object with center, zoom level, and default layer
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [light]
});

// Passing our map layers into our layers control and adding the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/RyanDevillier/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// Creating a style for the lines
let myStyle = {
    color: '#ffffa1',
    weight: 2
};

// Grabbing the GeoJSON data
d3.json(torontoData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data
  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + "Airline: " + feature.properties.airline + "</h3> <hr>" + "Destination: " + feature.properties.dst);
    }
  }).addTo(map);

});
