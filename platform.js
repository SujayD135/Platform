let jeffrey;
let p;
let score = 0;
var bg;

function setup() {
	bg = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yKYEEZ1baD_GMyJdLcbfXbDt4fgm_Ij_CeNpq_m6eTUCrAlQAg");
	createCanvas(640, 480);
	let x = 200;
	let y = 100;
	let width = 200;
	let _x = 250;
	let _y = 150;
	let height = 10;
	jeffrey = new Hero(10, 10 , 0 , 0);
	p = new Platform(_x, _y, width);
}

function draw() {
	background(bg);
	jeffrey.move();
	jeffrey.show();
	p.show();
	strokeWeight(0);
	fill("white");
	text("Score: " +score, 10, 10);
	checkForFall();
}

function checkForFall() {
	if(jeffrey.y > 500)
	{
		score--;
		jeffrey.y = 0;
	}
}


class Hero {
	constructor(x, y, velocityX, velocityY){
		this.x = x;
		this.y = y;
		this.velocityX = velocityX;
		this.velocityY = velocityY;
		this.height = 15;
		this.width = 15;
	}	
	show() {
		fill("cyan");		
		ellipse(this.x, this.y, this.width, this.height);
		
	}
	
	move() {
		if(keyIsDown(LEFT_ARROW)) {
			this.x -=5 ;
		} 
		if(keyIsDown(RIGHT_ARROW)) {
			this.x+=5;
		} 
		if(keyIsDown(UP_ARROW)) {
			this.y-=5;
		}
		if(keyIsDown(DOWN_ARROW)) {
			this.y+=5;
		}
		if(p.contains(this.x, this.y) == false) {
			this.y++;
		}
	}

}
	

class Platform {
	constructor(width, _x, _y) {
		this._x = _x;
		this._y = _y;
		this.width = width;
		this.height = 20;
	}

	
	show() {
		fill("gray");
		stroke(255);
		strokeWeight(4);
		rect(this._x,this._y,this.width,this.height);
	}
	
	contains(givenX, givenY) {
		if(givenX > this._x && givenX < this._x+this.width) {
			if(givenY > this._y && givenY < this._y+this.height) {
				return true;
			}
			
		}
		return false;
	}
	
	
	
	
}

