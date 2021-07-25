// GLOBAL VARIABLES
var canvas;
var ctx;
var w = 1000;
var h = 600;



// FUNCTIONS
// function smileyFaceEmoji() {
//   // var canvas = document.getElementById("myCanvas");
//   // var ctx = canvas.getContext("2d");
//   // canvas.width = 1000;
//   // canvas.height = 600;
//   // canvas.style.border = "5px solid black";
//
//   ctx.beginPath();
//   ctx.arc(250, 250, 100,0,Math.PI*2, true);
//   ctx.moveTo(235, 225);
//   ctx.arc(225, 225, 10, 0, Math.PI*2, true);
//   ctx.moveTo(285, 225);
//   ctx.arc(275, 225, 10, 0, Math.PI*2, true);
//   ctx.moveTo(250, 275);
//   ctx.arc(250, 275, 50, 0, Math.PI, false);
//   ctx.moveTo(250, 275);
//   ctx.lineTo(200, 275);
//   ctx.stroke();
// }

window.onload = smileyFaceEmoji();

function setUpCanvas(){
  canvas = document.querySelector("myCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = w;
  canvas.height = h;
  canvas.style.border = "1px solid black";
}

function smileyFaceEmoji() {
  // var canvas = document.getElementById("myCanvas");
  // var ctx = canvas.getContext("2d");
  // canvas.width = 1000;
  // canvas.height = 600;
  // canvas.style.border = "5px solid black";

  ctx.beginPath();
  ctx.arc(250, 250, 100,0,Math.PI*2, true);
  ctx.moveTo(235, 225);
  ctx.arc(225, 225, 10, 0, Math.PI*2, true);
  ctx.moveTo(285, 225);
  ctx.arc(275, 225, 10, 0, Math.PI*2, true);
  ctx.moveTo(250, 275);
  ctx.arc(250, 275, 50, 0, Math.PI, false);
  ctx.moveTo(250, 275);
  ctx.lineTo(200, 275);
  ctx.stroke();
}

// EXECUTABLE CODE -
setUpCanvas();
smileyFaceEmoji();

console.log("assignment 2");






















// // FUNCTIONS
// function smileyFaceEmoji() {
//   var canvas = document.getElementById("myCanvas");
//   var ctx = canvas.getContext("2d");
//   canvas.width = 1000;
//   canvas.height = 600;
//   canvas.style.border = "5px solid black";
//
//   ctx.beginPath();
//   ctx.arc(250, 250, 100,0,Math.PI*2, true);
//   ctx.moveTo(235, 225);
//   ctx.arc(225, 225, 10, 0, Math.PI*2, true);
//   ctx.moveTo(285, 225);
//   ctx.arc(275, 225, 10, 0, Math.PI*2, true);
//   ctx.moveTo(250, 275);
//   ctx.arc(250, 275, 50, 0, Math.PI, false);
//   ctx.moveTo(250, 275);
//   ctx.lineTo(200, 275);
//   ctx.stroke();
// }
//
// window.onload = smileyFaceEmoji();
//
// // function setUpCanvas(){
// //   canvas = document.querySelector("myCanvas");
// //   ctx = canvas.getContext("2d");
// //   canvas.width = w;
// //   canvas.height = h;
// //   canvas.style.border = "1px solid black";
// // }
//
// console.log("assignment 2");
