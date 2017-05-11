"use strict";
(function(exports){
  function displayJourneyInfo() {
    // get terminus
    var specTrain = "You are on the " + userJourney.deptTime + " to: " + userJourney.finalDestination;
    $('#terminus-station').text(specTrain);

    $('#usr-destination').append(dest.getText());
    // get train operator
    $('#train-operator').append(userJourney.operator);
    // get last stationFinder
    $('#closest-station').append(userJourney.stopOfInterest);
    // get arrival time
    $('#arrival-time').append(userJourney.arrivalTime);
  };

  exports.displayJourneyInfo = displayJourneyInfo;
})(this);
