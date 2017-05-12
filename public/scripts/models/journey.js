(function(exports) {

  function Journey(){
    this.stopOfInterest = '';
    this.finalDestination
    this.operator
    this.arrivalTime
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
    },

    updateDepTime: function(deptTime) {
      this.deptTime = deptTime;
    },

    updatePlatform: function(platform) {
      this.platform = platform;
    },

    updateStationName: function(closestStation) {
      this.closestStation = closestStation;
    },

    updateSOIName: function(stopOfInterestName) {
        this.stopOfInterestName = stopOfInterestName;
    }

  };
  exports.Journey = Journey;
})(this);
