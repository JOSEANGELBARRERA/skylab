


//creo los marcadores de los puntos del usuario y del ordenador
var scoreUser = 0;
var scoreComputer = 0;

//Creo un loop con las veces que se puede jugar
//las veces que se puede jugar depende del marcador
//en el momento que el marcado llegue a 3 en cualquiera de los 
//jugadores el juego se detiene.
//El problema es que no sabemos cuantas veces son necesarias para que 
//uno de los dos jugadores alcance tres unidades en su marcador
//por lo tanto le pedimos que haga una acción cada vez que sea necesario mientras que
// la puntuación del usuario o la del ordenador sea menor que tres. 
//Con esta idea, si la puntuación de uno de los dos lega a tres, el loop deberia pararse.

//PREGUNTA************************
// El problema es que la soluciñon que me da el programa es que una vez que los dos deben llegar a tres
//una vez que los dos lelgan a tres el loop se detiene
//con lo que muhcas veces uno de los dos supera la cofra de tres
//¿Qué estaoy haciendo mal? ¿Cómo puedo conseguir que cuando uno de los dos legue a tres el juego se detenga?

while (scoreUser <3 || scoreComputer <3) {
//Doy la opción al usuario a escoger
var userChoice = prompt("Choose between ROCK, PAPER, SCISSORS");

//convierto a minúscula la eleccion del usuario para que no existan
//problemas con la introducción de los texots
userChoice.toLowerCase();

//Uso el método random para que el ordenador escoja un núnero aleatoriamente del uno al nueve
//y según salga una u otra cifra la asocio con papel, piedra o tijera


	var computerChoice = Math.floor(Math.random()*10);
	if (computerChoice <= 3){
	computerChoice = "rock";
	}
	else if (computerChoice <= 6) {
	computerChoice = "paper";
	}
	else if(computerChoice <= 9) {
	computerChoice = "scissors";
	}
	else {
	computerChoice = "scissors";
	}

//pido que me muestren las eleciones del usuario y del ordenador
console.log("The user choosed " + userChoice + " and computer choosed " + computerChoice + ".");

//ahora le indico si el usuario y el ordenador escogen la misma opción
//el ordenadro escoge de nuevo

		while (userChoice === computerChoice){
		console.log("Computer and User have the same election " + computerChoice +". Computer chooses again.");
		computerChoice = Math.floor(Math.random()*10);

			if (computerChoice <= 3){
			computerChoice = "rock";
			}
			else if (computerChoice <= 6) {
			computerChoice = "paper";
			}
			else if(computerChoice <= 9) {
			computerChoice = "scissors";
			}
			else {
			computerChoice = "scissors";
			}
			console.log("The user choosed " + userChoice + " and computer choosed " + computerChoice + ".");
		}


//pero si el usuario y el ordenadro escogen distitno pasará lo siguiente


	if (userChoice === "rock" && computerChoice === "scissors"){
	console.log("Rock punch the scissors. User wwins.");
	scoreUser = scoreUser + 1;
		}

	else if (userChoice === "rock" && computerChoice === "paper"){
		console.log("Paper wraps the rock. Computer wwins.");
		scoreComputer = scoreComputer + 1;
		}

	else if (userChoice === "paper" && computerChoice === "scissors"){
		console.log("Scissors cut the paper. Computer wwins.");
		scoreComputer = scoreComputer + 1;
		}

	else if (userChoice === "paper" && computerChoice === "rock"){
		console.log("Paper wraps the rock. User wwins.");
			scoreUser = scoreUser + 1;
		}

	else if (userChoice === "scissors" && computerChoice === "paper"){
		console.log("Paper wraps the rock. User wwins.");
			scoreUser = scoreUser + 1;
		}

	else if (userChoice === "scissors" && computerChoice === "rock"){
		console.log("Rock puch the scissors. Computer wwins.");
		score = score + 1;
		}
}

//una vez el juego se acaba se muestran los resultados


console.log("The result is: User = " + scoreUser + ". Computer = " + scoreComputer);

//y según el resultado mostramos al ganador

if (scoreUser < scoreComputer) {
	var winner1 = "Computer wins."
	console.log("Computer wins.");
}
else{
	var winner1 ="User Wins.";
	console.log("User Wins.");
}
	var winners = document.getElementById("result");
	var result = "<h3> The result is: User = " + scoreUser + ". Computer = " + scoreComputer + "</h3>";
	winners.innerHTML = result;

	var win = document.getElementById("winer");
	var winner = "<h3> The winer was = " + winner1 + "</h3>";
	win.innerHTML = winner;
