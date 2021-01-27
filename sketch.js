var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = null;
var plinkos = [];

var divisions = [];

var scores1 = [];
var scores2 = [];
var scores3 = [];

var divisionHeight=300;
var score =0;
var count = 0;

var gameState = "play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 








function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  for(var p = 25; p<300; p = p+79){
    text(500,p,700)
  }
  for(var p1 = 350; p1<550; p1 = p1+79){
    text("100",p1,700)
  }
  for(var p2 = 600; p2<900; p2 = p2+79){
    text("200",p2,700)
  }
  Engine.update(engine);
 
  console.log(mouseX,mouseY)

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle !== null) {
     particle.display()
     
     if (particle.body.position.y>730){
       ;
       if(particle.body.position.x<300){
         score = score+500;
       }
       if(particle.body.position.x>301 && particle.body.position.x<600){
          score = score+100;
       }
       if(particle.body.position.x>550 && particle.body.position.x<900){
         score = score+200
       }
       particle = null
     }
   
   
   
   
   if (count >= 5){
     gameState = "end"
   }
  
  
   }
  
  
}

function mousePressed() {
  if(gameState !== "end"){
    particle = new Particle(mouseX,10,10);
    count++;
  }
}