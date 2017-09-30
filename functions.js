var matrix = [ null, null, null, null, null, null, null, null, null ]

var turnCounter = 0;
var startPlayer = 0;

var start = function(){
  startPlayer = parseInt(Math.random()*10)%2; // choose player : 0=player , 1=agent
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "initial";
  document.getElementById("score").style.display = "block";

  if( startPlayer == 1 ){
     moveAgent((parseInt(Math.random()*10)%9+1)+"2");
  }

}
var clickedButton = function ( id ){
  document.getElementById(id).style.display = "initial";
  document.getElementById(id-1).style.display = "none";
}

var moveAgent = function ( id ){
  document.getElementById(id).style.display = "initial";
  document.getElementById(id-2).style.display = "none";
}



var playMachine = function(  ) {}
