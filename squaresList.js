var mr = 0.10;

class SquaresList {
	constructor(nbSquares = 13*21){
		this.squares = [];
        /*let carreEnCours; */

		for (let carreEnCours = 0; carreEnCours < nbSquares; carreEnCours++){
            let rayon = 40;
            let x = (carreEnCours % 28)* rayon;
            let y = Math.round((carreEnCours/28)) * rayon;
            let mvx = random(2);
            let mvy = random(2);
            let couleurR =  x/4;
            let couleurG = y/2;
            let couleurB = 255-random(rayon)-x/4-y/4;
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
	    this.shuffle();
	}

    addCarre (carre) {
        this.squares.push(carre);
    }

    // On détruit le carré situé à x,y
	popSquare(x, y)
    {
        for (let i = 0; i < this.squares.length; i++)
        {
            if (this.squares[i].xyDansLaBulle(x,y))
                this.squares.splice(i,1);
        }
    }

    // On initialise les variables mouvement de la liste
    setMouvement(mx, my, aleatoire =false)
    {
        for (let index = 0; index < this.squares.length; index++)
        {
            if (! aleatoire) {
                this.squares[index].mvx = mx;
                this.squares[index].mvy = my;
            }
            else
            {
                this.squares[index].mvx = random(mx);
                this.squares[index].mvy = random(my);
            }
        }
    }

    setSwap (actif){
	    if (actif)
	        this.swapActif = true;
	    else
	        this.swapActif = false;
    }


    // Intervertir deux cases au hasard
    shuffle(){
	    if (this.swapActif && this.squares.length > 1) {
            let index1 = round(random(this.squares.length - 2));
            let index2 = round(random(this.squares.length - 1));
            //index2 = index1 + 1;
            let x1 = this.squares[index1].x;
            let y1 = this.squares[index1].y;
            let x2 = this.squares[index2].x;
            let y2 = this.squares[index2].y;

            this.squares[index2].x = x1;
            this.squares[index2].y = y1;
            this.squares[index1].x = x2;
            this.squares[index1].y = y2;
        }

    }

}