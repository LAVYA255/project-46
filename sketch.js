var bg , bgimg, busimg, bus,book, bookimg;
var gameState="PLAY";
var boyimg;
var ground;
var stoneimg;
var pencilimg;
function preload(){
bgimg=loadImage("background.jpg");
busimg=loadImage("bus.png");
boyimg=loadImage("boy.png");
bookimg=loadImage("book.png");
stoneimg=loadImage("Stone.png");
pencilimg=loadImage("Pencil.png")
}
function setup() {
  createCanvas(1600,1050);
  //createSprite(400, 200, 50, 50);
 //bus.velocityX=0;
// bg=createSprite(0,0,1600,1050);
//bg.addImage(bgimg);
//bg.scale=3.5;

ground=createSprite(800,1000,1500,10);


bus=createSprite(200,900,50,50);
bus.addImage(busimg); 
bus.scale=0.4;
 boy= createSprite(1460,900,50,50);
 boy.addImage(boyimg);
boy.scale=0.6;

//book = createSprite(bus.x,bus.y,10,10)
//book.addImage(bookimg)
//book.scale=0.3;
//book.velocityX=5;
}
function spawnObs(){

  if(frameCount%120===0){
  
var obstacles=createSprite(200,900,10,10);
obstacles.velocityX=5;
var r=Math.round(random(1,3));
switch(r){
  case 1:obstacles.addImage(bookimg);
  
  break;

  case 2:obstacles.addImage(stoneimg);
   
  break; 
 
  case 3:obstacles.addImage(pencilimg);

  break;

  default:break;
}
obstacles.scale=0.2;


}

}

function draw() {
// bg.velocityX=3;
//if(bg.x<0) {
//bg.x=bg.width/2

//}
 background(bgimg);
 if(boy.y>600){
   if(keyDown('SPACE')){
  boy.velocityY=-20;
  } 
}
 boy.velocityY=boy.velocityY+0.8
boy.collide(ground);
 



spawnObs();
  drawSprites();

}