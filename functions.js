var matrix = [ null, null, null, null, null, null, null, null, null, null] // index 0 is not used

var turnCounter = 0;
var startPlayer = 0;

var start = function(){
  startPlayer = parseInt(Math.random()*10)%2; // choose player : 0=player , 1=agent
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "initial";
  document.getElementById("score").style.display = "block";
  if( startPlayer == 1 )
     moveAgent((parseInt(Math.random()*10)%9+1)+"2");  // Math.random()*10)%9 = number 0-8  -   +1 = because index in the game are 1-9
}
var clickedButton = function ( id ){
  if( matrix[parseInt(id/10)] == null ){
    document.getElementById(id).style.display = "initial";
    document.getElementById(id-1).style.display = "none";
    matrix[parseInt(id/10)] = true;
  }

}

var moveAgent = function ( id ){
  if( matrix[parseInt(id/10)] == null ){
    document.getElementById(id).style.display = "initial";
    document.getElementById(id-2).style.display = "none";
    matrix[parseInt(id/10)] = true;    
  }

}



var playMachine = function(  ) {}
