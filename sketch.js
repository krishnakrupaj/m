const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground,div
var div_ar = [];
var plinko_ar = [];
var ball_ar = [];

function setup() {
  var c =createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  
  ground = new Ground(width/2,height-10,width,20);

  for(var d = 0; d <= width; d = d+80 ){
    div_ar.push(new Ground(d,height-(height/2-50)/2,10,height/2-50));
  }
  for(var p = 50; p <= width; p = p+50 ){
    plinko_ar.push(new plinko(p,70));
  }
  for(var p = 25; p <= width; p = p+50 ){
    plinko_ar.push(new plinko(p,140));
  }
  for(var p = 50; p <= width; p = p+50 ){
    plinko_ar.push(new plinko(p,210));
  }
  for(var p = 25; p <= width; p = p+50 ){
    plinko_ar.push(new plinko(p,280));
  }
}

function draw() {
  background("black"); 
  Engine.update(engine);

  if(frameCount%40 === 0){
    ball_ar.push(new balls(random(20,width-20),10,10));
  }
 
  for(var u = 0;u<div_ar.length ; u++){
    div_ar[u].display();
  }
  for(var l = 0;l<plinko_ar.length ; l++){
    plinko_ar[l].display();
  }
  for(var j = 0;j<ball_ar.length ; j++){
    ball_ar[j].display();
  }  
  ground.display();
  
  drawSprites();

}