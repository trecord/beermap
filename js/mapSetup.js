var map;
function initMap() {
	// Create a map object and specify the DOM element for display.
	map = new google.maps.Map(document.getElementById('mapArea'), {
		center: {lat: 49.2827, lng: -123.1207},
		scrollwheel: true,
		zoom: 10,
		styles:[
		{
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#f5f5f5"
		  }
		]
		},
		{
		"elementType": "labels.icon",
		"stylers": [
		  {
		    "visibility": "off"
		  }
		]
		},
		{
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#616161"
		  }
		]
		},
		{
		"elementType": "labels.text.stroke",
		"stylers": [
		  {
		    "color": "#f5f5f5"
		  }
		]
		},
		{
		"featureType": "administrative.land_parcel",
		"stylers": [
		  {
		    "visibility": "off"
		  }
		]
		},
		{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#bdbdbd"
		  }
		]
		},
		{
		"featureType": "administrative.neighborhood",
		"elementType": "labels.text",
		"stylers": [
		  {
		    "color": "#666666"
		  },
		  {
		    "weight": 0.5
		  }
		]
		},
		{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#eeeeee"
		  }
		]
		},
		{
		"featureType": "poi",
		"elementType": "geometry.fill",
		"stylers": [
		  {
		    "color": "#ffeb3b"
		  },
		  {
		    "saturation": 5
		  }
		]
		},
		{
		"featureType": "poi",
		"elementType": "labels.text",
		"stylers": [
		  {
		    "visibility": "off"
		  }
		]
		},
		{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#757575"
		  }
		]
		},
		{
		"featureType": "poi.business",
		"stylers": [
		  {
		    "visibility": "off"
		  }
		]
		},
		{
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#e5e5e5"
		  }
		]
		},
		{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#9e9e9e"
		  }
		]
		},
		{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#ffffff"
		  }
		]
		},
		{
		"featureType": "road",
		"elementType": "labels",
		"stylers": [
		  {
		    "visibility": "off"
		  }
		]
		},
		{
		"featureType": "road",
		"elementType": "labels.icon",
		"stylers": [
		  {
		    "visibility": "off"
		  }
		]
		},
		{
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#757575"
		  }
		]
		},
		{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#dadada"
		  }
		]
		},
		{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#616161"
		  }
		]
		},
		{
		"featureType": "road.local",
		"elementType": "geometry.fill",
		"stylers": [
		  {
		    "color": "#FFF27B"
		  },
		  {
		    "lightness": 40
		  },
		  {
		    "weight": 1.5
		  }
		]
		},
		{
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#9e9e9e"
		  }
		]
		},
		{
		"featureType": "transit",
		"stylers": [
		  {
		    "visibility": "off"
		  }
		]
		},
		{
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#e5e5e5"
		  }
		]
		},
		{
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#eeeeee"
		  }
		]
		},
		{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
		  {
		    "color": "#c9c9c9"
		  }
		]
		},
		{
		"featureType": "water",
		"elementType": "labels.text",
		"stylers": [
		  {
		    "visibility": "off"
		  }
		]
		},
		{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
		    "color": "#9e9e9e"
		  }
		]
		}
		]
	});
	map.data.loadGeoJson('/js/breweries.json');
}
