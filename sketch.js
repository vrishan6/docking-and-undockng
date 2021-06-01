var hasdocked = false
function preload(){
iss_image = loadImage('images/iss.png')
 bg = loadImage('images/spacebg.jpg')
scImg1 = loadImage('images/spacecraft1.png')
scImg2 = loadImage('images/spacecraft2.png')
scImg3 = loadImage('images/spacecraft3.png')
scImg4 = loadImage('images/spacecraft4.png')


}


function setup() {
  createCanvas(1200,800);
  iss = createSprite(600, 200, 50, 50);
  iss.addImage(iss_image)
  iss.scale = 0.5
   spacecraft = createSprite(150, 150, 50, 50)
   spacecraft.addImage(scImg1)
   spacecraft.scale = 0.1
}



function draw() {
  background(bg); 
if(!hasdocked){

      if(keyDown(UP_ARROW)){
        spacecraft.y = spacecraft.y - 1
        spacecraft.addImage(scImg2)
      }   
      if(keyDown(DOWN_ARROW)){
        spacecraft.y = spacecraft.y + 1
        spacecraft.addImage(scImg2)
      } 

      if(keyDown(RIGHT_ARROW)){
        spacecraft.x = spacecraft.x + 1
        spacecraft.addImage(scImg3)
      }  
      
      if(keyDown(LEFT_ARROW)){
        spacecraft.x = spacecraft.x - 1
        spacecraft.addImage(scImg4)
      }  
  
}
  console.log(spacecraft.x, spacecraft.y)
  if((spacecraft.x > 560 && spacecraft.x < 570 ) && (spacecraft.y > 240 && spacecraft.y < 250)){
    console.log("docked")
    hasdocked = true
  }


  drawSprites();

  
  
}