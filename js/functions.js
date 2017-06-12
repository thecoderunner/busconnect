function generatehash(message, secret){
    var hmac = CryptoJS.HmacSHA1(message, secret);
    return hmac;
};//end generatehash


function constructURL(stopnum, routeid, directionid){	
	var requesturl;
	requesturl = "/v3/departures/route_type/0/stop/" + stopnum + "/route/" + routeid + "?direction_id=" + directionid + "&" + params; 
	return ptvbaseurl + requesturl + "&signature=" + generatehash(requesturl, key).toString();
}//end constructURL


function filtertrains(ptvtimes, comparisontime, boffset, aoffset){  
  	var tdeparture;
  	return ptvtimes.departures.filter(function (ptvtimes) {
  	tdeparture = moment(ptvtimes.scheduled_departure_utc).unix();
  	if(tdeparture > (comparisontime - boffset) && tdeparture < (comparisontime + aoffset)){
  		return true;
  	}
  	else {
  		return false;
  	}
  });            
};//end filtertrains

function filterforstop(arrivaltimes){
  return arrivaltimes.departures.filter(function (arrivaltimes) {
      return arrivaltimes.stop_id == '1023';      
  });			             
};//end filterstop

function showtraindepartures(){
	$("body").load("index.html");
}

function timeconversion(traintimes, startorend){
	var localtimes;
	if(startorend == 0){
		localtimes = "<ul class='list-group'>"  
		$.each(traintimes, function(index, train){
		  localtimes += "<li class='list-group-item'><a class='" + train.stop_id + "' id='" + train.run_id + "' onclick='showbuses(this)'>" + new Date(train.scheduled_departure_utc).toLocaleTimeString() + '</a></li>';              
		});//end each
		localtimes += "</ul>";
		
		return localtimes;  
	}
	else if(startorend == 1){	
		localtimes = "<p class='list-group-item'>" + new Date(traintimes[0].scheduled_departure_utc).toLocaleTimeString() + "</p>";
		
		return localtimes;  	
	}
	else if(startorend == 2){
		localtimes = "<p class='list-group-item'>" + new Date(traintimes[0].scheduled_departure_utc).toLocaleTimeString() + "</p>";		
		localtimes += "<button type='button' onclick='showtraindepartures()' class='btn btn-primary'>Back to train station</button>";
		
		return localtimes;  
	}
	else{
		throw "You broke it";
	}
}; //end timeconversion


function showbuses(obj){
	var arrivalurl, arrivalurl2;
	
	$('#trainList, #trainList2').hide();

	arrivalurl = "/v3/pattern/run/" + obj.id + "/route_type/0?stop_id=1071&";
	arrivalurl2 = ptvbaseurl + arrivalurl + params + "&signature=" + generatehash(arrivalurl + params, key).toString();    
	
	$.getJSON(arrivalurl2, function(ptvtimes){		
		//Display train arrival time
		var blackburnarrival, busurl;
		blackburnarrival = filterforstop(ptvtimes);		
		$('#busList').html("<h2>Train/Bus Connections</h2>");
		$("#busList").append("<h3 class='text-primary'>Train arrives</h3>" + timeconversion(blackburnarrival, 1));
		
		//Display bus arrival time
		busurl = "http://timetableapi.ptv.vic.gov.au/v3/departures/route_type/2/stop/10885/route/952?direction_id=29&devid=3000187&signature=5F01F1820EECDBD0743B3C153D3FFAC43855E44A";
		$.getJSON(busurl, function(bustimes){
			var busdeparture;
			busdeparture = filtertrains(bustimes, moment(blackburnarrival[0].scheduled_departure_utc).unix(), 0, 3600);
			$("#busList").append("<h3 class='text-primary'>Bus departs</h3>" + timeconversion(busdeparture, 2));
		});//end getjson bus departure

	});//end getjson blackburn arrival	
	
};//end show buses

function showtrainbusconnection(url, url2){
  //BELGRAVE  
  //Request train times from PTV
  $.getJSON(url, function(ptvtimes){    
    var btraintimes;
    btraintimes = filtertrains(ptvtimes, moment().unix(), 900, 900);

    //Convert timezone and display times to page
    $("#trainList").html("<h2 class='text-primary'>Belgrave</h2>" + timeconversion(btraintimes, 0));
  });//end getjson

  
  //LILYDALE  
  //Request train times from PTV
  $.getJSON(url2, function(ptvtimes){        
    var ltraintimes 
    ltraintimes = filtertrains(ptvtimes, moment().unix(), 900, 900);
    
    //Convert timezone and display times to page
    $("#trainList2").html("<h2 class='text-primary'>Lilydale</h2>" + timeconversion(ltraintimes, 0));
  });//end getjson

};//end showtrainbusconnection

/*-------------------------------------------END Javascript----------------------------------------*/