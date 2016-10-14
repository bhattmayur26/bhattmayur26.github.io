var operations = ["+","-","/","x","%"];

var result;
var operation = "none";
var equals = false;
var dot1 = false;
var sign = false;



document.getElementById("equals").onclick=function(){displayResult()};
document.getElementById("sign").onclick=function(){changeSign()};
document.getElementById("divide").onclick=function(){enterOp("/")};
document.getElementById("add").onclick=function(){enterOp("+")};
document.getElementById("sub").onclick=function(){enterOp("-")};
document.getElementById("mult").onclick=function(){enterOp("x")};
document.getElementById("perc").onclick=function(){enterOp("%")};
document.getElementById("dot").onclick=function(){enterKey(".")};
document.getElementById("9").onclick=function(){enterKey(9)};
document.getElementById("8").onclick=function(){enterKey(8)};
document.getElementById("7").onclick=function(){enterKey(7)};
document.getElementById("6").onclick=function(){enterKey(6)};
document.getElementById("5").onclick=function(){enterKey(5)};
document.getElementById("4").onclick=function(){enterKey(4)};
document.getElementById("3").onclick=function(){enterKey(3)};
document.getElementById("2").onclick=function(){enterKey(2)};
document.getElementById("1").onclick=function(){enterKey(1)};
document.getElementById("0").onclick=function(){enterKey(0)};
document.getElementById("CE").onclick=clearDisplay;
document.getElementById("Del").onclick=delDisplay;

  
function enterKey(value){
  var div = document.getElementById('topRow');
  var div1 = document.getElementById('bottomRow');
sign = false;
  if((div.innerHTML).length === 10 || (div1.innerHTML).length === 18) {
      clearDisplay();
      var div = document.getElementById('bottomRow');
      div.innerHTML = "Limit Reached";
  }
  else if(value === "." && dot1 === false){
    dot1 = true;
    if(operations.includes(div1.innerHTML.slice(-1))){
      div.innerHTML = "0" + value;
      div1.innerHTML = div1.innerHTML + "0" + value;
    }
    else {
      div.innerHTML = div.innerHTML + value;
      div1.innerHTML = div1.innerHTML + value;
    }
  }
  else if (div.innerHTML === "0" || equals === true){
      if(value === "."){div.innerHTML = "0" + value; div1.innerHTML = "0" + value;}
      else{div.innerHTML = value;div1.innerHTML = value;}
      
      equals = false;
  }
  else if(operations.includes(div1.innerHTML.slice(-1))){
 
      div.innerHTML = value;
      div1.innerHTML += value;
  }
  else if (value !== "."){    
      div.innerHTML = div.innerHTML + value;
      div1.innerHTML = div1.innerHTML + value;
     
  }
}

function enterOp(value1){
  var div = document.getElementById('bottomRow');
  var div1 = document.getElementById('topRow');
 
  equals = false;
  dot1 = false;
  if((div.innerHTML).length === 12) {
    clearDisplay();
  }
  else if (div.innerHTML === "0"){
      //div.innerHTML = "0";
  }
  else if (!operations.includes(div.innerHTML.slice(-1))){  
    equate();
      div.innerHTML = div.innerHTML + value1;
      div1.innerHTML = value1;
      operation = value1;
      
  }  
 }

function equate(){
  var div = document.getElementById('topRow');
  var j = div.innerHTML;
  result = calculate(result,j,operation);
  //div.innerHTML = result;
  
}

function displayResult(){
  var div = document.getElementById('topRow');
  var div1 = document.getElementById('bottomRow');
  equate();
  
 if(result.toString().length > 11) {
      clearDisplay();
      div1.innerHTML = "Limit Reached";
  }
  else {
    div.innerHTML = result;
    div1.innerHTML = result;
    //result = 0;
    operation = "none";
    equals = true;
    if(div.innerHTML[0] !== "0") {dot1 = false;}
    if(result < 0 ) {sign = true;}
  }
}


function calculate(x,y,op){
  console.log(x);
   console.log(y);
   console.log(op);
  
  switch(op){
    case "+":
        return parseFloat((parseFloat(x) + parseFloat(y)).toFixed(9));
        break;
    case "-":
        return parseFloat((parseFloat(x) - parseFloat(y)).toFixed(9));
        break;
    case "/":
        return parseFloat((parseFloat(x) / parseFloat(y)).toFixed(9));
        break;
    case "x":
        return parseFloat((parseFloat(x) * parseFloat(y)).toFixed(9));
        break; 
    case "%":
        return parseFloat(((parseFloat(x) * parseFloat(y))/100).toFixed(9));
        break; 
    default:
        return y;
        
           }
  
}

function clearDisplay(){
  var div = document.getElementById('topRow');
  div.innerHTML = '0';
  var div = document.getElementById('bottomRow');
  div.innerHTML = '0';
  dot1 = false;
  sign = false;
}

function changeSign(){

  if(sign === false){
    
    var div = document.getElementById('topRow');
    var div1 = document.getElementById('bottomRow');
    if (div.innerHTML === "0" ){
      div.innerHTML = div.innerHTML;
      div1.innerHTML = div.innerHTML;
    }
    else{
      sign = true;
      div.innerHTML = '-' + div.innerHTML;    
      div1.innerHTML = div1.innerHTML.slice(0,-(div.innerHTML.length - 1)) + div.innerHTML;
    }
  }
  else{
    var div = document.getElementById('topRow');
    div.innerHTML = div.innerHTML.replace(/\-/g,"") ;
    var div1 = document.getElementById('bottomRow');
    div1.innerHTML = div1.innerHTML.slice(0,-(div.innerHTML.length + 1)) + div.innerHTML;
    sign = false;
  }
}

function delDisplay(){
  
  var div = document.getElementById('topRow');
  if (div.innerHTML.slice(-1) === "."){dot1 = false;}
  if (div.innerHTML.length === 1){sign = false;}
  div.innerHTML = div.innerHTML.length > 1 ? div.innerHTML.slice(0,-1) : 0;
  var div = document.getElementById('bottomRow');
  div.innerHTML = div.innerHTML.length > 1 ? div.innerHTML.slice(0,-1) : 0;
  
  
}
