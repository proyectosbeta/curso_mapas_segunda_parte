let map = null
let zoom = 13;

mapboxgl.accessToken = ACCESS_TOKEN_MAPBOX;
map = new mapboxgl.Map(
{
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [DEFAULT_LNG, DEFAULT_LAT],
	zoom: 13,
	attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> © Map <a href="https://mapbox.com/">Mapbox</a>'
});
    
map.addControl(
    new MapboxDirections(
	{
		unit: 'metric',
    	accessToken: mapboxgl.accessToken
    }),
    'top-left'
);