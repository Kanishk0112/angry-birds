const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,ground,pig;

function setup(){
    var canvas = createCanvas(1400,650);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,600,50,80);
    box2= new Box(1200,600,50,80);
    box3 = new Box(1000,470,50,80);
    box4= new Box(1200,470,50,80);
    box5= new Box (1100,350,50,80);
    ground= new Ground(700,620,1400,10);
    pig = new Pig(1100,600);
    pig2 = new Pig(1100,470);
    log = new Log(1100,500,250,PI/2);
    log2 = new Log(1100,380,250,PI/2);
    log3 = new Log(1050,350,125,PI/7);
    log4 = new Log(1150,350,125,-PI/7);
    bird= new Bird(150,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   ground.display();
   pig.display();
   pig2.display();
   log.display();
   log2.display();
   log3.display();
   log4.display();
   bird.display();
}