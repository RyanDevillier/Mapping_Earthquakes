# Mapping_Earthquakes

## Overview of Project
The goal of this project was to produce an interactive map of earthquake data with JavaScript's open source library, Leaflet.  Specifically, our goal was to generate a map with multiple layers so that the user could toggle between the available earthquake data that they desired.  These layers include markers displaying the location and magnitude of every earthquake recorded within the last 7 days, as well as the option to display the earthquakes on the map with relation to the Earth's tectonic plates.  The data that is displayed in each layer came from an API available at https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php, and the tectonic plate data came from https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json.  

## Results
The first layer of our map allows the user to toggle on and off the data for every earthquake recorded within the last 7 days.  If the user clicks the "Earthquakes" button in the upper-right corner of the map, it will show all the earthquakes recorded within the last 7 days.  The following screenshot shows the map if the user selected only the "Earthquakes" layer from the button in the upper-right corner.  
![Mapping_Earthquakes_Streets_Earthquakes](https://user-images.githubusercontent.com/115128743/215634688-d3b59931-7c6f-4d24-ab20-0aa79b5e5773.png)
We see that the map displays all of the earthquake data, and this prior screenshot also shows us what happens when the user clicks on one of the earthquake markers: a popup appears displaying the magnitude and location of the chosen earthquake.  It is also to be noted that the earthquake data are color-coded based on their magnitude.  The legend presented in the bottom-right corner of the map explains how the colors are assigned to each earthquake.

The second layer of our map allows the user to toggle on and off the tectonic plate data.  If the user clicks the "Tectonic Plates" button in the upper-right hand corner of the map, it will show the tectonic plate boundaries across the Earth.  The following screenshot shows the map if both the "Earthquakes" and the "Tectonic Plates" buttons are selected simultaneously.
![Mapping_Earthquakes_Streets_Earthquakes_TPlates](https://user-images.githubusercontent.com/115128743/215633203-e69879da-3fe4-4f3e-aa17-d87543bc1659.png)

The third layer of our map allows the user to toggle on and off the major earthquake data.  If the user clicks the "Major Earthquakes" button in the upper-right corner of the map, it will show all of the major earthquakes (for our map's purposes, any earthquake greater than 4.5 on the Richter scale).  The following screenshot shows the map if all three of the layers are selected simultaneously.
![Mapping_Earthquakes_Streets_Earthquakes_TPlates_MajorEQ](https://user-images.githubusercontent.com/115128743/215633241-3255753d-9d9a-40bc-9c1f-eb563f4f9bee.png)

In addition to the above layers of data, we have also created our map so that the user can switch between different map styles.  Upon clicking the button in the upper-right corner of the map, we see that the button gives the user the option of having the map in one of three modes: "Streets", "Satellite", and "Dark".  The following screenshot shows the "Satellite" and "Dark" modes, respectively (all of the previous screenshots have already shown the map on "Streets" mode).  
![Mapping_Earthquakes_Satellite_Earthquakes_TPlates_MajorEQ](https://user-images.githubusercontent.com/115128743/215633282-4b9ea77c-f0ed-4a66-94e6-1894224f7971.png)
![Mapping_Earthquakes_Dark_Earthquakes_TPlates_MajorEQ](https://user-images.githubusercontent.com/115128743/215633291-c519fb80-f6b2-45f3-bf16-b4e02068bf7e.png)

The "Satellite" and "Dark" mode screenshots were taken with all three of the earthquake data layers enabled, and the map styles used are from the Mapbox Styles API:
https://docs.mapbox.com/api/maps/styles/.
