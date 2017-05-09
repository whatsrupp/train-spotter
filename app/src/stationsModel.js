(function(exports) {
  function Stations(stations){
    this.list = stations;
  }

  Stations.prototype = {
    getLikelyStation: function() {
      return this.list[0];
    }
  };

  exports.Stations = Stations;
})(this);
