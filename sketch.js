var dog, happyDog, foodS,foodStock, dogImg
var dogImage, database
function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
dog = createSprite(250,250);
  dog.addImage(dogImage)
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
writeStock();
readStock();
  drawSprites();
  
  Text("Note: Press UP_ARROW Key To Feed Drago Milk!")
fill("white");
stroke("black");
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
