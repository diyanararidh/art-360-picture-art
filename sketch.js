let tilepic = [];
let pics = [];

function preload() {
  for (let i=0; i<63; i++){
    pics[i] = loadImage(`pic${i}.jpg`,
      // Success callback
      () => {}, 
      // Error callback
      () => {
        console.error(`Error loading image: pictures/pic${i}.jpg`);
      }
    );
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(0,0,0);
  let rndInt = Math.floor(Math.random() * 50)
  for (let i =0; i < rndInt; i++){
    let x =random(width);
    let y = random(height);
    let r = random(50,300 );
    let picture = random(pics);
    let t = new Tilepic(x, y, r, picture);
    tilepic.push(t);
    
  }
}

function draw() {
  for (let i = 0; i < tilepic.length; i++) {
    tilepic[i].show(); // Draw all tilepic objects
  }
}

function mouseClicked(){
  for (let i = 0; i<tilepic.length; i++){
    tilepic[i].clicked(mouseX, mouseY);
  }
}

class Tilepic {
 constructor(x, y, r, img) {
    this.r = r;
    // Adjust the position so the image doesn't go out of canvas
    this.x = constrain(x, 0, width - this.r);
    this.y = constrain(y, 0, height - this.r);
    this.picture = img;
  }

  clicked(px, py) {
    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      this.picture = random(pics);
      
      // mkae sure image does not go out of canvas
      this.x = constrain(this.x, 0, width - this.r);
      this.y = constrain(this.y, 0, height - this.r);
  }
  }
  
  show() {
    image(this.picture, this.x, this.y, this.r, this.r)
  }
  
}


// to make it repeat automaticicaly in the inspect button - use the console 
//setInterval(function() { 
//   document.getElementById("play-sketch").click(); 
// }, 100000 / Math.random(1,3));
