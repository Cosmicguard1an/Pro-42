var hr,mn,sec
var hrHand,mnHand,secHand




function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background(0);  
  translate(400,200)
  rotate(-90)
  

  hr = hour();
  mn = minute();
  sec = second();

  hrHand = map(hr%12,0,12,0,360);
  mnHand = map(mn,0,60,0,360);
  secHand = map(sec,0,60,0,360);

  //drawing second hand
  push();
  rotate(secHand);
  stroke("green");
  strokeWeight(3);
  line(0,0,100,0);
  pop();

  //drawing minute hand
  push();
  rotate(mnHand);
  stroke("blue");
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  //drawing hour hand
  push();
  rotate(hrHand);
  stroke("red");
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  //making the arcs
  stroke(255,20,150);
  point(0,0)
  strokeWeight(5)
  noFill();
  stroke("red");
  arc(0,0,300,300,0,hrHand)
  stroke("blue");
  arc(0,0,290,290,0,mnHand)
  stroke("green");
  arc(0,0,280,280,0,secHand)
  

  drawSprites();
}