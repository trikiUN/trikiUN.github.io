var matrix = [ null, null, null, null, null, null, null, null, null, null] // index 0 is not used



var turnCounter = 0;
var startPlayer = 0;
var you = 0;
var agent = 0;

var initiate = function(){
  startPlayer = parseInt(Math.random()*10)%2; // choose player : 0=player , 1=agent
  document.getElementById("begin").style.display = "none";
  document.getElementById("game").style.display = "initial";
  document.getElementById("score").style.display = "block";
  if( startPlayer == 1 )  // first move randomly by the agent
    nextMove();
}

var newGame = function(){
  matrix = [ null, null, null, null, null, null, null, null, null, null]
  for(var i=1; i<10;i++){
    document.getElementById(i+"0").style.display = "initial";
    document.getElementById(i+"1").style.display = "none";
    document.getElementById(i+"2").style.display = "none";
  }
  initiate();
}


var clickedButton = function ( id ){
  if( matrix[parseInt(id/10)] == null ){
    document.getElementById(id).style.display = "initial";
    document.getElementById(id-1).style.display = "none";
    matrix[parseInt(id/10)] = 0;
    if( checkWinner() == true ){
      showWinner("You");
      newGame();
      return;
    }
    if( checkTie() == true ){
        newGame();
        return;
    }
    nextMove();
  }

}


var moveAgent = function ( id ){

  if( matrix[parseInt(id/10)] == null ){
    document.getElementById(id).style.display = "initial";
    document.getElementById(id-2).style.display = "none";
    matrix[parseInt(id/10)] = 1;
    if( checkWinner() == true ){
      showWinner("Agent");
      newGame();
      return;
    }
    if( checkTie() == true ){
        newGame();
        return;
    }
  }else // if the move has already been done
    moveAgent((parseInt(Math.random()*10)%9+1)+"2");

}

var nextMove = function(){
  var temp = null;
  for(var i=1; i>=0; i--){  // 0:check if the player(you) can win -- 1:check if the agent can win
    temp = checkWinnerMove(i); // first have to check that the agent can win, after the player
    if( temp != null ){
      moveAgent(temp+"2");
      return;
    }
  }
  temp = checkFirstCorner();
  if( temp != null ){
    moveAgent(temp+"2");
    return;
  }
  temp = moveInCorners();
  if(temp != null){
    moveAgent(temp+"2");
    return;
  }
  moveAgent("12");
}

var checkWinnerMove = function(player){
  var check = false;
  for(var i=1; i<10;i++){
    if( matrix[i] == null ){
      matrix[i] = player;
      check = checkWinner();
      matrix[i] = null;
      if( check == true ) return i;
    }
  }
  return null;
}

var checkFirstCorner = function(){

  var elements = [];
  for(var i=1; i<10;i++){ // Add current moves
    if( matrix[i] != null ) elements.push(i);
  }
  var corners = [1,3,7,9];
  var oppositeCorners = [9,7,3,1];
  var temp = -1;
  if( elements.length == 3 ){
    temp = elements.indexOf(5);
    if( temp > -1 && matrix[elements[temp]] == 1){ // If the agent has already been moved in the center
      for(var i=0; i<corners.length; i++){  // Check every corner
        temp = elements.indexOf(corners[i]);
        if( temp > -1 && matrix[elements[temp]] == 0){ // check if there is a move in the corners
            var even = [2,4,6,8];
            for(var k=0; k<even.length; k++){
                temp = elements.indexOf(even[k]);
                if( temp > -1 ){
                  if(even[k] == 2 || even[k] == 8) even = [4,6];
                  else even = [2,8];
                  break;
                }
            }
            temp = parseInt(Math.random()*10)%even.length;            
            return even[temp]; // return even number randomly from 2 to 8
        }
      }
    }
  }
  return null;
}

var moveInCorners = function(){
  var arr = new Array();
  for(var i=1; i<10; i+=2) // loop odd numbers (corners and center)
    if( matrix[i] == null ) arr.push(i);
  if( arr.length > 0 ){
    var a = arr.indexOf(5);
    if( a > -1 ) return arr[a];
    var temp = parseInt(Math.random()*10)%arr.length; // select a random index in the array
    return arr[temp];
  }
  return null;
}

var checkTie = function(){
  var check = true;
  for(var i=1; i<10 && check; i++)
    check = check && matrix[i] != null;
  if( check == true ){
    alert("tie");
    return true;
  }
  return false;
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

var showWinner = function(player){
  var temp = 0;
  if( player == "Agent" ){
    agent++;
    temp = agent;
    alert("You Lose")
  }else{
    you++;
    temp = you;
    alert("You Win")
  }
  document.getElementById(player).innerHTML = player+": "+temp;
  return;

}
