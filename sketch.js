
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,engine,world;
	var ground;
	var binwall1;
	var binwall2;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world; 
	
	var balloptions = {
	isStatic : false,	
    restitution : 0.3,
	friction:0,
	density:1.2,

	}

	var groundoptions =  {
    isStatic : true,	
	}

	 ball = Bodies.circle(260,100,30,balloptions)
	  ground = Bodies.rectangle(width/2,670,width,20,groundoptions)
	  binwall1 = Bodies.rectangle(1100,600,20,120,groundoptions);
	  binwall2 = Bodies.rectangle(1350,600,20,120,groundoptions);
	
	World.add(world,ball);
	World.add(world,ground)
	World.add(world,binwall1);
    World.add(world,binwall2);

	Engine.run(engine);	
}


function draw() {
	background("black");
	
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
  push()
  fill("brown")
  rect(ground.position.x,ground.position.y,width,20);
  pop()

  push()
  fill("yellow")
  rect(binwall1.position.x,binwall1.position.y,20,120);
  rect(binwall2.position.x,binwall2.position.y,20,120);
  pop()
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
	}
}