(function(exports) {

// https://transportapi.com/v3/uk/train/service/train_uid:C20085///timetable.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&darwin=false&live=false&station_code=SWI&stop_type=arrival
  function getTrainETA(trainUid, destination) {
    url = "https://transportapi.com/v3/uk/train/service/train_uid:" + trainUid + "///timetable.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&darwin=false&live=false&station_code=" + destination + "&stop_type=arrival";
    $.get(url, function(data){
      var stopOfInterest = data.stop_of_interest;
      var finalDestination = data.destination_name;
      var operator = data.operator_name;
      var stops = data.stops;
      for (i = 0; i < stops.length; i++) {
         if(stops[i].station_code == stopOfInterest) {
          //  unfinsed -- need to display this on page
           console.log(stops[i].aimed_arrival_time); }
         }
    });
  }


  exports.getTrainETA = getTrainETA;
})(this);
