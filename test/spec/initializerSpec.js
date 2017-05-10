(function () {
  'use strict';

  describe('initializing page', function () {

    it('should make a call on Geolocator', function(){
      var stationFinder = new StationFinder();
      var geolocator = new Geolocator(stationFinder);
      var initializer = new Initializer(geolocator, stationFinder);
      spyOn(initializer, 'callGeolocator');
      initializer.execute();
      expect(initializer.callGeolocator).toHaveBeenCalled();
    });

  });
})();
