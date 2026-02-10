mapboxgl.accessToken = 'pk.eyJ1IjoibGdzbWl0aCIsImEiOiJja29uNGs1cmYwYnN2MnBwMzM2cDQyN2NrIn0.lZvjUUK8Pc2JDq0tuSRrKQ'; //Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/serenaxie/cmlgr6u5n002001qw2abl8rke', //style URL
    center: [-79.39, 43.66], // starting position [lng, lat] Queens Park
    zoom: 10, // starting zoom
});

//Listen for load event, once map finishes loading, trigger the following functions
map.on('load', () => {

// 1. Add data sets
    // add geojson data set 1
 map.addSource('dataset1', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/serena8886/GGR472-lab2/main/dataset1.geojson'
 });
    // add geojson data set 2
 map.addSource('dataset2', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/serena8886/GGR472-lab2/main/dataset2.geojson'
 });
// 2. Visualized data sets
    map.addLayer({
  id: 'dataset1-layer',
  type: 'circle',
  source: 'dataset1',
  paint: {
    'circle-radius': 5,
    'circle-color': '#ff4d4f',
    'circle-stroke-width': 1,
    'circle-stroke-color': '#ffffff'
  }
});

    map.addLayer({
        id: 'dataset2',
        type: 'circle',
        source: 'dataset2',
        paint: {
            'circle-radius': 10,
            'circle-color': '#ecc74f'
        }
    });

});