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
      if (this.title=="lote1"){
        $("#rend").text("Real: 4.6 NDVI: 3.9, ET:3.6")
      };
      if (this.title=="lote2"){
        $("#rend").text("Real: 4.72 NDVI: 3, ET:4.3")
      }
      if (this.title=="lote3"){
        $("#rend").text("Real: 5.49 NDVI: 3.1, ET:4.4")
      }
  $.ajax({
    url: "static/data/" + this.title + ".json",
    dataType: "json",
    success: function(response) {
      plotgraphs(response);
      },
    error: function(){
      alert("err")
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


  // Define the LatLng coordinates for the polygon.
var lote1 = [
       new google.maps.LatLng(-36.624856035939082,-62.26890087050397), 
       new google.maps.LatLng(-36.610642888387268,-62.250715853986016), 
       new google.maps.LatLng(-36.619275328646118,-62.240379778900646),
       new google.maps.LatLng(-36.621969593311441,-62.244109232319488),
       new google.maps.LatLng(-36.619806986480867,-62.247118706191237),
       new google.maps.LatLng(-36.626448862263956,-62.255797932543295),
       new google.maps.LatLng(-36.625728268511224,-62.256738998054416),
       new google.maps.LatLng(-36.624785448537409,-62.255433453008578),
       new google.maps.LatLng(-36.623476710930845,-62.257014227135819),
       new google.maps.LatLng(-36.617959765597647,-62.249782259427526),
       new google.maps.LatLng(-36.617009673800695,-62.250796342238765),
       new google.maps.LatLng(-36.618454818837471,-62.254751326723955),
       new google.maps.LatLng(-36.619353411182431,-62.255979851423263),
       new google.maps.LatLng(-36.620085920268167,-62.258807783921171),
       new google.maps.LatLng(-36.625016584373064,-62.265010479713212),
       new google.maps.LatLng(-36.625341673168009,-62.264663204888109),
       new google.maps.LatLng(-36.626903461798058,-62.266513554836436),
       new google.maps.LatLng(-36.624856035939082,-62.26890087050397),
  ];

var lote2 = [
       new google.maps.LatLng(-36.574242102473264, -61.971927263758957),
       new google.maps.LatLng(-36.569875063378333, -61.966151210530171),
       new google.maps.LatLng(-36.569884338650375, -61.966000421354892),
       new google.maps.LatLng(-36.575130648865468, -61.959732373466665),
       new google.maps.LatLng(-36.575201937484934, -61.959736944014303),
       new google.maps.LatLng(-36.579764727149715, -61.965502220876836),
       new google.maps.LatLng(-36.579774370780889, -61.965613623426115),
       new google.maps.LatLng(-36.574538499109416,-61.971933020100529),
       new google.maps.LatLng(-36.574242102473264,-61.971927263758957),
  ];

var lote3 = [
       new google.maps.LatLng(-36.66303886785208, -61.7332434261884739),
       new google.maps.LatLng( -36.662718747333088, -61.732979769594671),
       new google.maps.LatLng( -36.662843804831859 ,-61.731933756049983),
       new google.maps.LatLng(-36.662910177873613 ,-61.731538535486877), 
       new google.maps.LatLng( -36.665075794811592 ,-61.728780136788913),
       new google.maps.LatLng( -36.664656909447061 ,-61.727450065491531),
       new google.maps.LatLng(-36.66368842727713 ,-61.726907108560461), 
       new google.maps.LatLng( -36.663671082788497 ,-61.726804002892315),
       new google.maps.LatLng(-36.663676098543199 ,-61.726498182237101), 
       new google.maps.LatLng( -36.663365171252174 ,-61.726467297107469),
       new google.maps.LatLng(-36.66199843518384 ,-61.727729295576928), 
       new google.maps.LatLng( -36.661658968898848 ,-61.728026438923592),
       new google.maps.LatLng(-36.661527056162029 ,-61.728047929769517), 
       new google.maps.LatLng(-36.661416199673447 ,-61.727989375336129), 
       new google.maps.LatLng( -36.660909897207617 ,-61.727388993355738),
       new google.maps.LatLng(-36.66046536986341 ,-61.727332173326886), 
       new google.maps.LatLng(-36.660176525835482 ,-61.72725531895307), 
       new google.maps.LatLng(-36.660125975854221 ,-61.727178280513115), 
       new google.maps.LatLng(-36.661537301965978 ,-61.725394043323313), 
       new google.maps.LatLng( -36.66179049138394 ,-61.725468708307574),
       new google.maps.LatLng( -36.661972368371174 ,-61.725539004852592),
       new google.maps.LatLng(-36.66227573914091 ,-61.72555019698725), 
       new google.maps.LatLng(-36.662358056879746 ,-61.72557742315017), 
       new google.maps.LatLng(-36.66245137999735 ,-61.725627506502825), 
       new google.maps.LatLng(-36.662547343100478 ,-61.725611203114255), 
       new google.maps.LatLng(-36.662862816465619 ,-61.725467856614429), 
       new google.maps.LatLng(-36.663057599528557 ,-61.72521359412459), 
       new google.maps.LatLng(-36.663069701677728 ,-61.725059054337834), 
       new google.maps.LatLng(-36.664634555295258 ,-61.723158409844373), 
       new google.maps.LatLng(-36.664732863835226 ,-61.723083090739038), 
       new google.maps.LatLng(-36.664780405543176 ,-61.723086002197483), 
       new google.maps.LatLng(-36.665232072141606 ,-61.723712621794242), 
       new google.maps.LatLng(-36.6652267938587 ,-61.723845400507379), 
       new google.maps.LatLng(-36.664558665579953, -61.724617871525204), 
       new google.maps.LatLng(-36.664757937844492 ,-61.724999804297802), 
       new google.maps.LatLng(-36.664900638938221 ,-61.725156437323683), 
       new google.maps.LatLng(-36.665069022392323 ,-61.725566058712204), 
       new google.maps.LatLng(-36.665130360589231 ,-61.725821231481817), 
       new google.maps.LatLng(-36.665109380719045 ,-61.726049176582301), 
       new google.maps.LatLng(-36.665249882429428 ,-61.726560615906401), 
       new google.maps.LatLng(-36.665249956813021 ,-61.726708511451307), 
       new google.maps.LatLng(-36.665402707879402 ,-61.727361200319791), 
       new google.maps.LatLng( -36.665402707879402 ,-61.728765039812593), 
       new google.maps.LatLng(-36.667209769039388 ,-61.729705182358153), 
       new google.maps.LatLng(-36.667362962762176 ,-61.729448367252196), 
       new google.maps.LatLng(-36.667450563964735 ,-61.729342818443875), 
       new google.maps.LatLng( -36.668116889005837 ,-61.728466725707435),
       new google.maps.LatLng(-36.667771404151559 -61.725620731210689), 
       new google.maps.LatLng(-36.667769861951257 -61.725509714768066), 
       new google.maps.LatLng( -36.667822977282711,-61.725372468371887),
       new google.maps.LatLng(-36.669036282986077,-61.723923464381201), 
       new google.maps.LatLng(-36.669107595409621,-61.723927833030636), 
       new google.maps.LatLng(-36.669308257932784 ,-61.724124999565319), 
       new google.maps.LatLng(-36.670919122810112 ,-61.726161207700741), 
       new google.maps.LatLng(-36.670938198681924 ,-61.726280698530935), 
       new google.maps.LatLng(-36.670880606480047 ,-61.726380699701394), 
       new google.maps.LatLng(-36.668763972428735 ,-61.728972281596079), 
       new google.maps.LatLng(-36.667830070198761 ,-61.730135150921924), 
       new google.maps.LatLng(-36.667676511872465 ,-61.730251443006459), 
       new google.maps.LatLng(-36.667039232272089 ,-61.730996192145597), 
       new google.maps.LatLng(-36.666931089905134 ,-61.731019136609937), 
       new google.maps.LatLng(-36.666772694401487 ,-61.730957656569494), 
       new google.maps.LatLng(-36.666585016732427 ,-61.731182772398256), 
       new google.maps.LatLng(-36.666619046898155 ,-61.731525014821955), 
       new google.maps.LatLng(-36.665785788033084 ,-61.732553501287143), 
       new google.maps.LatLng(-36.665724532029984 ,-61.732446218192543), 
       new google.maps.LatLng(-36.665415885510392 ,-61.73002404932312), 
       new google.maps.LatLng(-36.665383753066152 ,-61.729933343954947), 
       new google.maps.LatLng(-36.6647016478613 ,-61.730756665427023), 
       new google.maps.LatLng(-36.664953843445161 ,-61.73190349464705), 
       new google.maps.LatLng(-36.66462772135494 ,-61.732164475421463), 
       new google.maps.LatLng( -36.664551935848586 ,-61.732122853052076),
       new google.maps.LatLng(-36.66450520824354 ,-61.731949913371757), 
       new google.maps.LatLng(-36.664347058475258 ,-61.731134215387755), 
       new google.maps.LatLng(-36.663406249712637 ,-61.732170868445046), 
       new google.maps.LatLng(-36.663325244256228 ,-61.732409911758488), 
       new google.maps.LatLng(-36.663176359226831 ,-61.733007111564518), 
       new google.maps.LatLng(-36.663119710326747 ,-61.733232859305517), 
       new google.maps.LatLng(-36.66303886785208,-61.733243426188473),
  ];



  buildshape(lote1, map, '#FF0000', "lote1");
  buildshape(lote2, map, '#00CC00', "lote2");
  buildshape(lote3, map, '#3300CC', "lote3");

  infoWindow = new google.maps.InfoWindow();
}



google.maps.event.addDomListener(window, 'load', initialize);
