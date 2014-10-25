
   function plotgraphs(data) {
    // setup plots
    var options = {
        grid:{borderColor:'#ccc'},
        series:{shadowSize:0},
        yaxis:{
               tickSize: 0.1,
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
      
    };
