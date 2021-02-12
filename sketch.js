const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
 //preload the images here
 backgroundImage = loadImage("GamingBackground.png");

 monsterImage1 = loadImage("Monster1.png");
 monsterImage2 = loadImage("Monster2.png");

 }

function setup() {
  createCanvas(1366, 625);

  //creating the engine and world
  engine = Engine.create();
  world = engine.world

  // create sprites here
  ground = new Ground(400, 400, 850, 10);

  superhero = new Superhero(140, 315, 200, 100);

  monster = new Monster(720, 380, 150, 150)

  box1 = new Box(430, 380, 30, 30);
  box2 = new Box(460, 380, 30, 30);
  box3 = new Box(490, 380, 30, 30);
  box4 = new Box(520, 380, 30, 30);
  box5 = new Box(550, 380, 30, 30);
  box6 = new Box(580, 380, 30, 30);
  box7 = new Box(610, 380, 30, 30);
  box8 = new Box(640, 380, 30, 30);
  box9 = new Box(670, 380, 30, 30);

  box10 = new Box(460, 350, 30, 30);
  box11 = new Box(490, 350, 30, 30);
  box12 = new Box(520, 350, 30 ,30);
  box13 = new Box(550, 350, 30, 30);
  box14 = new Box(580, 350, 30, 30);
  box15 = new Box(610, 350, 30, 30);
  box16 = new Box(640, 350, 30, 30);

  box17 = new Box(490, 330, 30, 30);
  box18 = new Box(520, 330, 30, 30);
  box19 = new Box(550, 330, 30, 30);
  box20 = new Box(580, 330, 30, 30);
  box21 = new Box(610, 330, 30, 30);

  box22 = new Box(520, 310, 30, 30);
  box23 = new Box(550, 310, 30, 30);
  box24 = new Box(580, 310, 30, 30);

  box25 = new Box(550, 280, 30, 30);

  rope = new Rope(superhero.body, {x : 350, y : 100})
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
  
  //displaying the objects
  ground.display();

  superhero.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();
  
  monster.display();

  fill("black");
  text(mouseX+","+mouseY, mouseX, mouseY);

  

}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x : mouseX, y : mouseY})
}

