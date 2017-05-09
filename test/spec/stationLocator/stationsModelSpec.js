describe('Stations', function() {
  var stations

  beforeEach(function(){
    stations = new Stations()
  });

  it('starts with 5 stations', function() {
    expect(stations.list.length).toEqual(5)
  });
});
