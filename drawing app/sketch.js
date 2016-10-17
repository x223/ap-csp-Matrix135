var weight = 5;
var strokeColor = 'blue';
var eraser ='white';

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('white');
	text("b = black , o = orange , p = pink , r = red , g = gold, y = yellow, n = green, e = eraser ",50,50);
}

function draw() {

	if (mouseIsPressed) {
		strokeWeight(weight);
		stroke(strokeColor);
		line(pmouseX, pmouseY, mouseX, mouseY);
	}

}


function keyTyped() {
	if (key === 'b' ) {
		strokeColor = 'black';
	} else if (key === 'o') {
		strokeColor = 'orange';
		strokeWeight = 10;
	} else if (key == 'p'){
		strokeColor='pink';
	}else if (key == 'r'){
		strokeColor='red';
	}else if (key == 'g'){
		strokeColor='gold';
	}else if (key == 'y'){
		strokeColor='yellow';
	}else if (key == 'n'){
		strokeColor='green';
	}else if (key == 'e'){
		strokeColor= eraser;
	}
}
