/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de 
su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/

/*Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/
function calcularFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calcularFactorial(num - 1);
  }
}
// Ejemplo de uso
let num = 5;
let resultado = calcularFactorial(num);
console.log(`El factorial de ${num} es ${resultado}`);



/*Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/
function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);

function tablaMultiplicar(number) {
  let multiplicador = 1;
  while (number > 0 && multiplicador <= 12) {
    alert(`${number}x${multiplicador}`)
    multiplicador++;
  }
}



//RESOLUCION DE PROBLEMAS SOBRE LISTA 

//Crea una función que muestre en la consola todos los elementos de 
//la lista "lenguagesDeProgramacion.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

//Crea una función que muestre en la consola todos los elementos de la 
//lista lenguagesDeProgramacion de manera inversa.
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();

mostrarLenguagesSeparadamente();
//Crea una función que calcule el promedio de los elementos en una 
//lista de números.
let listaNumeros = [2, 3, 4];
function promedioNumeros(lista) {
  let suma = 0;
  for (i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  let prom = suma / lista.length;
  return prom;
}
promedioNumeros(listaNumeros);

//Crea una función que muestre en la consola el número más grande 
//y el número más pequeño en una lista.
function mostrarMayorYMenor(lista) {
  if (lista.length === 0) {
    console.log("La lista está vacía.");
    return;
  }

  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log("El número más grande es: " + mayor);
  console.log("El número más pequeño es: " + menor);
}
mostrarMayorYMenor([3, 5, 1, 8, 2, 9, 4]);

//Crea una función que devuelva la suma de todos los 
//elementos en una lista.
let listaParaSumar = [2, 3, 4];
function sumarLista(lista) {
  let suma = 0;
  for (i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;

}
sumarLista(listaParaSumar);

/*Crea una función que devuelva la posición en la lista donde se 
encuentra un elemento pasado como parámetro, o -1 si no existe en la 
lista.*/

function devovlerPosicion(lista, numero) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == numero) {
      console.log(`El ${numero} se encuentra la posicion ${lista.indexOf(i) + 1}`);
      return;
    }
  }
  console.log(`El ${numero} no se encunetra en la [${lista}]`);

}

//Otra manera
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

//Crea una función que reciba dos listas de números del mismo tamaño y 
//devuelva una nueva lista con la suma de los elementos uno a uno.

function sumaLista(listaA, listaB) {
  let lictaC = [];
  for (let i = 0; i < listaA.length && i < listaB.length; i++) {
    lictaC.push(listaA[i] + listaB[i]);

  }
  return lictaC;
}

let lista1 = [1, 2, 3];
let lista2 = [4, 5, 6];
console.log(sumaLista(lista1, lista2));


let list = [1, 2, 3, 4];
devovlerPosicion(list, 4);

//Crea una función que reciba una lista de números y 
//devuelva una nueva lista con el cuadrado de cada número.

function recibirLista(rLis) {
  let listaNumerosCuadrado = [];
  for (let i = 0; i < rLis.length; i++) {
    listaNumerosCuadrado.push(Math.pow(rLis[i],2));
  }
  return listaNumerosCuadrado;
  
}

let rlis1= [2,3,4];
console.log(recibirLista(rlis1));