var matrix = [ null, null, null, null, null, null, null, null, null ]

var turnCounter = 0;

var start = function(){
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "initial";
  document.getElementById("score").style.display = "block";

}
var clickedButton = function ( id ){
  document.getElementById(id).style.display = "initial";
  document.getElementById(id-1).style.display = "none";
}

var moveAgent = function ( id ){
  document.getElementById(id+1).style.display = "initial";
  document.getElementById(id-1).style.display = "none";
}



var playMachine = function(  ) {}
