
//Make a calculator, a single function program to which you will pass two numbers,
//and will display by console its sum, subtraction, multiplication and division.
//The results should be shown only with 3 decimals at most (if exist...)
//and contemplate that if, the user enters anything other thing than numbers,
//it should show an error

//Hola Alejandro para empezar el ejercicio lo primero que hago es crear
//un objeto mediante 'contructor notation' y lo llamo 'Calculator'
//introduzco propiedades que serán os números para operar
//incluyo nuevos métodos, uno para cada tipo de operación selecionable por el usuario
//mi intención es que el usuario intriduzca dos números enteros


function Calculator(firstOperator, secondOperator, operator, sum, rest, multiply, divide, squareRoot, thirdOperator, fourthOperator) {

this.firstOperator = firstOperator;
this.secondOperator = secondOperator;
this.sum = function() {
		return " "+ this.firstOperator + " + " + this.secondOperator + " = " + (this.firstOperator + this.secondOperator);
		}
this.rest = function(){
	return " "+ this.firstOperator + " - " + this.secondOperator + " = " + (this.firstOperator-this.secondOperator);
		}
this.multiply = function () {
	return " "+ this.firstOperator + " * " + this.secondOperator + " = " + (this.firstOperator*this.secondOperator);
		}
this.divide = function() {
	if (this.secondOperator === 0) {console.log("Sorry, zero cannot be the divisor number");
		}		
	else { return " "+ this.firstOperator + " / " + this.secondOperator + " = " + (this.firstOperator/this.secondOperator).toFixed(3);
		}
	}
this.squareRoot = function()  {	
	return " "+ this.firstOperator + " Square Root = " + Math.sqrt(this.firstOperator).toFixed(3);
	}
this.operator = function () {
	console.log(userChoice)
}
//Aquí añado dos posibles operadores nuevos que en el futuro puede introducir el usuario
this.thirdOperator = thirdOperator;
this.fourthOperator =fourthOperator;
};
//pido al usuario que introduzca un número entero y lo defino como el primer operador
var firstOperator1= parseInt(prompt("Add an integer number"));
//si el usuario no introduce un número saldrá un mensaje de error
if (isNaN(firstOperator1)){
		alert("you are operating with non a number")
		var error = document.getElementById("userError");
		var msgError = "<h3> ¡¡¡ERROR!!! 'Sometinhg was wrong with your choice: " + firstOperator1 + "</h3>";
		error.innerHTML = msgError;
			}
	else { console.log('you are choosed the number ' + firstOperator1)};
//pido al usuario que introduzca un número entero y lo defino como el segundo operador
var secondOperator1= parseInt(prompt("Add another integer number, please repeat"));
//si el usuario no introduce un número saldrá un mensaje de error en forma de ventana
// y en la página web final
if (isNaN(secondOperator1)){
		alert("you are operating with non a number");
	var error = document.getElementById("userError");
	var msgError = "<h3> ¡¡¡ERROR!!! 'Sometinhg was wrong with your choice: " + secondOperator1 + "</h3>";
	error.innerHTML = msgError;
	}
	else {
	var numbers = document.getElementById("userNumbers");
	var msg0 = "<h3> Your first couple of numbers is: ¡" + firstOperator1 + " and "+ secondOperator1 + "</h3>";
	numbers.innerHTML = msg0;
};
//ahora creo un nuevo objeto 'calculator1'basado en el objeto anterior 'Calculator'
//y le añado como valores las variables anteriores que introduce el usuario
var calculator1 = new Calculator(firstOperator1, secondOperator1);
var list = calculator1.firstOperator;
//compruebo por consola que está OK y que tiene las propiedades y métodos que debe tener:
console.log(list);
var namesCalculator1 = Object.getOwnPropertyNames(calculator1);
console.log(namesCalculator1);
//creo un Array con todos las operaciones que el usario va a realizar con sus operadores
var results1 = [calculator1.sum(firstOperator1, secondOperator1), calculator1.rest(firstOperator1, secondOperator1), calculator1.multiply(firstOperator1, secondOperator1), calculator1.divide(firstOperator1, secondOperator1), calculator1.squareRoot(firstOperator1, secondOperator1)];
//y le digo a la consola que los imprima, esta será la solución a la priemra pareja de números
console.log(results1);
//le pregunto si quiere hacer otro cálculo
var userChoice= prompt("Do you want to do another calculus? Yes or No").toUpperCase();
// Imprimo su elección en la página web
	var times = document.getElementById("userElection");
	var msg = "<h3> You choosed: ¡¡¡" + userChoice + "!!! 'I want to do two calculus.' </h3>";
	times.innerHTML = msg;
// Con la función switch decido lo que pasa si hacemos YES o NO a la prpuesta de continuar operando
	switch (userChoice) {
	case "YES":
	var firstOperator2= parseInt(prompt("Add an integer number"));
	if (isNaN(firstOperator2)){
//si el usuario no introduce un número saldrá un mensaje de error en forma de ventana
// y en la página web final
		alert("you are operating with non a number, please repeat");
		var error = document.getElementById("userError");
	var msgError = "<h3> ¡¡¡ERROR!!! 'Sometinhg was wrong with your choice: " + firstOperator2 + "</h3>";
	error.innerHTML = msgError;
		}
	else { console.log('you are choosed the number ' + firstOperator2);
	var secondOperator2= parseInt(prompt("Add another integer number"));
	var calculator2 = new Calculator(firstOperator2, secondOperator2)
		};
	var results2 = [calculator2.sum(firstOperator2, secondOperator2), calculator2.rest(firstOperator2, secondOperator2), calculator2.multiply(firstOperator2, secondOperator2), calculator2.divide(firstOperator2, secondOperator2), calculator2.squareRoot(firstOperator2, secondOperator2)];
	if (isNaN(secondOperator2)){
//si el usuario no introduce un número saldrá un mensaje de error en forma de ventana
// y en la página web final
		alert("you are operating with non a number");
		var error = document.getElementById("userError");
	var msgError = "<h3> ¡¡¡ERROR!!! 'Sometinhg was wrong with your choice: " + secondOperator2 + "</h3>";
	error.innerHTML = msgError;
		}
	else {
	var numbers2 = document.getElementById("userNumbers2");
	var msg00 = "<h3> Your second couple of numbers is: ¡" + firstOperator2 + " and "+ secondOperator2 + "</h3>";
	numbers2.innerHTML = msg00};
	var results1Results2 = results1.concat(results2);
// muestro por consola la solcuión al ejercicio solicitado
	console.log(results1Results2);

/* Con esta funcion de abajo he querido hacer una página web que muestre
el resultado*/
	var solution = document.getElementById("results");
	var msg1 = "<h1> The solution is: " + results1Results2 + "</h2>";
	solution.innerHTML = msg1;
	break;
	case "NO":
//si el usuario dice que no desea hacer otro calculo le mostramos su elecciñon en la web
// y le mostramos la solcuión
	var msg = "<h3> You choosed: ¡¡¡" + userChoice + "!!! 'I want to do a single calculus.' </h3>";
	times.innerHTML = msg;
	console.log("OK, we are going to stop here");
	var solution = document.getElementById("results");
	var msg2 = "<h1> The solution is: " + results1 + "</h1>";
	solution.innerHTML = msg2;
	break;
	default:
	console.log ("We finish");
// aviso por consola que la operación se ha acabado
};






