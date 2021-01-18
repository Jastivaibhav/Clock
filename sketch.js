var sec,min,hr;

var SecAngle;
var MinAngle;
var HrAngle;

function setup() {
  createCanvas(400,400);
angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200,200);
rotate(-90);
hr=hour();
sec=second();
min=minute();

  SecAngle=map(sec,0,60,0,360);
  MinAngle=map(min,0,60,0,360);
  HrAngle=map(hr%12,0,12,0,360);

   push();
   rotate(SecAngle);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);
   pop();

   push();
   rotate(MinAngle);
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,75,0);
   pop();

   push();
   rotate(HrAngle);
   stroke(0,0,255);
   strokeWeight(7);
   line(0,0,50,0);
   pop();

   strokeWeight(10);
   noFill();
   stroke(255,0,0);
   arc(0,0,300,300,0,SecAngle);

   stroke(0,255,0);
   arc(0,0,280,280,0,MinAngle);

   stroke(0,0,255);
   arc(0,0,260,260,0,HrAngle);
}