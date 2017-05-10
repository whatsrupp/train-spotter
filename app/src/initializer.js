(function(exports) {
  function Initializer(geolocator, stationFinder){
    this.geolocator = geolocator;
    this.stationFinder = stationFinder;
  }

  Initializer.prototype = {
    callGeolocator: function() {
      this.geolocator.getLocation();
    },
    callStationLocator: function() {
      this.stationFinder.getStations();
    },
    execute: function() {
      this.callGeolocator();
      this.callStationLocator();
    }
  };

  exports.Initializer = Initializer;
})(this);
