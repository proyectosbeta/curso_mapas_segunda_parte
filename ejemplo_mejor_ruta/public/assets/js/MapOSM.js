let map = null
let zoom = 13;

mapboxgl.accessToken = ACCESS_TOKEN_MAPBOX;
map = new mapboxgl.Map(
{
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [DEFAULT_LNG, DEFAULT_LAT],
	zoom: 13
});
    
map.addControl(
    new MapboxDirections(
	{
    	accessToken: mapboxgl.accessToken
    }),
    'top-left'
);