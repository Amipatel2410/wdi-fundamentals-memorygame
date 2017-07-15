//console.log("Up and comming");

/*var cardOne = "queen";
var cardTwo = "queen";
var carThree = "king";
var cardFour = "king";

console.log("User flipped" + " " +cardOne);
console.log("User fliped" + " " +carThree);*/

var cards=[ 
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
	
];
var scor = 1;
var cardsInplay=[];

	var checkFormatch = function()
	{
		if (cardsInplay[0] === cardsInplay[1])
		 	{
      		alert("You found a match!");
      		document.getElementById('score').innerHTML = "Score: " + scor;
  			} 
  		else 
  			{
      		alert("Sorry, try again.");
  			}
	};

	var flipCard = function()
	{

		var cardId= this.getAttribute('data_id');
		this.setAttribute('src',cards[cardId].cardImage);
		if(cardsInplay.length===2)
		{
			checkFormatch();
		}
		console.log("User flipped" + " " +cards[cardId].rank);
		cardsInplay.push(cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
	};
	
	
	var createBoard = function(){

		for(var i=0; i<cards.length; i++){
			var cardElement = document.createElement('img');
			cardElement.setAttribute('src','images/back.png');
			cardElement.setAttribute('data_id', i);
			cardElement.addEventListener('click',flipCard);
			document.getElementById('game-board').appendChild(cardElement);
		}
	};

	createBoard();
	
	var refresh = function(){
		window.location.reload();
		//document.getElementById('game-board').reset();
	};

	var resetButton=document.getElementById('btn').addEventListener('click',refresh);
	resetButton.onclick= reloadPage;

