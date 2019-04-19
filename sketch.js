
let squares = [];
let poping = 0;

function setup() {
    createCanvas(1200 , 608);
        let x = random(width);
        let y = random(height);
    for (let i = 0; i < 50; i++) {
        x+=  12;
        y+=12;
        squares[i] = new Square(x, y , 20  );
    }
    debug = createCheckbox();
}

function setupRandom() {
    createCanvas(1200 , 608);
    for (let i = 0; i < 15; i++) {
        let x = random(width);
        let y = random(height);
        squares[i] = new Square(x, y , 20 + random(50) );
    }
    debug = createCheckbox();
}

function mousePressed() {
	popSquare(mouseX, mouseY)
	poping = window.setInterval("squares.push(new Square(mouseX, mouseY , 20 + random(50 )))",200) ;
}

function mouseDragged() {
//	window.setInterval(bubbles.push(new Bubble(mouseX, mouseY , 20 + random(50 ))),500) ;
 // bubbles.push(new Bubble(mouseX, mouseY , 20 + random(50 )));
}

function mouseReleased() {
	clearInterval(poping);
 // bubbles.push(new Bubble(mouseX, mouseY , 20 + random(50 )));
}

function draw() {
  background(0);
	for (let square of squares){
		square.move();
		square.show();
	}
  }

/*
function preloadUpdate() {
    preloadCount++;
    if (preloadCount === PRELOADTOTAL)
        launchGame();
}
*/