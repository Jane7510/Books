status = "";

function preload(){
    img = loadImage('puppies.jpeg');
  }
 

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(550, 350);
  
   
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
  function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
  }

function modelLoaded() {
    status = "true";
    console.log("Model Loaded!");
}