
var stationFinder = new StationFinder();
var geolocator = new Geolocator(stationFinder);
var initialize = new Initializer(geolocator, stationFinder);

// -0.086092, 51.5077
document.addEventListener('DOMContentLoaded', function () {
  dest = new Destination();

  function captureUserDestination() {
    document.getElementById('create').addEventListener('click', function(clickEvent) {
      clickEvent.preventDefault();
      dest.saveDestination(document.getElementById('destination').value);
      // below for testing purposes only
      $('.usr-destination').text(dest.getText());
    });
  };

  captureUserDestination()
});
