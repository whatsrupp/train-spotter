(function() {
  'use strict';

  describe('capturing a users destination', function () {
    var dest;

    beforeEach(function() {
      dest = new Destination();
    });

    it('should save destination', function() {
      dest.saveDestination("London Bridge")
      expect(dest.text).toEqual("London Bridge");
    });

    it('should get text', function() {
      dest.saveDestination("London Bridge")
      expect(dest.getText()).toEqual("London Bridge");
    });
  });

})();
