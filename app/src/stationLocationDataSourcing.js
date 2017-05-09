(function(exports) {
  function stationLocationDataSourcing(lon, lat) {
    this.longitude = lon;
    this.latitude = lat;
}

  stationLocationDataSourcing.prototype = {
      generateURL: function () {
        var url = "http://data.gov.uk/data/api/service/transport/naptan_railway_stations/nearest?lat=" + this.latitude + "&lon=" + this.longitude;
        return url;
      },

      httpGet: function() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", this.generateURL(), false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
      },

      generateStationData: function() {
        var data = this.httpGet();
        var allStationData = JSON.parse(data);
        return allStationData;
      },

      closestStations: function() {
        this.generateStationData()
        return allStationData.result.slice(0,5);
      }

    };

    exports.stationLocationDataSourcing = stationLocationDataSourcing;
})(this);
