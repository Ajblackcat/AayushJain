var jungle,jungle_img,banana, banana_img,bananaGroup;
var obstacle,stone_img,monkey,monkey_crawling,invisibleGround;
var survivalTime;
var bananaGroup,ObstacleGroup;
function preload(){
 monkey_crawling=loadAnimation("Monkey01.png","Monkey02.png","Monkey03.png","Monkey04.png","Monkey05.png","Monkey06.png","Monkey07.png","Monkey08.png","Monkey09.png","Monkey10.png");
 jungle_img=loadImage("jungle.jpg");
 banana_img=loadImage("banana.png"); 
stone_img=loadImage("stone.png");  
}
function setup() {
  createCanvas(500, 400);
jungle=createSprite(450, 200,20,100);
jungle.addImage(jungle_img);  
  

monkey= createSprite (100,370,10,10);
monkey.addAnimation("crawling",monkey_crawling);  
monkey.scale=0.1; 

invisibleGround= createSprite (100,375,10000,10) ; 
invisibleGround.visible = false;
invisibleGround.velocityX=-9;
invisibleGround.x=invisibleGround.width/2;    
ObstacleGroup=new Group();
bananaGroup=new Group();
 survivalTime=0; 
}

function draw() {
  background(220);
 
text("SurvivalTime:"+survivalTime,500,100);
  survivalTime=Math.round(frameRate()/60)
   monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(invisibleGround);
if (invisibleGround.x < 0){
      invisibleGround.x = invisibleGround.width/2;
    }  
 if (keyDown("space")&& monkey.y >=315) {
  monkey.velocityY=-17;
} 
  spawnObstacles();
  spawnBanana();
 if (bananaGroup.isTouching(monkey)) {
bananaGroup.destroyEach();
} 
 if (ObstacleGroup.isTouching(monkey)) {
bananaGroup.setVelocityXEach(0);
ObstacleGroup.setVelocityXEach(0);
ObstacleGroup.setLifetimeEach(-1);
bananaGroup.setLifetimeEach(-1); 
}  
  
  
drawSprites();
}
function spawnObstacles(){
 if(World.frameCount % 300 === 0) {
var obstacle = createSprite(550,350,10,40);
    obstacle.velocityX = -6;
    
    obstacle.addImage(stone_img);
    
    obstacle.scale = 0.15;
    obstacle.lifetime = 70;
     ObstacleGroup.add(obstacle);
 }
}
function spawnBanana(){
 if(World.frameCount % 80 === 0) {
    var banana = createSprite(550,200,10,40);
    banana.velocityX = -6;
    banana.addImage(banana_img);
    
    banana.scale = 0.05;
    banana.lifetime = 100;
       bananaGroup.add(banana); 
 
 
 }  
}
