'use strict';

describe('getting potential trains', function(){
  var getTrains

  beforeEach(function(){
    getTrains = new GetTrains('PAD','BRI')
  });

  describe('reset startStation', function(){
    it('sets station to SWI', function(){
      getTrains.setStartStation('SWI');
      expect(getTrains.startStation).toEqual('SWI')
    })
  })
  describe('set train data', function(){
    it('sets train data to mock json', function(){
        var trainsData = 'test';
        getTrains.setTrainData(trainsData);
        expect(getTrains.trainData).toEqual(trainsData);

    });
  });

});
