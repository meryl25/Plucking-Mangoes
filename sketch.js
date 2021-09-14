const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var groundObj,boy,boyImg,treeObj,stoneObj;
var mangoObj1,mangoObj2,mangoObj3,mangoObj4,mangoObj5,mangoObj6,mangoObj7,mangoObj8,shotObj;

var shotForce=100;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1350, 550);
	engine = Engine.create();
	world = engine.world;
	groundObj = new ground(675,height,1350,20);
	boy = createSprite(210,480,10,50);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	treeObj = new tree(900,300);
	
	mangoObj1 = new mango(900,250,15);
	mangoObj2 = new mango(800,200,12);
	mangoObj3 = new mango(9300,280,9);
	mangoObj4 = new mango(1000,250,16);
	mangoObj5 = new mango(770,300,12);
	mangoObj6 = new mango(880,134,20);
	mangoObj7 = new mango(793,280,12);
	mangoObj8 = new mango(953,100,20);
	stoneObj = new stone(155,425,25);
	shotObj = new shot(stoneObj.body,{x:155,y:425});
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(255);
	
	groundObj.display();
	boy.display();
	treeObj.display();
	mangoObj1.display();
	mangoObj2.display();
	mangoObj3.display();
	mangoObj4.display();
	mangoObj5.display();
	mangoObj6.display();
	mangoObj7.display();
	mangoObj8.display();
	stoneObj.display();
	shotObj.display();
	detectollision(stoneObj,mangoObj1);
	detectollision(stoneObj,mangoObj2);
	detectollision(stoneObj,mangoObj3);
	detectollision(stoneObj,mangoObj4);
	detectollision(stoneObj,mangoObj5);
	detectollision(stoneObj,mangoObj6);
	detectollision(stoneObj,mangoObj7);
	detectollision(stoneObj,mangoObj8);
	drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	shotObj.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    	Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
		shotObj.attach(stoneObj.body);
	}
  }

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
  	  Matter.Body.setStatic(lmango.body,false);
	}
}