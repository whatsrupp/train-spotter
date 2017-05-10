
(function () {
  'use strict';


  describe('Finding user location', function () {
    describe('Makes a call on the API', function () {

      it('should return call the geolocator html api', function(){
        var geolocator = new Geolocator ();
        spyOn(navigator.geolocation, 'getCurrentPosition');
        geolocator.getLocation();
        expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
      });
    });

    describe('Update State', function(){
      it('should update the prototype variable when update state is called', function () {
        var geolocator = new Geolocator ();
        geolocator.success(mockGeolocationResponse)
        var coordinates = {
          latitude: 51.2814164,
          longitude: 0.2028528,
        }
        expect(geolocator.coordinates).toEqual(coordinates);
        expect(geolocator.hasGotCoordinates).toEqual(true);
      });
    });
  });
})();
