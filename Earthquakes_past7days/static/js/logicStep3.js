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
    layers: [satelliteStreets]
});

// Passing our map layers into our layers control and adding the layers control to the map
L.control.layers(baseMaps).addTo(map);

// This function returns thte style  data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function to calculate
// the radius.
function styleInfo(feature) {
    return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: getColor(feature.properties.mag),
        color: "#000000",
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
    };
}

// This function determines the color of the circle based on the magnitude of the earthquake
function getColor(magnitude) {
    if (magnitude > 5) {
        return "#ea2c2c";
    }
    if (magnitude > 4) {
        return "#ea822c";
    }
    if(magnitude > 3) {
        return "#ee9c00";
    }
    if (magnitude > 2) {
        return "#eecc00";
    }
    if (magnitude > 1) {
        return "#d4ee00";
    }
    return "#98ee00";
}

// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
    if (magnitude === 0) {
        return 1;
    }
    return magnitude * 4;
}


// Retrieving the earthquake GeoJSON data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
    
    // Turning each feature into a circleMarker on the map
    pointToLayer: function(feature, latlng) {
        console.log(data);
        return L.circleMarker(latlng);
    },

    // Setting the style for each circleMarker using our styleInfo function
    style: styleInfo,

    // We create a popup for each circleMarker to display the magnitude and
    // location of each earthquake after the marker has been created and styled
    onEachFeature: function(feature, layer) {
        layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place)
    }

    }).addTo(map);

});