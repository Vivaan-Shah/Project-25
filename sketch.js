
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}
var paper1, ground, dustbin1;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new Paper(50,500,20)
ground=Bodies.rectangle(400,650,800,9,{isStatic:true})
dustbin=new Dustbin();
World.add(world,ground)
	Engine.run(engine);

}


function draw() {
 
  background(0);
  paper1.display();
  dustbin.display();
  rectMode(CENTER);
  fill("brown");
  rect(400,650,800,9)
 
}

function keyPressed() {
if(keyCode==UP_ARROW) {
Matter.Body.applyForce(paper1.body,paper1.body,{x:50,y:-80})
}
}

