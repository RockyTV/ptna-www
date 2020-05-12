//
//
//
const OSM_API_URL_PREFIX = 'http://openstreetmap.org/api/0.6/relation/';
const OSM_API_URL_SUFFIX = '/full.json';

function showrelation( relation_id ) {

	var mymap = L.map('relationmap').setView([48.0649, 11.6612], 10);

    L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                {
                 maxZoom: 19,
                 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
               ).addTo(mymap);

    // mymap.fitBounds(route.getBounds());

    if ( 1 ) { //relation_id.toString().match('/^\d+$/') ) {

        var url     = `${OSM_API_URL_PREFIX}${relation_id}${OSM_API_URL_SUFFIX}`;
        var request = new XMLHttpRequest();
        request.open( "GET", url );
        request.onreadystatechange = function() {
            if ( request.readyState === 4 && request.status ===200 ) {
                readHttpResponse( request.responseText );
            }
        };

        request.send();
    }
}

function readHttpResponse( data ) {
    console.log( '>' + data.toString() + '<' );;
}