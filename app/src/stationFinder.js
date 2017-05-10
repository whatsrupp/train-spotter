(function(exports) {
  function StationFinder() {

    this.getStations = function(longitude, latitude) {
      var longitude = longitude
      // var url = "http://data.gov.uk/data/api/service/transport/naptan_railway_stations/nearest?lat=" + latitude + "&lon=" + longitude;
      var url = 'https://transportapi.com/v3/uk/train/stations/near.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&lat=51.4728&lon=-0.4876'
      // below is shorthand for $.ajax({
                              //   url: url,
                              //   data: data,
                              //   success: success,
                              //   dataType: dataType
                              // });
      // Read here: https://api.jquery.com/jquery.get/
      // This also replaces the entire XMLHttpRequest() as it already
      // has a call back function that is executed on success.
      // Plus it is already parsing the response.
      $.get(url, function(data){
        updateStationsData(data);
      });
    }

    // Plus by brining this function inside we no longer
    // need the .bind(this);
    updateStationsData = function(data) {
      var fiveStations = data.stations.slice(0,5);
      // var fiveStations = data.result.slice(0,5);
      userStations = new Stations(fiveStations);
    };
  }

    exports.StationFinder = StationFinder;
})(this);
