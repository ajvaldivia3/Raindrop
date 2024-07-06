// let raindrop = [];
// let canvasWidth = 500;
// let canvasHeight = 400;
// let xPos=0;
// let yPos=0;
// let ySpeed = 5; 

// function setup(){
//     createCanvas(canvasWidth, canvasHeight);
//     background(0);
//     //change the position for the x and y positon of the raindrops spawn from 0 to area of canvas
//     xPos = random(0,canvasWidth/2);
//     yPos = random(0,canvasHeight);
//     for( i=0; i<100 ; i++){
//     //when you push, give coordinates to the elements of arrays
//     raindrop.push({xPos, yPos});
//     }
// }
// function draw(){
//     newraindrop();
// }

// function newraindrop() {
//     for( xy in raindrop){
//         circle(xy[xPos] , xy[yPos],3);
//         yPos += ySpeed;
        
//     }
// }

var drop;
var canvasHeight = 360;
var canvasWidth = 640;

function setup(){
    createCanvas(canvasWidth,canvasHeight);
    drop = new Drop();
}
function draw(){
    background(100);
    drop.show();
    drop.move();
}
//make a function in which the drop will be made and a second so its y-coord will change with ySpeed
function Drop() {
    this.xPos = 30;
    this.yPos = 30;
    this.ySpeed =1;
    
    this.show = function(){
        circle(this.xPos,this.yPos,15);
    }    
    this.move = function(){
        this.yPos = this.yPos += this.ySpeed
        if ( this.yPos > canvasHeight){
            this.yPos = 0;
        }
    }
}






// $( document ).ready(function() {
//     $('#btn').click(function() {
//         window.alert("DID YOU JUST CLICK ME?!");
//     });
// });