var expect = chai.expect;

describe("Check URL is constructed properly", function(){
    it("should create hmac hash",function(){        
        expect(generatehash("/v3/departures/route_type/2/stop/10885/route/952?direction_id=29&devid=3000187", key).toString()).to.equal("5f01f1820eecdbd0743b3c153d3ffac43855e44a");
    });    
    it("should construct Departure URL", function(){
        expect(constructDepartureURL(2,10885,952,28)).to.equal("https://timetableapi.ptv.vic.gov.au/v3/departures/route_type/2/stop/10885/route/952?direction_id=28&devid=3000187&signature=12fc44d1e1e39810a269289243edb91dd26107b3");
    });
    it("should construct Arrival URL", function(){
        expect(constructArrivalURL(951435,0,1023)).to.equal("https://timetableapi.ptv.vic.gov.au/v3/pattern/run/951435/route_type/0?stop_id=1023&devid=3000187&signature=8c8319e58dcb6678375b0b5224f89e44c342664e");
    });    
});



