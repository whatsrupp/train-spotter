(function(exports) {
  function stationLocationDataSourcing() {
}

  stationLocationDataSourcing.prototype = {

      httpGet: function(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
      },

      generateStationData: function(url) {
        var data = this.httpGet(url);
        var allStationData = JSON.parse(data);
        return allStationData;
      },

      closestStations: function(allStationData) {
        return allStationData.result.slice(0,15);
      }

    };

    exports.stationLocationDataSourcing = stationLocationDataSourcing;
})(this);
