
/*
gamestates


*/
var bg,bg1,form,system,code,security,system_one,code_one,security_one;
var score=0;
var score1=0
var gameState="level1"


function preload() {
  bg1 = loadImage("background.jpg");
  bg2 = loadImage("maths.jpg") 
  bg3 = loadImage("maths(1).jpg") 
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  //system1=new SystemOne()
  security = new Security()
  
  

  button2=createSprite(450,220)
  button2.visible=false
  button1=createSprite(450,220)
  button1.visible=false
}

function draw() {
  if(gameState=="level1"){
  background(bg2);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 1) {
    clear()
    background(bg1)
    fill("white")
    textSize(40);
    text("Level 2  UNLOCKED",260, 200);

    button2.visible=true

    if(mousePressedOver(button2)){
      gameState="level2"
  
    }
  }
  if(gameState=="level2"){
   
   
    button2.visible=false
    score=0
    background(bg3)
    clues1();
    security1= new SecurityOne()
    security1.display();
    system1=new SystemOne()
    system1.display()
    textSize(20);
    fill("white");
    text("Score: " + score, 450, 50);
    
  }
}
   

  drawSprites()
}
