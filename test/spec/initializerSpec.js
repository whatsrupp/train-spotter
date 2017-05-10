(function () {
  'use strict';

  describe('initializing page', function () {
    // beforeEach(function () {
    //   debugger;
    // });

    it('should make a call on Geolocator', function(){
      var geolocator = new Geolocator();
      var stationFinder = new StationFinder();
      var initializer = new Initializer(geolocator, stationFinder);
      spyOn(initializer, 'callGeolocator');
      initializer.execute();
      expect(initializer.callGeolocator).toHaveBeenCalled();
    });

    it('should make a call on StationLocator', function(){
      var geolocator = new Geolocator();
      var stationFinder = new StationFinder();
      var initializer = new Initializer(geolocator, stationFinder);
      spyOn(initializer, 'callStationLocator');
      initializer.execute();
      expect(initializer.callStationLocator).toHaveBeenCalled();
    });
  });
})();
