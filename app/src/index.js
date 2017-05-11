
var stationFinder = new StationFinder();
var geolocator = new Geolocator(stationFinder);
var initialize = new Initializer(geolocator, stationFinder);

// -0.086092, 51.5077
$(document).ready(function() {
  dest = new Destination();
  getDetails();

  function getDetails() {
    document.getElementById('create').addEventListener('click', function(clickEvent) {
      clickEvent.preventDefault();
      captureUserDestination();
    });
  };

  function captureUserDestination() {
    dest.saveDestination(document.getElementById('destination').value);
    updateInfo();
    switchView();
  };

  function updateInfo() {
    $('#usr-destination').append(dest.getText());
    // get train operator
    $('#train-operator').append('Thameslink');
    // get last stationFinder
    $('#last-station').append('London St Pancras');
    // get arrival time
    $('#arrival-time').append('18:56');
    // get terminus
    $('#terminus-station').append('Bedford');
  }

  function switchView() {
    $('#train-info').toggleClass('hidden');
    $('#finder').toggleClass('hidden');
  };

// WIP
  function sendToFriend() {
    document.getElementById('whatsapp').addEventListener('click', function(clickEvent) {
      clickEvent.preventDefault();
      // dummy text, should be a function
      var generateMsg = "I'm%20on%20my%20way"
      var url = "https://api.whatsapp.com/send?text=" + generateMsg;
      $.get(url, function(data) {
        console.log(data);
      })
    });
  };
});
