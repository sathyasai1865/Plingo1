var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  var divisions =[];
  var divisionHeight=300;
  var particles = [];
  var plinkos = [];
  //var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var i = 0; i <=width; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects

  Engine.run(engine)
  
    
}
 


function draw() {
  rectMode(CENTER);
  background(0);
 //textSize(20)
 //drawSprites();
 
  Engine.update(engine);
  ground.display();
  
   //display the divisions
   for (var n = 0; n < divisions.length; n++) {
    divisions[n].display();
  }

  if(frameCount%60 ===0){
    particles.push(new Particles(random(width/2-30),10,10))
  }

  //display the plinkos 
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();   
  }
   
  //display the paricles 
  for (var h = 0; h < particles.length; h++) {
    particles[h].display();   
  }

}