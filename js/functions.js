function generatehash(message, secret){
	return CryptoJS.HmacSHA1(message, secret);
}//end generatehash

//Constructs URL to get departure times from PTV API
function constructDepartureURL(routeType, stopNum, routeId, directionId){	
	var requestUrl = "/v3/departures/route_type/" + routeType + "/stop/" + stopNum + "/route/" + routeId + "?direction_id=" + directionId + "&" + params; 
	console.log(ptvbaseurl + requestUrl + "&signature=" + generatehash(requestUrl, key).toString());
	return ptvbaseurl + requestUrl + "&signature=" + generatehash(requestUrl, key).toString();
}//end constructDepartureURL

//Constructs URL to get arrival time from PTV API
function constructArrivalURL(runId, routeType, stopId){	
	var requestUrl = "/v3/pattern/run/" + runId + "/route_type/" + routeType + "?stop_id=" + stopId + "&" + params; 
	return ptvbaseurl + requestUrl + "&signature=" + generatehash(requestUrl, key).toString();	
}//end constructArrivalURL

//Filter out only the trains departing within given time window
function filterfortimewindow(timestofilter, timewindow, beforeoffset, afteroffset){  
	var filteredtimes = timestofilter.departures.filter(function (timestofilter) {
		var timeofdep = moment(timestofilter.scheduled_departure_utc).unix();
		if(timeofdep > (timewindow - beforeoffset) && timeofdep < (timewindow + afteroffset)){
			return true;
		}
		else {
			return false;
		}
	});
	if(filteredtimes === undefined){
		return "No Buses";
	}
	else {
		return filteredtimes;
	}	
}//end filterfortimewindow

//Filter out only the arrival times for destination stop.
function filterforstop(departuretimes, stop){
	return departuretimes.departures.filter(function (departuretimes) {
		return departuretimes.stop_id == stop;      
});			             
}//end filterstop

//Return user home
function showtraindepartures(){
	window.location = './index.html';
}

function timeconversion(timestoconvert, startorend){
	var localtimes;
	if(startorend === 0){
		localtimes = "<ul class='list-group'>";  
		$.each(timestoconvert, function(index, train){
			localtimes += "<li class='list-group-item'><a class='" + train.stop_id + "' id='" + train.run_id + "' onclick='showbuses(this)'>" + new Date(train.scheduled_departure_utc).toLocaleTimeString() + '</a></li>';              
		});
		localtimes += "</ul>";		
		return localtimes;  
	}
	else if(startorend == 1){	
		localtimes = "<p class='list-group-item'>" + new Date(timestoconvert[0].scheduled_departure_utc).toLocaleTimeString() + "</p>";		
		return localtimes;  	
	}
	else if(startorend == 2){
		localtimes = "<p class='list-group-item'>" + new Date(timestoconvert[0].scheduled_departure_utc).toLocaleTimeString() + "</p>";		
		localtimes += "<button type='button' onclick='showtraindepartures()' class='btn btn-primary'>Back to train station</button>";		
		return localtimes;  
	}
	else{
		throw "You broke it";
	}
} //end timeconversion

function showbuses(obj){
	$('#trainList, #trainList2').hide();
	var trainArrivalUrl = constructArrivalURL(obj.id,0,1023);
	var connectPointArrivalTime;
	$.getJSON(trainArrivalUrl, function(timestofilter){		
		//Display train arrival time
		connectPointArrivalTime = filterforstop(timestofilter, 1023);		
		$('#busList').html("<h2>Train/Bus Connections</h2>");
		$("#busList").append("<h3 class='text-primary'>Train arrives</h3>" + timeconversion(connectPointArrivalTime, 1));	
		
		//Display bus departure time
		var busurl = constructDepartureURL(2,10885,952,28);
		$.getJSON(busurl, function(bustimes){
			var busdeparture = filterfortimewindow(bustimes, moment(connectPointArrivalTime[0].scheduled_departure_utc).unix(), 0, 3600);
			$("#busList").append("<h3 class='text-primary'>Bus departs</h3>" + timeconversion(busdeparture, 2));
		});
	
	});
	//end ajax requests
	
}//end show buses

//Request train times from PTV 
function showtrainbusconnection(url, url2){
	//BELGRAVE    
	$.getJSON(url, function(timestofilter){    
		var btimestoconvert = filterfortimewindow(timestofilter, moment().unix(), 900, 900);
		$("#trainList").html("<h2 class='text-primary'>Belgrave</h2>" + timeconversion(btimestoconvert, 0));
	});

	//LILYDALE  
	$.getJSON(url2, function(timestofilter){        
		var ltimestoconvert = filterfortimewindow(timestofilter, moment().unix(), 900, 900);		
		$("#trainList2").html("<h2 class='text-primary'>Lilydale</h2>" + timeconversion(ltimestoconvert, 0));
	});
}//end showtrainbusconnection	

/*-------------------------------------------END----------------------------------------*/