var Bob = function() {};

Bob.prototype.hey = function(input){
  if (input === '' || input === '   ') {
    return 'Fine. Be that way!'
  }
  var commas = new RegExp(",", "g");
  input = input.replace(commas, "");
  input = input.split("");
  terminalPoint = input.pop();
  if(input.every(uppercaseValues)) {
    if (input.every(checkNums) && terminalPoint !== "?") {
      return 'Whatever.'
    } else if (input.every(checkNums) && terminalPoint === "?") {
      return 'Sure.'
    } else {
      return 'Whoa, chill out!';
    }
  } else if (terminalPoint === "?") {
    return 'Sure.'
  }
  else{
    return "Whatever.";
  }
}

function checkNums(elem){
  if(!isNaN(parseInt(elem)) || elem === " "){
    return true;
  }
}

function uppercaseValues(elem){
  if(elem === elem.toUpperCase()){
    return true;
  }
}

module.exports = Bob;
