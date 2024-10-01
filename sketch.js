function setup() {
  
  leinwand = createCanvas(windowWidth, windowHeight);
  leinwand.position(0.0);// Links oben
  leinwand.style("z-index","-2");
  fill (0,0,100, 20);
  noStroke;

  
}

function draw() {
  
circle (mouseX, mouseY, 20);
}