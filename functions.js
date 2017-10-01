var matrix = [ null, null, null, null, null, null, null, null, null, null] // index 0 is not used

var turnCounter = 0;
var startPlayer = 0;
var you = 0;
var agent = 0;

var start = function(){
  startPlayer = parseInt(Math.random()*10)%2; // choose player : 0=player , 1=agent
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "initial";
  document.getElementById("score").style.display = "block";
  if( startPlayer == 1 )  // first move randomly by the agent
     moveAgent((parseInt(Math.random()*10)%9+1)+"2");  // Math.random()*10)%9 = number 0-8  -   +1 = because index in the game are 1-9
}

var newGame = function(){
  matrix = [ null, null, null, null, null, null, null, null, null, null]
  for(var i=1; i<10;i++){
    document.getElementById(i+"0").style.display = "initial";
    document.getElementById(i+"1").style.display = "none";
    document.getElementById(i+"2").style.display = "none";
  }
  start();

}


var clickedButton = function ( id ){
  if( matrix[parseInt(id/10)] == null ){
    document.getElementById(id).style.display = "initial";
    document.getElementById(id-1).style.display = "none";
    matrix[parseInt(id/10)] = 0;
    if( checkWinner() == true ){
      you++;
      document.getElementById("you").innerHTML = "You: "+you;
      alert("You win")
      newGame();


    }
  }

}


var moveAgent = function ( id ){
  if( matrix[parseInt(id/10)] == null ){
    document.getElementById(id).style.display = "initial";
    document.getElementById(id-2).style.display = "none";
    matrix[parseInt(id/10)] = 1;
    if( checkWinner() == true ){
      agent++;
      document.getElementById("agent").innerHTML = "Agent: "+agent;
      alert("You lost")
    }
  }

}

var checkWinner = function (){
  var temp = true;
  for(var i=1; i<4; i++){ // check vertical
    temp = true
    temp = temp && (matrix[i] != null) && (matrix[i+3] != null) && (matrix[i+6] != null);
    temp = temp && (matrix[i] == matrix[i+3]) && (matrix[i+3] == matrix[i+6]);
    if( temp == true )
      return true;
  }
  for(var i=1; i<8; i=i+3){ // check horizontal
    temp = true
    temp = temp && (matrix[i] != null) && (matrix[i+1] != null) && (matrix[i+2] != null);
    temp = temp && (matrix[i] == matrix[i+1]) && (matrix[i+1] == matrix[i+2]);
    if( temp == true )
      return true;
  }
  // check lateral
  var i = 1;
  temp = true
  temp = temp && (matrix[i] != null) && (matrix[i+4] != null) && (matrix[i+8] != null);
  temp = temp && (matrix[i] == matrix[i+4]) && (matrix[i+4] == matrix[i+8]);
  if( temp == true )
    return true;
  // check lateral
  var i = 3;
  temp = true
  temp = temp && (matrix[i] != null) && (matrix[i+2] != null) && (matrix[i+4] != null);
  temp = temp && (matrix[i] == matrix[i+2]) && (matrix[i+2] == matrix[i+4]);
  if( temp == true )
    return true;
  return false;
}




var playMachine = function(  ) {}
