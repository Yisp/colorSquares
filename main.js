function preload() {

	song = loadSound("Sounds/lostMyself.mp3");

}

function setup() {

	createCanvas(windowWidth, windowHeight);
	background(0);

}

function draw() {

	if (!song.isPlaying()) {

		song.setVolume(3);
		song.play();

	}

	var colr = random(0, 255);
	var colg = random(0, 255);
	var colb = random(0, 255);

	frameRate(60);

	if (mouseIsPressed) {

		rectMode(CENTER);
		fill(colr, colg, colb);
		rect(mouseX, mouseY, random(0, 50), random(0, 50));

	}

}