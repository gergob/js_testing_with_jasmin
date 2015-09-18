

var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.onComplete(function(passed){
   if(passed){
       console.log('Success');
   }
    else {
       console.error("Failed");
   }
});

jasmine.execute();