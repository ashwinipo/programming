var diam1=0;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(180,255,127) // an RGB color for the circle's border
  fill(255,170,127,250); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255)) 
  triangle(80, 125, 98, 60, 136, 125); // center of canvas, 
//fill(rgb("240, 196, 254");
    ellipse(200,200,diam1,diam1);
    line(25,75,80,80);
    //diam1=diam1+5;
}
function keyPressed(){
    diam1=diam1+5;
}
