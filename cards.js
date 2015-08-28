window.onload = function(){
 var newGame = new Game();
 
	// var attemptsCount = document.getElementById("attempts")
	// attemptsCount.innerText = newGame.attempts;
	newGame.setCards();

	//reminder, must include eventListener part in the window.onload
	for(frontCard in frontCards){
		if(frontCards.hasOwnProperty(frontCard)){
			frontCards[frontCard].addEventListener('click', flipOver)
			frontCards[frontCard].addEventListener('click', updateCardFlipCount)
		}
	}

	function flipOver(){
		this.closest('.card-container').classList.toggle('active')
	}

	function updateCardFlipCount(){
		newGame.cardsFlipped++;
		console.log(newGame.cardsFlipped)
		console.log(newGame.potentialPair)
		console.log(this.nextElementSibling);
		selectedCard = this.nextElementSibling;
		newGame.potentialPair.push(selectedCard);
		if(newGame.cardsFlipped % 2 === 0){
			newGame.checkPair();
		}
		else{
			console.log('keep flippin buddy')
		}
	}
	// for cards that are flipped, grab the ones that have a backface visibility that is not hidden and check their background urls against one another

	var resetButton = document.getElementById('reset-btn')
	console.log(resetButton);
}

// var cardsFlipped = 0;

//not yet used
var potentialPair = [];

function Game(){
	this.cardsFlipped = 0,
	this.attempts = 0,
	this.over = false,
	this.potentialPair = [],
	this.reset = function(){
		this.attempts = 0;
		this.over = false;
	},
	this.setCards =  function(){
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
	},
	this.checkPair = function(){
		// console.log('checkkkkked')
		console.log(this.potentialPair[0].style.background === this.potentialPair[1].style.background)
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



// Object.keys(obj) method returns an array of a given object's own enumerable properties. source: MDN

var backCards = document.getElementsByClassName('back');

var frontCards = document.getElementsByClassName('front')



//potential lesson learned: cannot grab an element by an id and work with it within the window.onload scope unless I actually grab the element within the window.onload scope, BUT, grabbing elements byClassName outside of the scope allows you to access the element within the scope.
// var resetButton = document.getElementsByClassName('reset-btn')
// var resetButton = document.getElementById('reset-btn')




