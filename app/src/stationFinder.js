(function(exports) {
  function StationFinder() {

    this.getStations = function(longitude, latitude) {
      var longitude = longitude
      // var url = "http://data.gov.uk/data/api/service/transport/naptan_railway_stations/nearest?lat=" + latitude + "&lon=" + longitude;
      var url = 'https://transportapi.com/v3/uk/train/stations/near.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&lat=51.4728&lon=-0.4876'
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
      // $.ajax({
      //   type: 'GET',
      //   url: url,
      //   success: function(data){
      //     console.log(data);
      //     this.updateStationsData(data);
      //   }.bind(this)
      // });
      //   url, function(data){
      //   debugger;
      //   // var data = xmlHttp.responseText;
      //   console.log(data);
      //   this.updateStationsData(data);
      // }.bind(this));


    }
  }




    StationFinder.prototype.updateStationsData = function(data) {
      var stations = JSON.parse(data);
      console.log(stations);
      var fiveStations = stations.stations.slice(0,5);
      // var fiveStations = stations.result.slice(0,5);
      userStations = new Stations(fiveStations);
    }.bind(this);



    exports.StationFinder = StationFinder;
})(this);
