// GLOBAL VARIABLES
var canvas;
var ctx;
var w = 1000;
var h = 600;
var colours = ["purple", "pink"]
var coloursRect = [247,303];
var rn = rand(2);

// EXECUTABLE CODE -
setUpCanvas();

for(var i=0; i<20; i++){
  rect(i*50,h/2,20,60,coloursRect[i%coloursRect.length]);
  rect(i*50,h/3,20,60,coloursRect[i%coloursRect.length]);
  rect(i*50,h/3*2,20,60,coloursRect[i%coloursRect.length]);
}

// FUNCTIONS
function rect(x,y,w,h,c){
  x = x-w/2;
  y = y-h/2;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+w, y);
  ctx.lineTo(x+w, y+h);
  ctx.lineTo(x, y+h);
  ctx.lineTo(x,y);
  ctx.fillStyle = "hsla("+c+",100%,50%,0.5)";
  ctx.fill();
}


function rand(r){
  var result = Math.random()*r;
  return result
}


function setUpCanvas(){
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = w;
  canvas.height = h;
  canvas.style.border = "5px dotted orange";
}

console.log("module 4");
