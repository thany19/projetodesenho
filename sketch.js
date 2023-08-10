function setup() {
  createCanvas(800, 600);
  background("white");
}

function draw() {
  stroke("blue");
  fill("black");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}