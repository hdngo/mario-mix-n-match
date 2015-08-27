window.onload = function(){
 var newGame = new game();
 console.log(newGame.attempts);
 console.log(newGame.over);
 console.log(characters)
 console.log(backCards)

 // for(card in backCards){
 // 	if(backCards.hasOwnProperty(card)){
		
	// }
	// }
	setCards();
}

function game(){
	this.attempts = 0,
	this.over = false;
	this.reset = function(){
		this.attempts = 0;
		this.over = false;
	}
}

var characters = {
	mario: './imgs/mario.png',
	luigi: './imgs/luigi.png',
	peach: './imgs/peach.png',
	bowser: './imgs/bowser.png',
	toad: './imgs/toad.jpg',
	yoshi: './imgs/yoshi.png',
	goomba: './imgs/goomba.png',
	boo: './imgs/boo.png'
}

var characterKeys = Object.keys(characters)

function setCards(){
	cardImages = characterKeys.concat(characterKeys)
	for(card in backCards){
		if(backCards.hasOwnProperty(card)){
			imageIndex = Math.floor(Math.random()*cardImages.length);
			urlString = "url('".concat(characters[cardImages[imageIndex]]).concat("')")
			backCards[card].style.background = urlString;
			backCards[card].style.backgroundSize = '100% 140px';
			cardImages.splice(imageIndex, 1)
		}
	}
}

// Object.keys(obj) method returns an array of a given object's own enumerable properties. source: MDN

var backCards = document.getElementsByClassName('back');
