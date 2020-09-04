var movingRect, fixedRect;
var a,b,c,d

function setup(){
  createCanvas(800,800);
  fixedRect = createSprite(200,200,40,60);
 // fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,200,60,40);
  //movingRect.shapeColor = "green";
  movingRect.debug= true; 
  
  a = createSprite(100,50,20,50);
  b = createSprite(150,50,20,50);
 // c = createSprite(200,50,20,50);
}

function draw(){
background(0);
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;


isTouching(movingRect,fixedRect);
isTouching(movingRect,a);
isTouching(movingRect,b);


drawSprites();

}

function isTouching(object1, object2){


  if(object1.x- object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
     && object1.y- object2.y < object1.width/2 + object2.width/2
    && object2.y- object1.y < object1.width/2 + object2.width/2){
      object2.shapeColor = "green";
      object1.shapeColor = "green";
    }
    else {
     object2.shapeColor ="red";
     object1.shapeColor ="red";
    } 
}

