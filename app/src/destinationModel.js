(function(exports) {
  function Destination() {
    this.text = '';
  }

  Destination.prototype = {
    saveDestination: function(text) {
      this.text = text;
    },
    getText: function() { return this.text; }
  }

  exports.Destination = Destination;
})(this);
