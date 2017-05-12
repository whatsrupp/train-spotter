'use strict';
// <script src="../public/scripts/models/destination.js"></script>
var assert = require('assert') //Inbuilt node assertations model
var Journey = require('../../../public/scripts/models/journey.js')
describe('Journey Model',function(){
  debugger;
  var journey = new Journey.Journey()
  it('stores a stop of interest', function(){
    var stopOfInterest = 'Hell';
    journey.updateStopOfInterest(stopOfInterest);
    // expect(journey.stopOfInterest).toEqual(stopOfInterest);
    assert.equal(journey.stopOfInterest, stopOfInterest);

  });

  it('stores a final destination', function(){
    var finalDestination = 'Roast and Toast';
    journey.updateFinalDestination(finalDestination);
    assert.equal(journey.finalDestination, finalDestination);

  });

  it('stores the train operator', function(){
    var operator = "Larry's Locomotives";
    journey.updateOperator(operator);
    assert.equal(journey.operator, operator);

  });

  it('stores an arrival time', function(){
    var arrivalTime = '8:00'
    journey.updateArrivalTime(arrivalTime);
    assert.equal(journey.arrivalTime, arrivalTime);
  });
  it('stores an arrival time', function(){
    var depTime = '6:58'
    journey.updateDepTime(depTime);
    assert.equal(journey.deptTime, depTime);
  });
  it('stores a platform', function(){
    var platform = '9 and three Quarters'
    journey.updatePlatform(platform);
    assert.equal(journey.platform, platform);
  });

  it('updates stop of interest', function(){
    var stopOfInterestName = "EL Rug"
    journey.updateSOIName(stopOfInterestName);
    assert.equal(journey.stopOfInterestName, stopOfInterestName);
  });
  it('updates closest station name', function(){
    var closestStation = 'The boonies'
    journey.updateStationName(closestStation);
    assert.equal(journey.closestStation, closestStation);
  });
});
