// Adding console.log to check to see if the code is working
console.log("Working.");

// Creating the map object with a center ([lat, lng]) and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Adding a marker to the map for Los Angeles, California
let marker = L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
