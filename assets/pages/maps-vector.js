//------------- maps-vector.js -------------//
$(document).ready(function() {



	//------------- Vector maps -------------//
	$('#world-map-markers').vectorMap({
	    map: 'world_mill_en',
	    scaleColors: ['#f7f9fe', '#29b6d8'],
	    normalizeFunction: 'polynomial',
	    hoverOpacity: 0.7,
	    hoverColor: false,
		focusOn:{
			x: 0.5,
			y: 0.5,
			scale: 2.0
		},
		zoomMin:0.85,
	    markerStyle: {
	      initial: {
	        fill: '#df6a78',
	        stroke: '#df6a78'
	      }
	    },
	    backgroundColor: '#fff',
	    regionStyle:{
			initial: {
				fill: '#dde1e7',
				"fill-opacity": 1,
				stroke: '#f7f9fe',
				"stroke-width": 0,
				"stroke-opacity": 0
			},
			hover: {
				"fill-opacity": 0.8
			},
			selected: {
				fill: 'yellow'
			}
		},
	    markers: [
	    	//http://www.latlong.net/
			{latLng: [-25.3935, -51.4562], name: 'Guarapuava'},
			{latLng: [-25.0945, -50.1633], name: 'Ponta Grossa'}		
	    ]
	});
	
});