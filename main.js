function preload() {}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 350, 350);

  background(200);
  fill(255, 0, 0);
  circle(50, 50, 50);
  circle(50, 450, 50);
  circle(450, 450, 50);
  circle(450, 50, 50);
  fill(0, 200, 0);
  rect(75, 40, 351, 20);
  rect(75, 440, 351, 20);
  rect(440, 75, 20, 351);
  rect(40, 75, 20, 351);
}

function take_snapshot() {
  save("myFilterImage.png");
}
