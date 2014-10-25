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

var lote4 = [
       new google.maps.LatLng(-36.661261313416126,-61.745434382329961),
       new google.maps.LatLng(-36.662386530690505,-61.743989275661164),
       new google.maps.LatLng(-36.661017014408444,-61.745584979785662),
       new google.maps.LatLng(-36.660830706100718,-61.745715483303464),
       new google.maps.LatLng(-36.660762346221226,-61.745995209200402),
       new google.maps.LatLng(-36.6594289538195,-61.747640389976681),
       new google.maps.LatLng(-36.659341967268446,-61.747670526933817),
       new google.maps.LatLng(-36.65923117147473,-61.747580895947813),
       new google.maps.LatLng(-36.658488675185303,-61.746364015152274),
       new google.maps.LatLng(-36.658443410234156,-61.746065476737058),
       new google.maps.LatLng(-36.658374886820958,-61.745871978862134),
       new google.maps.LatLng(-36.658296383750866,-61.745689697489169),
       new google.maps.LatLng(-36.658189827500024,-61.745493860628976),
       new google.maps.LatLng(-36.65793961540794,-61.742449971650998),
       new google.maps.LatLng(-36.657604307028841,-61.73843080761538),
       new google.maps.LatLng(-36.657630283683247,-61.738018351603706),
       new google.maps.LatLng(-36.657674903287138,-61.737855471324544),
       new google.maps.LatLng(-36.658260249066906,-61.737039651226937),
       new google.maps.LatLng(-36.658100862212429,-61.736734110627722),
       new google.maps.LatLng(-36.657996742788221,-61.736715887295126),
       new google.maps.LatLng(-36.657169595759029,-61.735706870706274),
       new google.maps.LatLng(-36.657001637240505,-61.735377151228128),
       new google.maps.LatLng(-36.656919147117115,-61.734816080050642),
       new google.maps.LatLng(-36.656712941705266,-61.734010819360648),
       new google.maps.LatLng(-36.656329256209865,-61.732875267334116),
       new google.maps.LatLng(-36.656098491080591,-61.732447065987891),
       new google.maps.LatLng(-36.65598099322515,-61.732286070722857),
       new google.maps.LatLng(-36.655984752568365,-61.732191662753195),
       new google.maps.LatLng(-36.656137243991928,-61.73195258971294),
       new google.maps.LatLng(-36.658890587653829,-61.728631548849158),
       new google.maps.LatLng(-36.659111509222555,-61.728349333186699),
       new google.maps.LatLng(-36.659412133914962,-61.728699010732832),
       new google.maps.LatLng(-36.659662867808791,-61.729104784498567),
       new google.maps.LatLng(-36.659641960061272,-61.730109086580299),
       new google.maps.LatLng(-36.659450029060984,-61.73038124618251),
       new google.maps.LatLng(-36.659380652668013,-61.730447973930133),
       new google.maps.LatLng(-36.659200465709745,-61.730425093876782),
       new google.maps.LatLng(-36.65863795651547,-61.730189485382553),
       new google.maps.LatLng(-36.658312552967729,-61.73070189066496),
       new google.maps.LatLng(-36.659234357677263,-61.731728508367226),
       new google.maps.LatLng(-36.661040372184559,-61.733767682394941),
       new google.maps.LatLng(-36.660878368152517,-61.734006182037646),
       new google.maps.LatLng(-36.661797787393567,-61.735091882947636),
       new google.maps.LatLng(-36.661813041601846,-61.735187465054281),
       new google.maps.LatLng(-36.661024371571934,-61.736322106846316),
       new google.maps.LatLng(-36.66110263816406,-61.738184314834513),
       new google.maps.LatLng(-36.661052466635972,-61.738725439227103),
       new google.maps.LatLng(-36.661095585620686,-61.739556228600115),
       new google.maps.LatLng(-36.661370751923151,-61.740543247063641),
       new google.maps.LatLng(-36.660971594983316,-61.740991937127077),
       new google.maps.LatLng(-36.660916701852607,-61.741651073255724),
       new google.maps.LatLng(-36.660872076716352,-61.741813957409803),
       new google.maps.LatLng(-36.660903045131882,-61.741993319198436),
       new google.maps.LatLng(-36.660838932417406,-61.742166835532736),
       new google.maps.LatLng(-36.660818032420345,-61.742212872678294),
       new google.maps.LatLng(-36.660851914514552,-61.742558040921693),
       new google.maps.LatLng(-36.661435466705861,-61.74322094347184),
       new google.maps.LatLng(-36.661614706809182,-61.743267457785016),
       new google.maps.LatLng(-36.661844871143295,-61.743470902772614),
       new google.maps.LatLng(-36.662093580040683,-61.743687320282909),
       new google.maps.LatLng(-36.662300872897532,-61.74374739233096),
       new google.maps.LatLng(-36.66241025827339,-61.743872427519349),
       new google.maps.LatLng(-36.66238653069050,-61.743989275661164),
  ];


var lote5 = [
       new google.maps.LatLng(-36.487803551385333, -62.04504563260933),
       new google.maps.LatLng(-36.487046618198562,-62.044016836091906), 
       new google.maps.LatLng(-36.486890562550826,-62.044101110558358), 
       new google.maps.LatLng(-36.486713752793797,-62.044225343394743), 
       new google.maps.LatLng(-36.48660646447599, -62.04428328162814),
       new google.maps.LatLng(-36.486525916368578,-62.044160024255007), 
       new google.maps.LatLng(-36.486753724826805,-62.043844369944786), 
       new google.maps.LatLng(-36.486113849023781,-62.042976633840269), 
       new google.maps.LatLng(-36.485844215158153,-62.042817487547367), 
       new google.maps.LatLng(-36.485757167870645,-62.042735117840564), 
       new google.maps.LatLng(-36.485529289880333,-62.042490171209316), 
       new google.maps.LatLng(-36.485338973544742,-62.042595825407844), 
       new google.maps.LatLng(-36.485281201025401,-62.042609774566571), 
       new google.maps.LatLng(-36.484937557922485,-62.042622851993535), 
       new google.maps.LatLng(-36.484821000821171,-62.042562170050402), 
       new google.maps.LatLng(-36.483840413283936,-62.041300578978223), 
       new google.maps.LatLng(-36.481690066150023,-62.038517384187692), 
       new google.maps.LatLng(-36.481266536779337,-62.037941126424485), 
       new google.maps.LatLng(-36.481251015561355,-62.037857509245462), 
       new google.maps.LatLng(-36.481283264170855,-62.037771091843361), 
       new google.maps.LatLng(-36.48164608633131, -62.037304880166815),
       new google.maps.LatLng(-36.481650071124143,-62.037210727105247), 
       new google.maps.LatLng(-36.481645796879874, -62.03708653440242),
       new google.maps.LatLng(-36.481684789359896,-62.036953348004722), 
       new google.maps.LatLng(-36.482020113086662,-62.036573857147637), 
       new google.maps.LatLng(-36.482083633376533,-62.036536673641358), 
       new google.maps.LatLng(-36.482161409929795, -62.03650041516056),
       new google.maps.LatLng(-36.482238937463009,-62.036470041233102), 
       new google.maps.LatLng(-36.482341740337624, -62.03651801754453),
       new google.maps.LatLng(-36.484989696290953,-62.039929494371634), 
       new google.maps.LatLng(-36.485022728712515, -62.04004965912786),
       new google.maps.LatLng(-36.485060779243106,-62.040276367566889), 
       new google.maps.LatLng(-36.485170425330516,-62.040950300461198), 
       new google.maps.LatLng(-36.486373437133388,-62.042810569340382), 
       new google.maps.LatLng(-36.487177016328886,-62.042738864047671), 
       new google.maps.LatLng(-36.487268815523983,-62.042821544262324), 
       new google.maps.LatLng(-36.488451498714632,-62.044373709771804), 
       new google.maps.LatLng(-36.487837314485802,-62.045036025306132), 
       new google.maps.LatLng(-36.487803551385333,-62.04504563260933),
  ];


  buildshape(lote1, map, '#FF0000', "lote1");
  buildshape(lote2, map, '#00CC00', "lote2");
  buildshape(lote3, map, '#3300CC', "lote3");
  buildshape(lote4, map, '#FFFF00', "lote4");
  buildshape(lote5, map, '#FF9900', "lote5");
  // Add a listener for the click event.

  infoWindow = new google.maps.InfoWindow();
}



google.maps.event.addDomListener(window, 'load', initialize);
