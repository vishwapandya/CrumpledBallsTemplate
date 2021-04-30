
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground, paper, dustbin
	



	
	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  //Display a Ground, paper, dustbin




 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    //write code to launch paper

    
  	}
}





