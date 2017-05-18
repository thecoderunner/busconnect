//Route type train is 0 bus is 2
//Route id belgrave: 2, lilydale: 9. 736 is 952
//Direction id to belgrave:3  and to lilydale:9. mitcham: 29
//Train Stops: Blackburn is stop id 1023.Flinders st 1071
//Bus stop for 736 stop id: 10885


//Constructing URL for PTV API ajax request.
var baseurl = "http://timetableapi.ptv.vic.gov.au";
var belgraveurl = "/v3/departures/route_type/0/stop/1120/route/2?direction_id=3&"
var lilydaleurl = "/v3/departures/route_type/0/stop/1120/route/9?direction_id=9&"
var params = $.param({
  devid:3000187
});

var finalbelurl = baseurl + belgraveurl + params + "&signature=" + generatehash(belgraveurl + params, key).toString();    
var finallilurl = baseurl + lilydaleurl + params + "&signature=" + generatehash(lilydaleurl + params, key).toString();

showtrainbusconnection(finalbelurl, finallilurl);