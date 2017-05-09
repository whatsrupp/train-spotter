(function(exports) {
  function stationLocationDataSourcing(lon, lat) {
    this.longitude = lon;
    this.latitude = lat;

    this.httpGet = function() {
      var url = "http://data.gov.uk/data/api/service/transport/naptan_railway_stations/nearest?lat=" + this.latitude + "&lon=" + this.longitude;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", url, true ); // false for synchronous request

      xmlHttp.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status == 200) {
          var data = xmlHttp.responseText;
          updateStationsData(data);
        }
      };

      xmlHttp.send( null );
    };

}
    updateStationsData = function(data){
      var stations = JSON.parse(data);
      var fiveStations = stations.result.slice(0,5);
      userStations = new Stations(fiveStations);
    };

    exports.stationLocationDataSourcing = stationLocationDataSourcing;
})(this);
