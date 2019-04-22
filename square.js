var mr = 0.10;

class Square {
	constructor(x, y, rayon, couleurR =-1, couleurG, couleurB){

		if (couleurR===-1){
			this.randomSquare();
		}
		else
		{
			this.x = x;
			this.y = y;
			this.mvx = random(-1,1);
			this.mvy = random(-1,1);
			this.rayon = rayon;
			this.couleurR = couleurR;
			this.couleurG = couleurG;
			this.couleurB = couleurB;
		}
	}

	randomSquare(){
		this.x = random (10,600);
		this.y = random (50, 250);
		this.mvx = random (-10,10);
		this.mvy = random (-10,10);
		this.rayon = random (10,100);
		this.couleurR = random(255);
		this.couleurG = random(255);
		this.couleurB = random(255);
	}

	xyDansLaBulle(x,y)
	{
		if ( dist(x,y,this.x, this.y ) < this.rayon)
			return true;
		else
			return false;
	}
	
	show ()
	{
	//	stroke(color(this.couleurR,this.couleurG,this.couleurB ));
		strokeWeight(4);
		smooth();
		fill(this.couleurR, this.couleurG, this.couleurB, 255);
		rect(this.x, this.y, this.rayon, this.rayon);
	}
	
	move() {
		this.x += this.mvx;
		this.y += this.mvy;

		// Gère le rebond gauche
		if (this.x < this.rayon){
			this.mvx = -this.mvx;
			this.x = this.rayon;
		}
		// Gère le rebond haut
		if (this.y < this.rayon){
			this.mvy = -this.mvy;
			this.y = this.rayon;
		}
		// Gère le rebond droit
		if (this.x > width - this.rayon){
			this.mvx = -this.mvx;
			this.x = width - this.rayon;
		}
		// Gère le rebond bas
		if (this.y > height - this.rayon){
			this.mvy = -this.mvy;
			this.y = height - this.rayon;
		}
	}
}