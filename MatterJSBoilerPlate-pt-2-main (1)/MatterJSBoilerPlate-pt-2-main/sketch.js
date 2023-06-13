
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rotador1,rotador2,rotador3;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

var ball1,ball2;

function preload()
{
	
}

function setup() {
	createCanvas(550, 600);
   

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    var plane_options={
		isStatic: true
	}
    plane= Bodies.rectangle(600,height,1200,20,plane_options);
	World.add(world,plane);

	//criando os rotadores
    rotador1 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world,rotador1);

	rotador2 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world,rotador2);

	rotador3 = Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world,rotador3);

	// criando as bolinhas
    var ball_options={
		restitution:0.4,
		friction:0.08
	}
	ball1 = Bodies.circle(220,10,15,ball_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(230,10,15,ball_options);
	World.add(world,ball2);

	Engine.run(engine);
  fill("green")
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  //mostrando o solo na tela
  rect(plane.position.x,plane.position.y,1200,20);

  //mostrando os rotadores
  Matter.Body.rotate(rotador1,angle1);
  push();
  translate(rotador1.position.x,rotador1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1+= 2;
 

  Matter.Body.rotate(rotador2,angle2);
  push();
  translate(rotador2.position.x,rotador2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2+= 1.5;

  Matter.Body.rotate(rotador3,angle3);
  push();
  translate(rotador3.position.x,rotador3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3+= 2.5;

  // mostrando as bolinhas
  ellipse(ball1.position.x,ball1.position.y,15);
  
  ellipse(ball2.position.x,ball2.position.y,15);
  Engine.update(engine);
  drawSprites();
 
}



