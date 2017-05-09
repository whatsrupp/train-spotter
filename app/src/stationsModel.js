(function(exports) {
  function Stations(lon, lat){
    this.stationProcessor = new stationLocationDataSourcing(lon, lat);
    // mock station list dataString()
    this.list = this.stationProcessor.closestStations();
  };

  Stations.prototype = {
    getLikelyStation: function() {
      return this.list[0];
    }
  };

  exports.Stations = Stations;
})(this);
