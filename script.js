mapboxgl.accessToken = 'pk.eyJ1IjoibGdzbWl0aCIsImEiOiJja29uNGs1cmYwYnN2MnBwMzM2cDQyN2NrIn0.lZvjUUK8Pc2JDq0tuSRrKQ'; //Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/serenaxie/cmlgr6u5n002001qw2abl8rke', //style URL
    center: [	-79.3923, 43.6647], // starting position [lng, lat] Queens Park
    zoom: 12, // starting zoom
});

//Listen for load event, once map finishes loading, trigger the following functions
map.on('load', () => {

// 1. Add data sets
    // add geojson data set 1 and geojson data set 2
    