var normalBackGroundImg;
var Yamakazu;
function preload()
{
	normalBackGroundImg = loadImage("assests/NormalBG.png");
	Yamakazuimg = loadImage("assests/Yamakazu.jpg");
}

function setup() {
	createCanvas(windowWidth,windowHeight-20);

Yamakazu = createSprite(windowWidth/2,windowHeight/2,50,50);
Yamakazu.addImage("Yamakazuimg",Yamakazuimg);


  
}


function draw() {
  rectMode(CENTER);
  background(normalBackGroundImg);
  
  drawSprites();
 
}



