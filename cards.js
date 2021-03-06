window.onload = function(){
 var newGame = new Game();
 
	var attemptsCount = document.getElementById("attempts")
	attemptsCount.innerText = newGame.attempts;
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
		// console.log(this.nextElementSibling);
		// selectedCard = this.nextElementSibling;
		// newGame.potentialPair.push(selectedCard);
		selectedCard = this.closest('.card-container')
		newGame.potentialPair.push(selectedCard);
		if(newGame.cardsFlipped % 2 === 0){
			newGame.checkPair();
			newGame.attempts++;
			attemptsCount.innerText = newGame.attempts;
		}
		else{
			console.log('keep flippin buddy')
		}
	}

	
	// for cards that are flipped, grab the ones that have a backface visibility that is not hidden and check their background urls against one another

	var resetButton = document.getElementById('reset-btn')
	resetButton.addEventListener('click', newGame.reset);
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
		location.reload();
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
		body = document.body;
		body.style.pointerEvents = 'none';
		firstCard = this.potentialPair[0]
		secondCard = this.potentialPair[1]
		backOfFirstCard = this.potentialPair[0].getElementsByClassName('back')[0]
		backOfSecondCard = this.potentialPair[1].getElementsByClassName('back')[0]
		this.potentialPair = [];
		if(backOfFirstCard.style.background !== backOfSecondCard.style.background){
			console.log('no match')
			setTimeout(function(){
				firstCard.classList.toggle('active');
				secondCard.classList.toggle('active');
				body.style.pointerEvents = 'auto';
			},1200)
		}
		else{
			setTimeout(function(){
				body.style.pointerEvents = 'auto';
			},1200)
		}
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





