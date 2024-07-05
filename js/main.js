let raindrop = [];
let canvasWidth = 500;
let canvasHeight = 400;
let xPos=0;
let yPos=0;
let xSpeed = 5; 

function setup(){
    createCanvas(canvasWidth, canvasHeight);
    background(0);
    //change the position for the x and y positon of the raindrops spawn from 0 to area of canvas
    xPos = random(0,canvasWidth);
    yPos = random(0,canvasHeight);
    for( i=0; i<100 ; i++){
    //when you push, give coordinates to the elements of arrays
    raindrop.push();
    }
}
function draw(){
    newraindrop();
}

function newraindrop() {
    circle(xPos,yPos,1)
}


// $( document ).ready(function() {
//     $('#btn').click(function() {
//         window.alert("DID YOU JUST CLICK ME?!");
//     });
// });