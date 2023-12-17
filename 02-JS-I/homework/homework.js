// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = "1";

// Crea una variable booleana:
const nuevoBool = "true";

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - "5" === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * "4" === 40 ;

// Resuelve el siguiefatal: not a git repository (or any of the parent directories): .gitnte problema matemático:
const nuevoModulo = 21 % 5 === "1";


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return str;
  
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;  
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x - y; 
  
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
 }

 function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var resultado = x / y;
  return resultado;
}

// Ejemplo de uso:
var resultadoDivision = divide(4, 1);
console.log(resultadoDivision);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  return x === y;
}

// Ejemplo de uso:
var resultado = sonIguales(5, 5);
console.log(resultado);  // Esto imprimirá true


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  return str1.length === str2.length;
}

// Ejemplo de uso:
var resultado = tienenMismaLongitud("hola", "adios");
console.log(resultado);  // Esto imprimirá false, ya que las longitudes son diferentes


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  return num < 90;
}

// Ejemplo de uso:
var resultado = menosQueNoventa(1);
console.log(resultado);  // Esto imprimirá true, ya que 1 es menor que 90


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  return num > 50;
}

// Ejemplo de uso:
var resultado = mayorQueCincuenta(1);
console.log(resultado);  // Esto imprimirá false, ya que 1 no es mayor que 50


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}

// Ejemplo de uso:
var resultado = obtenerResto(1, 2);
console.log(resultado);  // Esto imprimirá 1, ya que el resto de la división de 1 entre 2 es 1


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  return num % 2 === 0;
}

// Ejemplo de uso:
var resultado = esPar(4);
console.log(resultado);  // Esto imprimirá true, ya que 4 es un número par


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  return num % 2 === 1;
}

// Ejemplo de uso:
var resultado = esImpar(5);
console.log(resultado);  // Esto imprimirá true, ya que 5 es un número impar


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  return num * num;
}

// Ejemplo de uso:
var resultado = elevarAlCuadrado(4);
console.log(resultado);  // Esto imprimirá 16, ya que 4 elevado al cuadrado es 16


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  return Math.pow(num, 3);
}

// Ejemplo de uso:
var resultado = elevarAlCubo(3);
console.log(resultado);  // Esto imprimirá 27, ya que 3 elevado al cubo es 27


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  return Math.pow(num, exponent);
}

// Ejemplo de uso:
var resultado = elevar(2, 3);
console.log(resultado);  // Esto imprimirá 8, ya que 2 elevado a la 3 es 8


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  return Math.round(num);
}

// Ejemplo de uso:
var resultado = redondearNumero(4.6);
console.log(resultado);  // Esto imprimirá 5, ya que 4.6 se redondea al entero más cercano


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

// Ejemplo de uso:
let numero = 7.3;
let resultado = redondearHaciaArriba(numero);
console.log(resultado);  // Salida esperada: 8


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
}

function numeroRandom() {
  // Generar un número al azar entre 0 y 1 y devolverlo
  return Math.random();
}

// Ejemplo de uso:
let randomNum = numeroRandom();
console.log(randomNum);  // Salida esperada: un número decimal aleatorio entre 0 (inclusive) y 1 (exclusive)


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Tu código:
  return str + "!";
}

// Ejemplo de uso:
let cadenaOriginal = "hello world";
let cadenaConExclamacion = agregarSimboloExclamacion(cadenaOriginal);
console.log(cadenaConExclamacion);  // Salida esperada: "hello world!"


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido;
}

// Ejemplo de uso:
let nombre = "Soy";
let apellido = "Henry";
let nombreCompleto = combinarNombres(nombre, apellido);
console.log(nombreCompleto);  // Salida esperada: "Soy Henry"


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return "Hola " + nombre + "!";
}

// Ejemplo de uso:
let nombre = "Martin";
let saludo = obtenerSaludo(nombre);
console.log(saludo);  // Salida esperada: "Hola Martin!"


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el área de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}

// Ejemplo de uso:
let altura = 5;
let ancho = 10;
let area = obtenerAreaRectangulo(altura, ancho);
console.log(area);  // Salida esperada: 50



function retornarPerimetro(lado) {
  // Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  // Escribe tu código aquí
  return lado * 4;
}

// Ejemplo de uso:
let longitudLado = 6;
let perimetro = retornarPerimetro(longitudLado);
console.log(perimetro);  // Salida esperada: 24



function areaDelTriangulo(base, altura) {
  // Desarrolla una función que calcule el área de un triángulo.
  // Escribe tu código aquí
  return (base * altura) / 2;
}

// Ejemplo de uso:
let baseTriangulo = 8;
let alturaTriangulo = 5;
let areaTriangulo = areaDelTriangulo(baseTriangulo, alturaTriangulo);
console.log(areaTriangulo);  // Salida esperada: 20



function deEuroAdolar(euro) {
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Escribe un programa que reciba como parámetro un número de euros y calcule el cambio en dólares.
  // Escribe tu código aquí
  const tasaDeCambio = 1.20;
  return euro * tasaDeCambio;
}

// Ejemplo de uso:
let cantidadEuros = 50;
let cantidadDolares = deEuroAdolar(cantidadEuros);
console.log(cantidadDolares);  // Salida esperada: 60



function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  // que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, también debe devolver "Dato incorrecto".
  
  // Verificar si el parámetro es una cadena de un solo carácter
  if (typeof letra === 'string' && letra.length === 1) {
    // Convertir la letra a minúsculas para simplificar la comparación
    let letraMinuscula = letra.toLowerCase();
    
    // Verificar si la letra es una vocal
    if (['a', 'e', 'i', 'o', 'u'].includes(letraMinuscula)) {
      return "Es vocal";
    } else {
      return "Dato incorrecto";
    }
  } else {
    return "Dato incorrecto";
  }
}

// Ejemplo de uso:
let letraUsuario = "A";
let resultado = esVocal(letraUsuario);
console.log(resultado);  // Salida esperada: "Es vocal"




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
