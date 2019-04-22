let squaresList;
let checkboxMouvement;
let checkboxSwap;

function setup() {
    createCanvas(1200, 608);
    let x = random(width);
    let y = random(height);

    squaresList = new SquaresList();
    let poping = 0;
    checkboxMouvement = createCheckbox("Mouvement", true);
    checkboxSwap = createCheckbox("Intervertion", false);
    let butonInit = createButton('RAZ!');
    butonInit.mousePressed(initFixe);
    checkboxMouvement.changed(cocheMouvement);
    checkboxSwap.changed(cocheSwap);

}

function initFixe() {
    squaresList = new SquaresList();
    if (checkboxMouvement.checked()) {
        squaresList.setMouvement(2, 2, true);
    } else {
        squaresList.setMouvement(0, 0, false);
    }
}

function cocheMouvement() {
    if (this.checked()) {
        squaresList.setMouvement(2, 2, true);
    } else {
        squaresList.setMouvement(0, 0, false);
    }
}

function cocheSwap() {
    squaresList.setSwap(checkboxSwap.checked());

}

function setupRandom() {
    createCanvas(1200, 608);
    for (let i = 0; i < 15; i++) {
        let x = random(width);
        let y = random(height);
        squares[i] = new Square(x, y, 20 + random(50));
    }
    debug = createCheckbox();
}

function mousePressed() {
    squaresList.popSquare(mouseX, mouseY)
    poping = window.setInterval("squaresList.addCarre(new Square(mouseX, mouseY , 20 + random(50 )))", 200);
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
    squaresList.move();
    squaresList.show();
    textSize(18);
    text("Nbre carrés :" + squaresList.squares.length, 20, 20);
}

function preloadUpdate() {
    preloadCount++;
    if (preloadCount === PRELOADTOTAL)
        launchGame();
}
