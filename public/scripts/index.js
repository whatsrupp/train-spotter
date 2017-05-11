//
// var stationFinder = new StationFinder();
// var geolocator = new Geolocator(stationFinder);
// var initialize = new Initializer(geolocator, stationFinder);

// -0.086092, 51.5077


$(document).ready(function() {
  userJourney = new Journey();
  dest = new Destination();
  getDetails();

  function getDetails() {
    document.getElementById('create').addEventListener('click', function(clickEvent) {
      clickEvent.preventDefault();
      captureUserDestination();
      getLocation();
    });
  };

  function captureUserDestination() {
    dest.saveDestination(document.getElementById('destination').value);
    switchView();
    updateMsg();
  };

  function goToHomePage(){
    $('#train-info').removeClass('hidden');
    $('#finder').removeClass('hidden');
    $('#finder').addClass('hidden');
  }

  function switchView() {
    $('#train-info').toggleClass('hidden');
    $('#finder').toggleClass('hidden');
  };

  function updateMsg() {
    $('a').click(function() {
      var generateMsg = "I'm%20on%20my%20way"
      var url = "https://api.whatsapp.com/send?text=" + generateMsg;
      $('#whatsapp').attr("href", url);
    });
  };
});
