(function(exports) {

  function Journey(){
    this.stopOfInterest = '';
    this.finalDestination
    this.operator
    this.ArrivalTime
  }

  Journey.prototype = {
    updateStopOfInterest: function(stopOfInterest) {
      this.stopOfInterest = stopOfInterest;
    },

    updateFinalDestination: function(finalDestination) {
      this.finalDestination = finalDestination;
    },

    updateOperator: function(operator) {
      this.operator = operator;
    },

    updateArrivalTime: function(arrivalTime) {
      this.arrivalTime = arrivalTime;
    }

  };

  exports.Journey = Journey;
})(this);
