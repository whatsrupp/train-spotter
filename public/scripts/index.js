$(document).ready(function() {
  userJourney = new Journey();
  dest = new Destination();
  getDetails();
  activateHomeButton();

  $("#destination").focus();

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
    sendMsg();
  };

  function activateHomeButton() {
    $('#home-button').click(function() {
      $('#train-info').removeClass('hidden');
      $('#finder').removeClass('hidden');
      $('#train-info').addClass('hidden');
    });
  };

  function sendMsg() {
    $('a').click(function() {
      var url = constructMsg()
      $('#whatsapp').attr("href", url);
    });
  };

  function constructMsg() {
    var whatsappUrl = "https://api.whatsapp.com/send?text=";
    var space = "%20";
    var openString = "I'm%20on%20my%20way%20from";
    var closestStation = userJourney.closestStation;
    var middleString = "and%20will%20arrive%20at";
    var destinationStation = userJourney.stopOfInterestName;
    var arrivalTime = "at%20" + userJourney.arrivalTime;
    var operator = "..." + userJourney.operator + "%20willing"
    var emojiTrain = "🚂 "
    var emojiThumbsUp = "👍"
    var generateMsg = whatsappUrl + emojiTrain + space + openString + space + closestStation + space + middleString + space + destinationStation + space + arrivalTime + operator + space + emojiThumbsUp ;
    return generateMsg
  }
});
