(function () {
  'use strict';

  describe('initializing page', function () {
    var initializer;
    beforeEach(function() {
      initializer = jasmine.createSpyObj('initializer', ['callGeolocator', 'callStationLocator', 'execute']);
      initializer.execute = function() {
        this.callGeolocator();
      }
    })

    it('should make a call on Geolocator', function(){
      // var stationFinder = new StationFinder();
      // var geolocator = new Geolocator(stationFinder);
      // var initializer = new Initializer(geolocator, stationFinder);
      // spyOn(initializer, 'callGeolocator');
      // spyOn(window, 'initializer').andReturn(geolocator)
      initializer.execute();
      expect(initializer.callGeolocator).toHaveBeenCalled();
    });

  });
})();
