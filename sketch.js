function setup() {
  createCanvas(1450,800);
  
}

function draw() {
  background("black"); 
  rainDrops() 
  drawSprites();
}

function rainDrops(){
 var drops = createSprite(40,0,3,3);
 drops.velocityY = random(2,10)
 drops.x = random(0,1350)
 drops.width = random (3,10)
 drops.height = random(10,70)
 drops.shapeColor = "green";
}
