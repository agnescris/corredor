var poi,poimg
var chao,chaoimamg
function preload(){
poimg=loadAnimation('Runner-1.png','Runner-2.png')
chaoimamg=loadImage('path.png')
  //imagens pré-carregadas
}

function setup(){
  createCanvas(400,400);
  //cprie sprite aqui
  chao=createSprite(200,200)
  chao.addImage(chaoimamg)
  chao.velocityY=4
  chao.scale=1.2
  poi=createSprite(180,340,30,30)
  poi.addAnimation('correr',poimg)
  poi.scale=0.1
}

function draw() {
  background(0);
drawSprites()
if(chao.y>400){
  chao.y=height/2
}
}
