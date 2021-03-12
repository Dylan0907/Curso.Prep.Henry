// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (propiedad in objeto){
    matriz.push([propiedad,objeto[propiedad]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí:
  var letras=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var pares = {}
  for (i=0; i<letras.length; i++){
    var contador = 0;
    for (j=0; j<string.length; j++){
      if (letras[i]===string[j]) {
        contador +=1;
      }
    }
    if (contador>0){
      pares[letras[i]]= contador;
    }
  }
  return pares;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí:
  var nuevaStringMayu="";
  var nuevaStringMinus="";
  for (i=0;i<s.length;i++){
    if (s[i] === s.[i].toUpperCase()){
      nuevaStringMayu += s[i];
    } else {
      nuevaStringMinus += s[i];
    }
  }
  return nuevaStringMayu + nuevaStringMinus;
}

function inversion (palabra){
  var nuevaPalabra = "";
  for (i=palabra.length-1; i>=0 ; i--){
    nuevaPalabra += palabra[i];
  }
  return nuevaPalabra;
}
function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  var lista = str.split(" ");
  var listaInvertida = lista.map (inversion);
  var espejo=listaInvertida[0];
  for (i=1; i<listaInvertida.length; i++){
    espejo += " " + listaInvertida[i];
  }
  return espejo;
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
  var string = numero.toFixed(0).toString();
  var digitos =[];
  var digitosInv = [];
  for (i=0;i<string.length;i++){
    digitos.push(string[i]);
    digitosInv.unshift(string[i]);
  }
  for (i=0; i<string.length; i++){
    if (digitos[i]!== digitosInv[i]){
      return "No es capicua";
    }
  }
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí:
  var lista = [];
  for (i=0; i<cadena.length; i++){
    lista.push(cadena[i]);
  }
  var nuevaCadena="";
  for (j=0;j<lista.length; j++){
    if (lista[j]!=='a' && lista[j]!== 'b' && lista[j]!=='c'){
      nuevaCadena += lista[j];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí:
  arr.sort (function(a,b){return a.length - b.length})
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí:
  var interseccion=[];
  for (i=0; i<arreglo1.length; i++){
    for (j=0; j<arreglo2.length; j++){
      if (arreglo1[i]===arreglo2[j]){
        interseccion.push(arreglo1[i]);
      }
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
