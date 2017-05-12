


// force the test environment to 'test'
process.env.NODE_ENV = 'test';
// get the application server module
var app = require('../../index');
var Browser = require('zombie')
var assert = require('assert') //Inbuilt node assertations model
// var http = require('http')
describe('contact page', function() {
  before(function() {
    // this.server = http.createServer(app).listen(3000);
    this.server = app.listen(3000);
    this.browser = new Browser({site: 'http://localhost:3000'})
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should show a destination field',function(){
    assert.ok(this.browser.success);
    this.browser.assert.elements('#destination', 1);
    // assert.equal(this.browser.text('destination'), 'SEV');
  });
  it('should have a button to call the api');
  it('should welcome the user');
  it('should have a home button on the nav bar');
  it('should stay on the same page if the home button is clicked');

  after(function(done) {
    this.server.close(done);
  });
});
