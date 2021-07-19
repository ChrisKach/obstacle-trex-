var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var test;
var cloud,cloudImage;
var obstacleSprite,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;




function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
 obstacle1 = loadImage("obstacle1.png");
 obstacle2 = loadImage("obstacle2.png");
 obstacle3 = loadImage("obstacle3.png");
 obstacle4 = loadImage("obstacle4.png");
 obstacle5 = loadImage("obstacle5.png");
 obstacle6 = loadImage("obstacle6.png");
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 test = Math.round(random(1,100));
}

function draw() {
  //set background color
  background(0);
  
  console.log(test);
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
spawnClouds();
spawnObstacles();
  drawSprites();
  
}
function spawnClouds(){
  if(frameCount%80===0){
  cloud = createSprite(600,30,30,20);
  cloud.velocityX = -4;
  cloud.addImage(cloudImage);
  //cloud.scale=0.7;
  cloud.y=Math.round(random(20,90));
  //cloud.scale=Math.round(random(0.2,1));
  cloud.lifetime=175;
}
}
function spawnObstacles(){
  if(frameCount%60===0){
  obstacleSprite = createSprite(600,160,10,30);
  obstacleSprite.velocityX = -5;
  var num = Math.round(random(1,6));
  switch(num){
    case 1:obstacleSprite.addImage(obstacle1);
    break;
    case 2:obstacleSprite.addImage(obstacle2);
    break;
    case 3:obstacleSprite.addImage(obstacle3);
    break;
    case 4:obstacleSprite.addImage(obstacle4);
    break;
    case 5:obstacleSprite.addImage(obstacle5);
    break;
    case 6:obstacleSprite.addImage(obstacle6);
    break;
  default:break;
  }
  obstacleSprite.scale=0.7;
  obstacleSprite.lifetime=135;
  }
}

