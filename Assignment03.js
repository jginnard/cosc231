var number = Math.round(Math.random()*100);
	console.log(number);
var guess = prompt("Enter guess between 1 and 100.", "");
while(number != guess){	
	if(guess=="")
		break;
	if(guess>number)
		var guess = prompt(guess + " is too high. Guess again.", "");
	if(guess<number)
		var guess = prompt(guess + " is too low. Guess again.", "");
	if(guess==number)
		window.alert("Congratulations!!! " + guess + " is the number");		
		}	
		
