//Route type train is 0 bus is 2
//Route id belgrave: 2, lilydale: 9. 736 is 952
//Direction id to belgrave:3  and to lilydale:9. mitcham: 29
//Train Stops: Blackburn is stop id 1023. Box hill 1026, Flinders st 1071, Melb Central 1120, Richmond 1162, Ringwood 1163
//southern cross 1181 parliament: 1155
//Bus stop for 736 stop id: 10885

$(function(){
  $('button.btntrain').click(function(){
    $('#trainbuttons').hide();    
    $.get("views/" + this.id + '.js');
  });
});/*-------------------------------------------END Javascript----------------------------------------*/