'use strict';
describe('Journey Model',function(){
  var journey = new Journey()
  it('stores a stop of interest', function(){
    var stopOfInterest = 'Hell';
    journey.updateStopOfInterest(stopOfInterest);
    expect(journey.stopOfInterest).toEqual(stopOfInterest);
  });

  it('stores a final destination', function(){
    var finalDestination = 'Roast and Toast';
    journey.updateFinalDestination(finalDestination);
    expect(journey.finalDestination).toEqual(finalDestination);
  });

  it('stores the train operator', function(){
    var operator = "Larry's Locomotives";
    journey.updateOperator(operator);
    expect(journey.operator).toEqual(operator);
  });

  it('stores an arrival time', function(){
    var arrivalTime = '8:00'
    journey.updateArrivalTime(arrivalTime);
    expect(journey.arrivalTime).toEqual(arrivalTime);
  });
  it('stores an arrival time', function(){
    var depTime = '6:58'
    journey.updateDepTime(depTime);
    expect(journey.deptTime).toEqual(depTime);
  });
  it('stores a platform', function(){
    var platform = '9 and three Quarters'
    journey.updatePlatform(platform);
    expect(journey.platform).toEqual(platform);

  });
  it('updates stop of interest', function(){
    var stopOfInterestName = "EL Rug"
    journey.updateSOIName(stopOfInterestName);
    expect(journey.stopOfInterestName).toEqual(stopOfInterestName);

  });
  it('updates closest station name', function(){
    var closestStation = 'The boonies'
    journey.updateStationName(closestStation);
    expect(journey.closestStation).toEqual(closestStation);

  });
});
