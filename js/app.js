
var j = 'declarar la variable global';
var j = 'redeclarar la variable global';

let l = 'declarar variable local';
l = 'sobreescribir variable local';

let x = 1;

// tipo de dato número
let y = 4 + 5; // 9

// alert no espera que el usuario responda por lo tanto no tiene dato
let a = alert('Hola, soy javascript'); // undefined (no hay dato ni tipo de dato)

// string si el usuario ingresa texto y luego clickea aceptar
// null si el usuario clickea cancelar, haya o no haya texto
let b = prompt('Ingrese un texto'); // string | null (cadena de caracteres)

// si el usuario clickea aceptar es true, caso contrario es false
let c = confirm('Va a subir el código a Github ?'); // boolean (true o false)

// todo lo que va entre comillas es un string
// no importa qué tipo de comillas
let comillaSimple = 'texto entre comillas simples sdkfjshdkfsjdf';

let comillasDobles = "texto entre comillas dobles";

let backticks = `
    texto entre comillas inclinadas
    en multiples líneas
    sin que el código se rompa
`;

let nombre = prompt('Ingresa tu nombre');
let apellido = prompt('Ingresa tu apellido');
let nombreCompleto = nombre + ' ' + apellido;

let interpolarVariables = `Hola, me llamo ${nombreCompleto}`;

alert(interpolarVariables);
