(function(exports) {
  function StationFinder(lon, lat) {
    this.longitude = lon;
    this.latitude = lat;

    this.getStations = function() {
      var url = "http://data.gov.uk/data/api/service/transport/naptan_railway_stations/nearest?lat=" + this.latitude + "&lon=" + this.longitude;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", url, true ); // false for synchronous request

      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === XMLHttpRequest.DONE && xmlHttp.status == 200) {
          var data = xmlHttp.responseText;
          console.log(data);
          this.updateStationsData(data);
        }
      }.bind(this);
      xmlHttp.send( null );
    }
  }
    StationFinder.prototype.updateStationsData = function(data) {
      var stations = JSON.parse(data);
      console.log(stations);
      var fiveStations = stations.result.slice(0,5);
      userStations = new Stations(fiveStations);
    }.bind(this);



    exports.StationFinder = StationFinder;
})(this);
