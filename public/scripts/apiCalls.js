"use strict";
(function(exports){

  var userStations = {};
  function getLocation(){
    navigator.geolocation.getCurrentPosition(geolocationCallback,error);
  }

  function geolocationCallback (position){
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    var url = 'https://transportapi.com/v3/uk/train/stations/near.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&lat=' + latitude+'&lon='+longitude;
    getStations(url)
  }

  function getStations (url){
    $.ajax({
      type: 'GET',
      url: url,
      success: function(data){
        stationCallback(data);
      }
    });
  }

  function stationCallback (data){
      var closestStation = data.stations[0];
      var urlPartOne = "https://transportapi.com/v3/uk/train/station/";
      var urlPartTwo = "/timetable.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&calling_at=";
      // var urlPartTwo = "/timetable.json?app_id=e86b2488&app_key=ba2675e540841ef26afa07d55dcf4ded&calling_at=";
      var urlPartThree = "&train_status=passenger";
      var startStation = closestStation.station_code;
      var destination = dest.text;
      var getTrainsAPIurl = urlPartOne + startStation + urlPartTwo + destination + urlPartThree;

      getPotentialTrains(getTrainsAPIurl)
  }
  function error (err){
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function getPotentialTrains(url) {
    $.get(url, function(data){
      getTrainsCallback(data);
      // debugger;
      userJourney.updateDepTime(data.departures.all[0].aimed_departure_time);
      userJourney.updatePlatform(data.departures.all[0].platform);
      userJourney.updateStationName(data.station_name);
    });
  }

  function getTrainsCallback (data) {
    var trainUid = data.departures.all[0].train_uid;
    var destination = dest.text;
    var url = "https://transportapi.com/v3/uk/train/service/train_uid:" + trainUid + "///timetable.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&darwin=false&live=false&station_code=" + destination + "&stop_type=arrival";
    $.get(url, function(data){
      getTrainETACallback(data);
    });
  }

  function getTrainETACallback(data) {
    userJourney.updateStopOfInterest(data.stop_of_interest);
    userJourney.updateFinalDestination(data.destination_name);
    userJourney.updateOperator(data.operator_name);
    var stops = data.stops;

    var i;
    for (i = 0; i < stops.length; i++) {
       if(stops[i].station_code == data.stop_of_interest) {
        //  unfinsed -- need to display this on page
        userJourney.updateArrivalTime(stops[i].aimed_arrival_time);
        userJourney.updateSOIName(stops[i].station_name);
      }
    };
    console.log("GPS and Station APIs successful")
    displayJourneyInfo();
  }


  exports.getLocation = getLocation;
})(this);
