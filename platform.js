function setup() {
	createCanvas(500, 500);
	let x = 200;
	let y = 100;
	let width = 200;
	let _x = 250;
	let _y = 150;
	let width = 5;
	let height = 10;
	let jeffrey = new Hero();
	let p = newPlatform(_x, _y, width);
}

function draw() {
	
	jeffrey.show();
	p.show();
}


class Hero {
	constructor(x, y, velocityX, velocityY){
		this.x = x;
		this.y = y;
		this.velocityX = velocityX;
		this.velocityY = velocityY;
		this.height = height;
		this.width - width;
	}
	
	
	show() {
		ellipse(this.x, this.y, this.height, this.width);
		
	}

}
	

class Platform {
	contructor(width, _x, _y) {
		this._x = _x;
		this._y = _y;
		this.width = width;
		this.height = 20;
	}
	
	
	show() {
		rectangle(this._x,this._y,this.width,this.height);
	}
	
	
	
}

