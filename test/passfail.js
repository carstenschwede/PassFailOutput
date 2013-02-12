// test/main.js
var should = require('should');
var passfail = require('../lib/passfail');

describe('passfail', function() {
    describe('pass', function() {
        it('returns an empty array', function() {
        	passfail.pass("Pass");
        	passfail.fail("Fail");
        	passfail.warn("Warn");
        	passfail.info("Info");
        	passfail.debug("Debug");

        	for(var i=0;i<50;i++) {
        		passfail.pass("Repitition");
        	}
        	done();
        });
    });
});
