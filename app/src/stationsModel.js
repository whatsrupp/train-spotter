(function(exports) {
  function Stations(){
    var stationProcessor = new stationLocationDataSourcing();
    this.list = stationProcessor.closestStations(dataString());
  };

  exports.Stations = Stations;
})(this);
