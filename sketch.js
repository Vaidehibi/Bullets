var bullet,wall,speed,weight;
var thickness;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness= random(22,83);
  bullet= createSprite(50, 200, 50, 5);
  bullet.velocityX= speed
  bullet.shapeColor= "purple";
  wall= createSprite(1200,200,thickness, height/2)
  wall.shapeColor= "blue";
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation>10){
      wall.shapeColor= "red";
    }
    if(deformation<10){
      wall.shapeColor= "green";
    }
  }
  drawSprites();
}
function hasCollided(leftbullet, leftWall){
bulletRightEdge= leftbullet.x+leftbullet.width;
wallLeftEdge= leftWall.x;
if(bulletRightEdge>= wallLeftEdge){
  return true
}
return false
}