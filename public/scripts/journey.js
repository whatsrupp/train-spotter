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
    
    updateStationName: function(stationName) {
      this.stationName = stationName;
    }

  };

  exports.Journey = Journey;
})(this);
