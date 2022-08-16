img="";
function preload(){
    img=loadImage('house.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    
    fill("#FF0000");
    text("Sofa",44,300);
    noFill();
    stroke("#FF0000");
    rect(44,290,250,100); 
}