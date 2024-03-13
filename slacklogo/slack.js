// welcome to blot!

const width = 75;
const height = 75;
setDocDimensions(width, height);
const t = createTurtle();

for (let i = 0; i < 4; i++) {
  t.arc(180,6);
  t.forward(16);
  t.arc(180,6);
  t.forward(16);
  
  t.up();
  t.arc(90,5);
  t.forward(10);
  t.down();
  
  t.forward(6);
  t.arc(270,6);
  t.forward(6);

  t.left(90);
  t.up();
  t.forward(-24);
  t.down();
}

t.translate(
  [width/2, height/2], 
  t.cc
);
drawTurtles([t]);
