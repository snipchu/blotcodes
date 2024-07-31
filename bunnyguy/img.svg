//blot.hackclub.com drawing: bunnyguy
//7-30-2024
const width = 125;
const height = 125;
setDocDimensions(width, height);
const t = new bt.Turtle();
//head
t.arc(90,15);
t.arc(90,20);
t.forward(5);
t.arc(90,20);
t.arc(90,15);
t.forward(15);
//right ear
t.jump([2,34]);
t.left(28);
t.arc(-18,65);
t.arc(-121,4);
t.left(-16);
t.arc(-34,28);
// left ear
t.jump([-17,34]);
t.left(-48);
t.arc(18,65);
t.arc(121,4);
t.right(-16);
t.arc(34,28);
//hat base
t.jump([15,18]);
t.setAngle(0)
t.forward(6);
t.arc(173,5);
t.arc(12.6,264);
t.arc(173,5);
t.forward(6);
//hat top
t.jump([-30,29.25]);
t.setAngle(80);
t.arc(-20,45);
t.setAngle(0);
t.forward(34);
t.setAngle(-60);
t.arc(-20.7,45);
//monocle
t.jump([5,5]);
t.setAngle(0);
t.arc(90,9.5);
t.forward(1);
t.arc(90,11);
t.arc(90,11);
t.forward(1);
t.arc(90,9.5);
t.forward(4);
//left eye
t.jump([-13,17.5]);
t.setAngle(90);
t.arc(134,5);
t.arc(49,11);
t.arc(101,5);
t.jump([-14,17.5]);
t.setAngle(88);
t.arc(180,.75);
t.forward(5);
t.arc(180,.75);
t.forward(5);
t.forward(-2.4);
t.setAngle(150);
t.forward(1.7);

t.jump([-13,20.5]);
t.setAngle(150);
t.forward(10);
//right eye
t.jump([-3,17.5]);
t.setAngle(90);
t.arc(-134,5);
t.arc(-49,11);
t.arc(-101,5);
t.jump([-2,17.5]);
t.setAngle(92);
t.arc(-180,.75);
t.forward(5);
t.arc(-180,.75);
t.forward(5);
t.forward(-2.1);
t.setAngle(211);
t.forward(-1.7);
t.jump([-3,20.5]);
t.setAngle(30);
t.forward(10);
//mouth
t.jump([-8,9.5]);
t.setAngle(-90);
t.arc(450,.25);
t.right(90);
t.forward(3);
t.right(15);
t.arc(-86,2);
t.forward(1.5);
t.arc(-94,2);
t.jump([-7.75,6.25]);
t.right(153.5);
t.arc(86,2);
t.forward(1.5);
t.arc(94,2);
t.jump([-10,0]);
t.setAngle(105);
t.arc(-14.25,20);
t.jump([-4,0]);
t.setAngle(85);
t.forward(5);

//bowtie
t.jump([-6,-2]);
t.setAngle(30);
t.arc(-25,19);
t.right(73);
t.arc(-45,11);
t.right(73);
t.arc(-25,19);
t.setAngle(90);
t.forward(3.3);
t.left(90);
t.forward(3.3);
t.left(90);
t.forward(3.3);
t.left(90);
t.forward(3.3);
t.left(90);
t.jump([-9.35,-2]);
t.setAngle(150);
t.arc(25,19);
t.left(73);
t.arc(45,11);
t.left(73);
t.arc(25,19);


//arms
t.jump([-18,-3]);
t.setAngle(-148);
t.forward(22);
t.arc(172,5);
t.forward(15);
t.setAngle(0);
t.forward(8);
t.setAngle(-148);
t.forward(5);
t.arc(148,4);
t.forward(5);
t.left(20);
t.forward(20);
//back
t.jump([15,13.6]);
t.setAngle(18);
t.arc(-47,35);
t.arc(-64,22);
t.forward(2);
t.arc(-86,14);
t.forward(15);
t.right(-25);
t.arc(-61,11);
t.right(16);
t.arc(-10,63);
t.arc(-77,7);
t.arc(-90,5);
t.left(149);
t.arc(-96,10);
//tail
t.jump([42,11.5]);
t.setAngle(47);
t.arc(-32,23);
t.arc(-150,5);
t.arc(-10,23);
t.left(154);
t.arc(-18,20);
t.arc(-150,5);
t.arc(-10,20);
t.left(154);
t.arc(-11,15);
t.arc(-157,5);
t.arc(-16,18);

bt.translate(
  t.path,
  [width/2, height/2], 
  bt.bounds(t.path).cc
);

drawLines(t.lines());


