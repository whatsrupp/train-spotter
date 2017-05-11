(function(exports) {

  function Journey(){
    this.stopOfInterest = '';
    // this.finalDestination
    // this.operator
    // this.aimedArrivalTime
  }

  Journey.prototype = {
    updateStopOfInterest: function(stopOfInterest) {
      this.stopOfInterest = stopOfInterest;
    }
  };

  exports.Journey = Journey;
})(this);
