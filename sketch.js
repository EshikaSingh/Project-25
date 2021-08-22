const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	ball = new Ball(40,5,70,70);

	dustbin1 = new Dustbin(740,540,250,20);
        dustbin2 = new Ground(650,450,20,220);
	dustbin3 = new Ground(830,450,20,220);

	ground = new Ground(450,570,1000,25);

	wall = new Ground(876,60,20,1000);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
	  Engine.run(engine);
	  Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin2.display();
  dustbin3.display();

  ball.display();

  dustbin1.display();

  ground.display();

  wall.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:155,y:-200});
	}
}
