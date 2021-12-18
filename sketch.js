const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, paper;
var dustbin1, dustbin2, dustbin3;

function setup() {
	var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	dustbin1 = new Dustbin(820,340,20,60);
	dustbin3 = new Dustbin(900,340,20,60);
  dustbin2 = new Dustbin(860,380,100,20);

  paper = new Paper(200,360,30);
    
	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-110});
  }
}