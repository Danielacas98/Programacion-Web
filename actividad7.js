//Desarrollar ejercicios de variables 1, 2 y 3
//Variables 1:
let miNombre= "Daniela"; // se crea variable donde se inicializa con una cadena de texto
let miEdad= 25; // se crea variable donde se inicializa con un numero

//Variables 2:
miNombre = 'Dany';// se le da un nuevo valor a la variable ya existente

//Variables 3:
let myName = 'Default'; // se cambio de const a let para poder reasignar nuevo valor, lo cual no es permitido con const
myName = 'Chris';

let myAge = 42; // se quitaron las comillas, ya que el numero se habia inicializado como cadena de texto 

//Desarrollar ejercicios Matematicas 1, 2 y 3

//Matematicas 1:
// Se crean las cuatro variables con numeros:
let var1= 6;
let var2= 9;
let var3= 20;
let var4= 5;

// Se suman las dos primeras variables y se almacena el resultado en otra variable
let sumaResult= var1 + var2;

// Se resta la cuarta variable de la tercera y se almacena el resultado en otra variable:
let substracrResult= var4 - var3;

// Se multiplica los resultados de las dos operaciones anteriores
let finalResult= sumaResult*substracrResult;

// Verificamos si el resultado es numero par:
let evenOddResult = finalResult%2===0;


// Matematicas 2:

// Cálculos originales
let result = 5 * 3 / 2 + 3;
let result2 = 4 + 6 / 2;

// Corrección de los cálculos originales para obtener el resultado deseado
result = (result * result2).toFixed(2); // Multiplicamos result y result2, luego formateamos el resultado con 2 decimales
let finalResult1 = parseFloat(result); // Convertimos el resultado formateado en un número

// Verificar el tipo de dato de finalResult
let finalNumber = typeof finalResult === 'number' ? finalResult : parseFloat(finalResult);


// Matematicas 3:

// Declaraciones y variables dadas
const eleWeight = 1000;
const mouseWeight = 2;

const ostrichHeight = 2;
const duckHeight = 0.3;

const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

// Pruebas y almacenamiento de resultados
const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1.toLowerCase() === pwd2.toLowerCase(); // Comparación de contraseñas sin distinguir mayúsculas y minúsculas


//Desarrollar ejercicios con Cadenas 1, 2 y 3:

//Cadenas 1:

const quoteStart = 'Don\'t judge each day by the harvest you reap ';
const quoteEnd = 'but by the seeds that you plant.'; // agregamos la otra mitad
const finalQuote = quoteStart + quoteEnd; //concatenamos las dos cadenas formando la cita completa y almacenamos. 

//Cadenas 2:
const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Obtenemos la longitud de la cita
const quoteLength = quote.length;

// Buscamos la posición del índice donde aparece substring en quote
const index = quote.indexOf(substring);

// Recortamos la cita original
const revisedQuote = quote.slice(0, index) + 'No me gustan los huevos verdes y el jamón' + quote.slice(index + substring.length);

//Cadenas 3:
const quote1 = 'I dO nOT lIke gREen eGgS anD HAM';

// Corregimos la cita con mayúscula inicial en la oración
const fixedQuote = quote.toLowerCase().replace(/(^|\.\s+)([a-z])/g, (match) => match.toUpperCase());

// Reemplazamos "huevos verdes con jamón" con otro alimento que no nos gusta
const replacedQuote = fixedQuote.replace('green eggs and ham', 'broccoli');

// Agregamos un punto al final de la cita
const finalQuote1 = replacedQuote.endsWith('.') ? replacedQuote : replacedQuote + '.';
