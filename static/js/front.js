   $(document).ready(function() {
      $("#probes").change(getcurrentprobedata);
      $("#probes").change(getbat);
      $("#probes").change(getlasts);
      getcurrentprobedata();
      getbat();
      getlasts();
   });  

   function getcurrentprobedata(){
     probeid = $("#probes").val()
     $.get("/probes/" + probeid , plotprobe);
   };

   function getbat(){
     probeid = $("#probes").val()
     $.get("/probes/bat/" + probeid , function(data){
      $("#bat").text(data + "%");
     });
   };
   
  function getlasts(){
     probeid = $("#probes").val()
     $.get("/probes/lasts/" + probeid , function(data){
      $("#lasts").html(data);
     });
   };

   function plotprobe(data) {
    function getRandomData(data) {
       var res = [];
       for (var i = 0; i < total.length; ++i)
         res.push([startdate+(i*900*1000), data[i]]);
       return res;
    }
     
    // setup control widget
    var updateInterval = 50000;
      
    // setup plots
    var options = {
        grid:{borderColor:'#ccc'},
        series:{shadowSize:0},
        yaxis:{
          	   //min: PuntMarch * 0.8,
               //max: CapCamp * 1.10,
          	   tickSize: 100,
               tickFormatter: function(val, axis) { return val +  "khz";},
               axisLabel: "Humedad del Suelo (khz) [%]"
              },
          xaxis:{
                mode: 'time',
                axisLabel: "Tiempo",
                timeformat: "%H:%Mhs",    
                tickSize: [1, "day"],  
                tickFormatter: function(val, axis){ 
                                                  var date = new Date(val);
                                                  return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();}},//+ date.getHours() +':'+ (date.getMinutes()<10?'0':'') + date.getMinutes() + "hs";}},
      };
       
    //var dataset =  [//{data: getRandomData(data1), label: "0-20cm"},
                     //{data: getRandomData(data2), label: "20-40cm"},
                     //{data: getRandomData(data3), label: "40-60cm"},
                     //{data: getRandomData(data4), label: "60-80cm"},
                     //{data: cc, fillBetween: "D", lines: { show: true,  fill: 0.1}, label: "CC"},
                     //{data: pmp,id: "D", label: "PMP"}, 
            				 //{data: getRandomData(total), label: "Total"},
                     //{data: au, label: "Recarga"}
    //                 ];
            
     var plot = $.plot($("#chart1"), data, options);
      
    };
