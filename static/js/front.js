
   function plotgraphs(data) {
    // setup plots
    var options = {
        grid:{borderColor:'#ccc'},
        series:{shadowSize:0},
        legend: {position: "top-left"},
        yaxis:{
               //tickFormatter: function(val, axis) { return val;},
               axisLabel: "Biomasa"
              },
          xaxis:{
                mode: 'time',
                axisLabel: "Tiempo",
                timeformat: "%H:%Mhs",    
                tickSize: [1, "month"],  
                tickFormatter: function(val, axis){ 
                                                  var date = new Date(val);
                                                  return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();}},//+ date.getHours() +':'+ (date.getMinutes()<10?'0':'') + date.getMinutes() + "hs";}},
      };
       
            
     var plot = $.plot($("#chart1"), data, options);
     var placeholder = $("#chart1");
     o = plot.pointOffset({ x: 1319425200000, y: 1000});
     placeholder.append("<div style='position:absolute;left:" + (o.left + 4) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>Inicio Floracion</div>");
    };
