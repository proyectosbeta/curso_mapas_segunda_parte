let map = null;

// Asuncion - Paraguay.
let lng = -57.623807;
let lat = -25.299114;
let zoom = 13;

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZWdvODUiLCJhIjoiY2s5cW1qdjVvMGh5cjNpbW9xaTlydHA5YSJ9.kMUag7z3skxMSnAroGMx1w';
map = new mapboxgl.Map(
{
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [lng, lat],
	zoom: 13
});
    
map.addControl(
    new MapboxDirections(
	{
    	accessToken: mapboxgl.accessToken
    }),
    'top-left'
);