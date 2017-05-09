(function(exports) {
  function Stations(stations){
    // this.stationProcessor = new stationLocationDataSourcing(lon, lat);
    // // mock station list dataString()
    // this.stationProcessor.generateURL();
    this.list = stations;
  }

  Stations.prototype = {
    getLikelyStation: function() {
      return this.list[0];
    }
  };

  exports.Stations = Stations;
})(this);
