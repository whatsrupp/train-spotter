// Api for finding potential trains

// https://transportapi.com/v3/uk/train/station/LBG/2017-05-10/10:41/timetable.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&destination=CHX&train_status=passenger;
var items = '';
(function(exports) {
  function GetTrains( startStation, destination ) {

    this.startStation = startStation;
    this.destination = destination;
    this.trainData = [];

  }

// Initiate GetTrains constructor. Run trainURL to get potetial trains.
    GetTrains.prototype = {

      trainURL:  function() {
        var urlPartOne = "https://transportapi.com/v3/uk/train/station/";
        var urlPartTwo = "/timetable.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&calling_at=";
        var urlPartThree = "&train_status=passenger";
        var startStation = this.startStation;
        // var timeNow = '/10:41';
        var destination = this.destination;
        var defaultURL = urlPartOne + startStation + urlPartTwo + destination + urlPartThree;

        return defaultURL;
      },

      getPotentialTrains: function() {

        defaultURL = this.trainURL();
        $.get(defaultURL, function(data){
          var trainData = data.departures;
          this.setTrainData(trainData);
        }.bind(this)
        );
      },

      setTrainData: function(data) {
        this.trainData = data;
      },


      setStartStation: function(startStation) {
        this.startStation = startStation;
      }
    };


  exports.GetTrains = GetTrains;
})(this);
