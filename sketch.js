var PLAY = 1;
var END = 0;
var gameState = PLAY;

var pick,diamondsGroup,back;

var score=0, gameOver, restart;
var score=0;
var gameOver, restart;

function preload(){
pickImage = loadImage("sprite_0 (2).png")
diamondsImage = loadImage("sprite_0.png")
gameOverImg = loadImage("gameOver.png");
restartImg = loadImage("restart.png");
backImg = loadImage("sprite_0 copy.png");
}

function setup() {
createCanvas(1200,300);
  
pick = createSprite(100,150);
 pick.addImage(pickImage);
pick.scale=0.03;

back = createSprite(600,150);
 back.addImage(backImg);
 
 gameOver = createSprite(300,100);
 gameOver.addImage(gameOverImg);
 
 restart = createSprite(300,140);
 restart.addImage(restartImg);
 
 gameOver.scale = 0.5;
 restart.scale = 0.5;

 gameOver.visible = false;
 restart.visible = false;

 diamondsGroup = new Group();

}

function draw() {
  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+ score,830,30);
 
  
 back.depth = pick.depth;
 pick.depth = pick.depth + 1;

  if(gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    pick.y = World.mouseY;
    edges= createEdgeSprites();
    pick .collide(edges);
    spawnDiamond();
  }
  
drawSprites(); 
}

function spawnDiamond(){
  if (frameCount % 60 === 0) {
  var diamonds=createSprite(1100,Math.round(random(5,300)));
  diamonds.addImage(diamondsImage);
  diamonds.scale = 0.2;
  diamonds.velocityX = -1;
 // diamonds.setLifetime=1200;
  back.depth = diamonds.depth;
 diamonds.depth = diamonds.depth + 1;

 diamondsGroup.add(diamonds);
  } 
}
