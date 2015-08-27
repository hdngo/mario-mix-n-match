window.onload = function(){
 var newGame = new game();
 
	// var attemptsCount = document.getElementById("attempts")
	// attemptsCount.innerText = newGame.attempts;
	setCards();

	//reminder, must include eventListener part in the window.onload
	for(frontCard in frontCards){
		if(frontCards.hasOwnProperty(frontCard)){
			frontCards[frontCard].addEventListener('click', flipOver)
		}
	}

	// for cards that are flipped, grab the ones that have a backface visibility that is not hidden and check their background urls against one another
}

var cardsFlipped = 0;

//not yet used
var potentialPair = [];

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
			//generate random index
			imageIndex = Math.floor(Math.random()*cardImages.length);
			//grab the image url from the characters hash based on the index generated - the index references an element in the cardImages array which contains keys from the characters hash
			urlString = "url('".concat(characters[cardImages[imageIndex]]).concat("')")
			backCards[card].style.background = urlString;
			backCards[card].style.backgroundSize = '100% 140px';
			//after adding an image, remove the image (its key) from the remaining options in the cardImages array
			cardImages.splice(imageIndex, 1)
		}
	}
}

// Object.keys(obj) method returns an array of a given object's own enumerable properties. source: MDN

var backCards = document.getElementsByClassName('back');

var frontCards = document.getElementsByClassName('front')


function flipOver(){
	this.closest('.card-container').classList.toggle('active')
	cardsFlipped++;
}

