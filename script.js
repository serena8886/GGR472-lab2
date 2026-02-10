mapboxgl.accessToken = 'pk.eyJ1IjoibGdzbWl0aCIsImEiOiJja29uNGs1cmYwYnN2MnBwMzM2cDQyN2NrIn0.lZvjUUK8Pc2JDq0tuSRrKQ'; //Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/serenaxie/cmlgr6u5n002001qw2abl8rke', //style URL
    center: [-79.39, 43.66],

});


//Listen for load event, once map finishes loading, trigger the following functions
map.on('load', () => {
    map.easeTo({
    center: [-79.39, 43.66],
    zoom: 14,
    pitch: 60,
    bearing: -35,
    duration: 2500,
    essential: true
  });

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
//3. Add Names
    // labels for dataset1
map.addLayer({
  id: 'dataset1-label',
  type: 'symbol',
  source: 'dataset1',
  layout: {
    'text-field': ['get', 'Name'],
    'text-size': 12,
    'text-offset': [0, 1.1],
    'text-anchor': 'top',
    'text-allow-overlap': false
  },
  paint: {
    'text-color': '#b22222',
    'text-halo-color': '#ffffff',
    'text-halo-width': 1.2
  }
});

// labels for dataset2
map.addLayer({
  id: 'dataset2-label',
  type: 'symbol',
  source: 'dataset2',
  layout: {
    'text-field': ['get', 'Name'],
    'text-size': 12,
    'text-offset': [0, 1.1],
    'text-anchor': 'top',
    'text-allow-overlap': false
  },
  paint: {
    'text-color': '#7a5a00',
    'text-halo-color': '#ffffff',
    'text-halo-width': 1.2
  }
});

});