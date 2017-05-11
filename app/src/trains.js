// Api for finding potential trains

// Start-Station
// destination
// Date
// Time
// app_id
// app_key

// https://transportapi.com/v3/uk/train/station/LBG/2017-05-10/10:41/timetable.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&destination=CHX&train_status=passenger;
var items = '';
(function(exports) {
  function GetTrains() {

  }

    GetTrains.prototype = {

      trainURL:  function() {
        var urlPartOne = "https://transportapi.com/v3/uk/train/station/";
        var urlPartTwo = "/timetable.json?app_id=221cce2f&app_key=d209929236fc97196775650c2bdb639e&destination=";
        var urlPartThree = "&train_status=passenger";
        var startStation = 'LBG';
        var dateNow = '/2017-05-10';
        var timeNow = '/10:41';
        var destination = 'CHX';
        var defaultURL = urlPartOne + startStation + dateNow + timeNow + urlPartTwo + destination + urlPartThree;
        $.get(defaultURL, function(data) {
        });





      },
      add: function() {
        console.log('hi');
      }
    };


  exports.GetTrains = GetTrains;
})(this);
