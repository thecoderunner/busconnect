
var expect = chai.expect;

describe('Check functions are working', function(){
    it('Check signature is calculated correctly',function(){        
        expect(generatehash("/v3/departures/route_type/2/stop/10885/route/952?direction_id=29&devid=3000187", key).toString()).to.equal("5f01f1820eecdbd0743b3c153d3ffac43855e44a");
    });
});