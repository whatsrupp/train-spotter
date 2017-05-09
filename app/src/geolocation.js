(function(exports){

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    debugger;
    return crd

  };

  // var promise = new Promise(function(resolve, reject) {
  // // do a thing, possibly async, then…
  //
  //   if (/* everything turned out fine */) {
  //     resolve("Stuff worked!");
  //   }
  //   else {
  //     reject(Error("It broke"));
  //   }
  // });

  // promise.then(function(result) {
  //   console.log(result); // "Stuff worked!"
  // }, function(err) {
  //   console.log(err); // Error: "It broke"
  // });
  //

  function dummy(){

    debugger;
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  // navigator.geolocation.getCurrentPosition(success, error, options);

  function callGeolocator(){
    debugger;
    var crd = navigator.geolocation.getCurrentPosition(success,error,options);
    debugger;
    return crd
  };

// exports.callGeolocator = callGeolocator;
  exports.dummy = dummy;
})(this);
