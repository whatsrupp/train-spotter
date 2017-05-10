(function(exports) {
  function StationFinder() {

    this.getStations = function(longitude, latitude) {
      var url = 'https://transportapi.com/v3/uk/train/stations/near.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&lat='+latitude+'&lon='+longitude;
      $.get(url, function(data){
        updateStationsData(data);
      });
    }
      updateStationsData = function(data) {
      var fiveStations = data.stations.slice(0,5);
      userStations = new Stations(fiveStations);
    };
  }

  exports.StationFinder = StationFinder;
})(this);
