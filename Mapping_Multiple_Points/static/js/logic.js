// Adding console.log to check to see if the code is working
console.log("Working.");

// Creating the map object with a center ([lat, lng]) and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

// An array containing each city's location, state, and population.
let cityData = cities;

// Looping through the cities array and creating one marker for each city
cityData.forEach(function(city) {
    console.log(city);
    L.circleMarker(
        city.location,
        {
        radius: city.population/200000,
        color: "#ffa500",
        weight: 4
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
