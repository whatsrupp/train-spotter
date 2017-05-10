// -0.086092, 51.5077
var stationFinder = new StationFinder();
var geolocator = new Geolocator(stationFinder);
var initialize = new Initializer(geolocator, stationFinder);
