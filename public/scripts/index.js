$(document).ready(function() {
  userJourney = new Journey();
  dest = new Destination();
  getDetails();
  activateHomeButton();

  function getDetails() {
    document.getElementById('create').addEventListener('click', function(clickEvent) {
      clickEvent.preventDefault();
      captureUserDestination();
      // hide the destination search bar
      $('#finder').toggleClass('hidden');
      getLocation();
      var target = document.getElementById('spinner')
      spinner = new Spinner(opts).spin(target);
    });
  };

  function captureUserDestination() {
    dest.saveDestination(document.getElementById('destination').value);
    updateMsg();
  };

  function activateHomeButton() {
    $('#home-button').click(function() {
      $('#train-info').removeClass('hidden');
      $('#finder').removeClass('hidden');
      $('#train-info').addClass('hidden');
    });
  };

  function updateMsg() {
    $('a').click(function() {
      var generateMsg = "I'm%20on%20my%20way"
      var url = "https://api.whatsapp.com/send?text=" + generateMsg;
      $('#whatsapp').attr("href", url);
    });
  };
});
