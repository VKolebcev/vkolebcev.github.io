
let convas = document.getElementById("sandbox");
let context = convas.getContext("2d");

//context.fillRect(50,25,200,250);

let square, circle;

square = new Path2D();
square.moveTo(210,10);
square.lineTo(290,10);
square.lineTo(290,90);
square.lineTo(210,90);
square.lineTo(210,10);

context.stroke(square);

circle = new Path2D();
circle.arc(50,250,45,0,2*Math.PI);

context.fill(circle);

let line = new Path2D();

line.moveTo(0,0);
line.lineTo(300,300);
context.lineWidth = 5;
context.stroke(line);

context.fillStyle = "red";
context.fillRect(0,0,200,200);

context.fillStyle = "rgba(0,255,0,0.5)";
context.fillRect(100,100,300,300);
