let jeffrey;
let p;
let score = 0;

function setup() {
	createCanvas(500, 500);
	let x = 200;
	let y = 100;
	let width = 200;
	let _x = 250;
	let _y = 150;
	let height = 10;
	jeffrey = new Hero();
	p = new Platform(_x, _y, width);
}

function draw() {
	background(0);
	jeffrey.move();
	jeffrey.show();
	p.show();
	text("Score: " +score, 10, 10);
}

function checkForFall() {
	if(jeffrey.y > height)
	{
		score--;
		jeffey.y = 0;
	}
}


class Hero {
	constructor(x, y, velocityX, velocityY){
		this.x = x;
		this.y = y;
		this.velocityX = velocityX;
		this.velocityY = velocityY;
		this.height = 10;
		this.width = 10;
	}	
	show() {
		fill("white");
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
			this.y+=5;
		}
		if(keyIsDown(DOWN_ARROW)) {
			this.y-=5;
		}
		if(jeffrey.contains(this.x, this.y) == false) {
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
		rect(this._x,this._y,this.width,this.height);
	}
	
	contains(givenX, givenY) {
		if(givenX > this.x && givenX < this.x+this.width) {
			if(givenY > this.y && givenY < this.y+this.height) {
				return true;
			}
			
		}
		return false;
	}
	
	
	
	
}

