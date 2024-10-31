var limg = 3372;
var himg = 1366;
var ximg = 0;
var yimg = 20;
var img;
var img2; 
var img3;
var img4;
var img5;
var img6;


function preload() {
  img = loadImage("aquecimento global3.png");
  img2 = loadImage("tabela.png")
  img3 = loadImage("açoes humanas.jpg")
  img4 = loadImage("estufa.jpg")
  img5 = loadImage("aquecimento global2.png")
  img6 = loadImage("salvação.jpg")
}

function setup() {
  createCanvas(3372, 1366);
  image(img, ximg, yimg, limg, himg);
  image(img2, 0, 450, 690, 600); 
  image(img3, 0, 1000, 500, 600);
  image(img4, 0, 2000, 500, 600);
  image(img5, 0, 3000, 500, 600);
  image(img6, 0, 4000, 500, 600)
}