var release = require('./release');
var status = require('./status');

module.exports ={
    execute: function(keyword){
        switch(keyword){
            case "status":
                release.func();
                break;
            case "release":
                status.func();
                break;
            default:
                console.log("in switch but keyword goes no further"); 
        }
    }
}