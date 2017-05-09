// var gotCoordinates = true;
// var doIKnowTheCoordinatesYet = new Promise(
//   function(resolve, reject){
//     if (gotCoordinates){
//       var coordinates = {
//         lat: 0.723,
//         long: 0.73
//       };
//       console.log('I have coordinates');
//       resolve(coordinates);
//     } else{
//       var error = new Error('coordinates not back yet');
//       reject(error);
//     }
//   }
// );
(function(exports){

  function Geolocator(){
    this.coordinates = {};
    this.hasGotCoordinates = false;


    this.callGeolocator = function(){
      navigator.geolocation.getCurrentPosition(this.success,this.error);
    };

    this.success = function(pos){
      var coordinates = pos.coords
      console.log('Your current position is:');
      console.log(`Latitude : ${coordinates.latitude}`);
      console.log(`Longitude: ${coordinates.longitude}`);
      console.log(`More or less ${coordinates.accuracy} meters.`);
      updateState(pos)
    };

    updateState = function(pos){
      Geolocator.coordinates = pos.coords;
      Geolocator.hasGotCoordinates = true;
      debugger;
    };

    this.error = function(err){
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
  }

  // function callGeolocator(){
  //   navigator.geolocation.getCurrentPosition(success,error);
  // };
  //
  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // };
  //
  // function success(pos) {
  //   coordinates = pos.coords;
  //   hasGotCoordinates = true;
  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${coordinates.latitude}`);
  //   console.log(`Longitude: ${coordinates.longitude}`);
  //   console.log(`More or less ${coordinates.accuracy} meters.`);
  // };


  // exports.callGeolocator = callGeolocator;
  // exports.hasGotCoordinates = hasGotCoordinates;
  // exports.coordinates = coordinates
  exports.Geolocator = Geolocator;

})(this);



// var askForCoordinates = function(){
//   doIKnowTheCoordinatesYet
//     .then(function(fulfilled){
//       console.log(fulfilled)
//     })
//     .catch(function(error){
//       console.log(error.message)
//     });
//
// };
