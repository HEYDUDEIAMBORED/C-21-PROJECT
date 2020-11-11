var bullet,wall,thickness
var speed,weight
var damage
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(10,200,50,10)
  
  speed=Math.round(random(223,321))
  weight=Math.round(random(30,52))
  thickness=Math.round(random(22,83))
  wall=createSprite(1500,200,thickness,height/2)
}

function draw() {
  background("black");  
  bullet.velocityX=speed
  
  
  damage=0.5*weight*speed*speed/thickness*thickness*thickness
  if(wall.x-bullet.x<(bullet.width+wall.width/2)){
    bullet.velocityX=0
    if (damage<10){ wall.shapeColor=("green")
    }
    if (damage>10){ wall.shapeColor=("red")
     }
   

  }
  drawSprites();
}
