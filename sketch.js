
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let angine;
let world;
var ball;
var retangulo;
var quadrado;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
  	var ball_options = {
		restitution : 0.5,
		friction : 0.02,
		frictionAir : 0
    	}

	var quadrado_options = {
		restitution : 0.7,
		friction : 0.01,
		frictionAir : 0.1
	}

	var retangulo_options = {
		restitution : 0.01,
		friction : 1,
		frictionAir : 0.3
	}
	var ground_options = {
		isStatic: true
	}


ball = Bodies.circle(220, 200, 10, ball_options);
World.add(world, ball);

quadrado = Bodies.rectangle(350, 300, 90, 20, quadrado_options);
World.add(world, quadrado);

retangulo = Bodies.rectangle(110, 200, 10, 20,retangulo_options);
World.add(world, retangulo);

ground = Bodies.rectangle(300,704,400,20,ground_options);
  World.add(world,ground);

	Engine.update(engine);
	Engine.run(engine);

    ellipseMode(RADIUS);
	rectMode(CENTER);
	fill(CENTER);
}


function draw() {
  background("green");
  
  ellipse(ball.position.x,ball.position.y,20);
  
  rect(quadrado.position.x,quadrado.position.y,60,20);

  rect(retangulo.position.x,retangulo.position.y, 60, 60);

  rect(ground.position.x,ground.position.y,1100,20);

  drawSprites();
 
}



