var map;
var infoWindow;

function buildshape(coords, map, color, title){
  // Construct the polygon.
  shape = new google.maps.Polygon({
    paths: coords,
    strokeColor: color,
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: color,
    fillOpacity: 0.35,
    title: title 
  });
  shape.setMap(map);
  google.maps.event.addListener(shape, 'click', graph);
}

function graph(event){
  alert(this.title);
  $.ajax({
    url: "static/data/" + this.title + ".csv",
    dataType: "text",
    success: function(response) {
      alert(response);
      }
  });
}

function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(-36.601632,-61.997065),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  map = new google.maps.Map(document.getElementById('map_canvas'),
      mapOptions);
 var lote1 = [
       new google.maps.LatLng(-36.488378, -62.044971),
       new google.maps.LatLng(-36.481288, -62.044971),
       new google.maps.LatLng(-36.481288, -62.036531),
       new google.maps.LatLng(-36.488378, -62.036531),
       new google.maps.LatLng(-36.488378, -62.044971)
  ];
 
    var lote2 = [
       new google.maps.LatLng(-36.662345, -61.747551),
       new google.maps.LatLng(-36.656065, -61.747551),
        new google.maps.LatLng(-36.656065, -61.728481),
       new google.maps.LatLng(-36.662345, -61.728481),
        new google.maps.LatLng(-36.662345,-61.747551)
  ];

    var lote3 = [
       new google.maps.LatLng( -36.670891, -61.733186),
       new google.maps.LatLng( -36.660183, -61.733186),
        new google.maps.LatLng( -36.660183, -61.72313),
       new google.maps.LatLng( -36.670891, -61.72313),
        new google.maps.LatLng(-36.670891, -61.733186)
  ];

    var lote4 = [
       new google.maps.LatLng(-36.579725, -61.971891),
       new google.maps.LatLng(-36.569901, -61.971891),
        new google.maps.LatLng(-36.569901,-61.95976),
       new google.maps.LatLng(-36.579725, -61.95976),
        new google.maps.LatLng(-36.579725,-61.971891 )
  ];

    var lote5 = [
       new google.maps.LatLng( -36.626766, -62.268751),
       new google.maps.LatLng( -36.6108, -62.268751),
        new google.maps.LatLng(-36.6108, -62.240891),
       new google.maps.LatLng(-36.626766, -62.240891),
        new google.maps.LatLng(-36.626766, -62.268751 )
  ];
  // Define the LatLng coordinates for the polygon.

  buildshape(lote1, map, '#FF0000', "lote1");
  buildshape(lote2, map, '#00CC00', "lote2");
  buildshape(lote3, map, '#3300CC', "lote3");
  buildshape(lote4, map, '#FFFF00', "lote4");
  buildshape(lote5, map, '#FF9900', "lote5");
  // Add a listener for the click event.

  infoWindow = new google.maps.InfoWindow();
}



google.maps.event.addDomListener(window, 'load', initialize);
