var mr = 0.10;

class SquaresList {

	constructor(nbSquares = 10){
		this.squares = [];
        /*let carreEnCours; */

		for (let carreEnCours = 0; carreEnCours < nbSquares; carreEnCours++){
            let x = carreEnCours;
            let y = carreEnCours;
            let mvx = random(-10,10);
            let mvy = random(-10,10);
            let rayon = 30;
            let couleurR = random(255);
            let couleurG = random(255);
            let couleurB = random(255);
            this.squares[carreEnCours] =  new Square ( x, y, rayon, couleurR, couleurG, couleurB);
		}
	}
	
	show ()
	{
	    for (let carre of this.squares){
		    carre.show();
		}
	}
	
	move() {
	    for (let carre of this.squares){
		    carre.move();
		}
	}

    addCarre (carre) {

        this.squares.push(carre);
    }

	popSquare(x, y)
    {
        for (let i = 0; i < this.squares.length; i++)
        {
            if (this.squares[i].xyDansLaBulle(x,y))
                this.squares.splice(i,1);
        }
    }
}