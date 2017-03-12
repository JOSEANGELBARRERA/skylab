//a) Do a simple function for show the names of the properties.

//No sé como se hace para ver el nombre de las propiedades, pero creo que sí sé ver el valor de las mismas:

function PropertieNames(name, clas, id) {
	// me es imposible utilizar class, si lo hago el código hace cosas muy raras, por eso empeo class
	this.name = name; 
	this.clas = clas;
	this.id = id;
}

var propertie = new PropertieNames('name', 'class', 'id');
var resultado = function (){
	return propertie.clas;
}


// para que el console log pueda ser console.log(something, somethingMore, somethingMoreAndMore) en vez de fucniones tengo quehacer variables, de otro modo el console.log deberia ser console.log(something(), somethingMore(), somethingMoreAndMore());

var something = propertie.name + ',';
var somethingMore =  propertie.clas + ',';
var somethingMoreAndMore =  propertie.id;
console.log(something, somethingMore, somethingMoreAndMore);
//name, class, id

// he visto este metofdo para conseguir los nombre de las propuiedades de un objeto :))
//pero no he conseguido separar 

var resultado = Object.getOwnPropertyNames(propertie);
var somethingArray = resultado.slice(0,1) 
var something = somethingArray.toString() + ',';
var somethingMoreArray = resultado.slice(1,2)
var somethingMore = somethingMoreArray.toString() + ',';
var somethingMoreAndMoreArray = resultado.slice(2,3)
var somethingMoreAndMore = somethingMoreAndMoreArray.toString();
console.log(something, somethingMore, somethingMoreAndMore);

// no tengo muy claro que esto esté bien porque si creo un nuevo objeto basado en 'PropertieNames' y lo llamo 'yoMismo' y a la propiedad class le doy el valor 'PERSONA', el método para recuperar el valor de la propiedad me devuelve el valor del objeto contrstructor.

var yoMismo = new PropertieNames('JOSE', 'PERSONA', '0978');
var something = yoMismo.name + ',';
var somethingMore =  yoMismo.clas + ',';
var somethingMoreAndMore =  yoMismo.id;

console.log(something, somethingMore, somethingMoreAndMore);

// creo que tras partirme la espalda ya sehacerlo :)))





//name, class, id

//b) Now, do a simple function for show the content of those properties.

function Books(title, chapter, section) {
	this.title = title; 
	this.chapter = chapter;
	this.section = section;
};

var libro = new Books('Tony', 'VII', 01);
var somethingThatShowsThings = libro.title + ',' + libro.chapter + ',' + libro.section;


console.log(somethingThatShowsThings) //Tony, VII, 01

//c) So, we can change a property value? Change the class to "XI".
libro['chapter'] = 'IX'
console.log(somethingThatShowsThings)
libro.chapter = 'IX'
console.log(somethingThatShowsThings)



