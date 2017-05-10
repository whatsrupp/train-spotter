(function(exports){

  function Geolocator(stationFinder){

    this.coordinates = {}
    this.hasGotCoordinates = false;
    this.stationFinder = stationFinder;

    this.getLocation = function(){
      navigator.geolocation.getCurrentPosition(this.success,this.error);
    }.bind(this);

    this.success = function(position){
      var coordinates = this.saveCurrentCoordinates(position)
      this.outputAPIcallStatus(coordinates);
      var longitude = coordinates.longitude;
      var latitude = coordinates.latitude;
      this.stationFinder.getStations(longitude, latitude);
    }.bind(this);

    this.saveCurrentCoordinates = function (position){
      coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        }

      this.coordinates = coordinates;
      this.hasGotCoordinates = true;
      return coordinates;
    }

    this.outputAPIcallStatus = function (coordinates){
      console.log(`Latitude : ${coordinates.latitude}`);
      console.log(`Longitude: ${coordinates.longitude}`);
    }

    updateState = function(pos){
      Geolocator.coordinates = pos.coords;
      Geolocator.hasGotCoordinates = true;
    };

    this.error = function(err){
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
  }
  exports.Geolocator = Geolocator;
})(this);
