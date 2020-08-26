var bullet,wall;

var speed,weight;

function setup() {
  createCanvas(800,800);
  bullet = createSprite(50,200,50,50);

  speed = random(10,10);
  weight = random(400,1500);

  wall = createSprite(700,300,10,height/2);
  wall.shapeColor = color(0,255,0);
}

function draw() {
  background("black");  

  bullet.velocityX = speed;

  if(wall.x - bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180){
      bullet.shapeColor = color(255,0,0);
      
    }
    if(deformation < 180 && deformation > 100){
      bullet.shapeColor = color(255,0,0);
      
    }
    if(deformation<100){
      bullet.shapeColor = color(255,0,0);
      
    }
  }

  drawSprites();
}