describe('Interfacing with the youtube api',function(){
 beforeEach(function(){
   var apiData = {
     items:[
      {snippet:{
         thumbnails:{
           high:"lebron_high.png",
           mid:"lebron_mid.png",
           low:"lebron_low.jpg"
           }
          }
        },
        {snippet:{
           thumbnails:{
             high:"lebron_high.png",
             mid:"lebron_mid.png",
             low:"lebron_low.jpg"
             }
            }
          }
     ]
   };
  sinon.stub($, 'ajax').yieldsTo('success',JSON.stringify(apiData) );
 });
 afterEach(function() {
   $.ajax.restore();
  });
 it('should be defined as a global function',function(){
   expect(getRequest).toBeDefined();
 });
 it('should have its jquery dependency defined',function () {
  expect($.ajax).toBeDefined();
 });
 it('should call the api endpoint one time per call',function () {
  var data = getRequest("lebron")
  expect($.ajax.callCount).toEqual(1);
 });
 it('should return json',function () {
  var data = getRequest("lebron")
  expect(data).toBeDefined();
 });
 it('should calls the correct url',function () {
  getRequest("lebron")
  expect($.ajax.getCall(0).args[0].url).toEqual('https://www.googleapis.com/youtube/v3/search');
 });
 it('should pass a params object as a argument',function () {
  getRequest("lebron")
  expect($.ajax.getCall(0).args[0].data.toString()).toEqual('[object Object]');
 });
});
