function preload() {
    
}
function setup() {
    canvas=createCanvas(640,480);
    canvas.positon(110, 250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw() {
    image(video, 0, 0, 640, 480);
    

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(350, 50, 70);

    rec(90, 420, 460, 20);
    
}