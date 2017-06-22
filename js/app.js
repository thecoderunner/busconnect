!function(){
  var routeTypes = {
    "train": 0,
    "bus": 2
  };
  var routeIds = {
    "belgrave": 2,
    "lilydale": 9,
    "736": 952
  };
  var directionIds = {
    "belgrave": 3,
    "lilydale": 9,
    "mitcham": 29,
  };
  var stopIds = {
    "blackburn": 1023,
    "boxhill": 1026,
    "flindersst": 1071,
    "melbournecentral": 1120,
    "southerncross": 1181,
    "parliament": 1155,
    "richmond": 1162,
    "blackburn736": 10885 
  };

  function JOURNEY(routeType, stopId, routeId, directionId){
    this.routeType = routeType;
    this.stopId = stopId;
    this.routeId = routeId;
    this.directionId = directionId;  
  }

  $(function(){
    $('button.btntrain').click(function(){
      $('#trainbuttons').hide();    
      var btrains = new JOURNEY(routeTypes[this.getAttribute('data-routeType')],stopIds[this.getAttribute('data-stopId')],routeIds.belgrave,directionIds.belgrave);
      var ltrains = new JOURNEY(routeTypes[this.getAttribute('data-routeType')],stopIds[this.getAttribute('data-stopId')],routeIds.lilydale,directionIds.lilydale);
      showtrainbusconnection(constructDepartureURL(btrains.routeType, btrains.stopId,btrains.routeId, btrains.directionId),constructDepartureURL(ltrains.routeType, ltrains.stopId,ltrains.routeId, ltrains.directionId));
    });
  });
}();