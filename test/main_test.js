var expect = require('chai');

describe('Check URL is constructed properly', function(){
    let hash = require('../js/functions');
    it('should create hmac hash',function(){        
        expect(hash.generatehash("/v3/departures/route_type/2/stop/10885/route/952?direction_id=29&devid=3000187", key).toString()).to.equal("5f01f1820eecdbd0743b3c153d3ffac43855e44a");
    });    
});