
function calculator(firstOperator, secondOperator, operator, sum, rest, multiply, divide, squareRoot, thirdOperator, fourthOperator) {

this.firstOperator = firstOperator;
this.secondOperator = secondOperator;
this.sum = function() {
	return this.firstOperator + " + " + this.secondOperator + " = " + (this.firstOperator + this.secondOperator);
		}
this.rest = function(){
	return this.firstOperator + " - " + this.secondOperator + " = " + (this.firstOperator - this.secondOperator);
		}
this.multiply = function () {
	return this.firstOperator + " * " + this.secondOperator + " = " + (this.firstOperator * this.secondOperator);
		}
this.divide = function() {
	if (this.secondOperator === 0) { console.log("Sorry, zero cannot be the divisor number");
		}		
	else { return this.firstOperator + " / " + this.secondOperator + " = " + (this.firstOperator / this.secondOperator).toFixed(3);
		}
	}

this.squareRoot = function()  {	
	return this.firstOperator + " Square Root = " + Math.sqrt(this.firstOperator).toFixed(3);
	}
this.operator = function () {
	console.log(userChoice)
}
this.thirdOperator = thirdOperator;
this.fourthOperator =fourthOperator;
};

var calculator1 = new calculator(firstOperator, secondOperator) ;
var firstOperator= parseInt(prompt("Add an integer number"));
var secondOperator= parseInt(prompt("Add another integer number"));

var result = calculator1.sum(firstOperator, secondOperator);
var results = [calculator1.sum(firstOperator, secondOperator), calculator1.rest(firstOperator, secondOperator), calculator1.multiply(firstOperator, secondOperator), calculator1.divide(firstOperator, secondOperator), calculator1.squareRoot(firstOperator, secondOperator)];
console.log(result);
console.log(results);

var userChoice= prompt("Do you want to do another calculus? Yes or No").toUpperCase();
console.log("you choosed " + userChoice + " I want to do another calculus");

switch (userChoice) {
	case "YES":
	console.log("OK, let's go");
	var calculator2 = new calculator(firstOperator, secondOperator) ;
var firstOperator= parseInt(prompt("Add an integer number"));
var secondOperator= parseInt(prompt("Add another integer number"));


var results2 = [calculator2.sum(firstOperator, secondOperator), calculator1.rest(firstOperator, secondOperator), calculator1.multiply(firstOperator, secondOperator), calculator1.divide(firstOperator, secondOperator), calculator1.squareRoot(firstOperator, secondOperator)];
var results2Results1 = results2.concat(results);
console.log(results2Results1);


/*Con esta funcion de abajo he querido hacer una página web que mostrara
el resultado, pero no me sale prque este código funciona en Code Academi
pero no es Chorme que es donde tienen que correr las páginas web.
El problema es que no sé donde está el problema...:)
var solution = document.getElementById("results");
var msg = "<h1> 'Solution: '" + results2 + "</h2>";
solution.innerHTML = msg + console.log(results2);*/




	break;
	case "No":
	console.log("OK, we are going to stop here");
	break;
	default:
	console.log ("We finish");
}







