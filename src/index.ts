// type Producto = {
//     id : number;
//     nombre : string;
//     precio : number;
// };


//función para determinar si un número es par:
function numIsEven(num: number): boolean {
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
};

// función para determinar si un numero es positivo, negativo o cero usando if y switch.

function determineNumberSign(num: number): void {
    if(num > 0){
        console.log("positivo");

    }else if(num < 0){
        console.log("negativo");

    }else{
        console.log("cero");
    }
}

const num: number = 0;

const validate = num === 0 ? "cero" : num > 0 ? "positivo" : "negativo"

// switch (validate) {
//     case "cero":
//         console.log("El numero es cero");
//         break;
//     case "positivo":
//         console.log("El numero es positivo");
//         break;
//     case "negativo":
//         console.log("El numero es negativo");
//         break;
// }

//función que recorre un array de nombres y los imprime en consola:

function printNames(names: string[]): void {
    names.forEach(name => console.log(name)
    );
}

const names: string[] = ["Jose", "camilo", "ana"];

//printNames(names);
//crea un array de numeros y calcula la suma de todos sus elementos
const numbers: number[] = [5,6,4,7,88,1];

const suma: number = numbers.reduce((acum, val)=> acum + val);

//implementa una funcion que reciba un array de strings y retorne la concatenacion de todos los elementos

const concatenar = function (array: string[]): string{
    return array.reduce((acum, val)=> acum + val);
}
 
//Define un array de objetos User con propiedades id y name, e imprime el nombre de cada usuario en consola.

type User = {
    id: number,
    name: string;
}

const users: User[] = [
    { id: 1, name: "Juan" },
    { id: 2, name: "María" },
    { id: 3, name: "Pedro" }
];

//users.forEach(user => console.log(user.name));

//Implementa una función que reciba un array de números y retorne el mayor valor.

function highestValue(array: number[]): number{
    const maxNumber: number = Math.max(...array);
    return maxNumber;
}
//console.log(highestValue(numbers));

//Define un objeto Car con propiedades marca, modelo y año. Crea una instancia de Car e imprime sus propiedades en consola.
interface Car {
    marca: string;
    modelo: string;
    año: number;
}

const newCar: Car = {
    marca: "Toyota",
    modelo: "TXL",
    año: 2021
};
//console.log(`"marca:"${newCar.marca}"modelo:"${newCar.modelo}"año:"${newCar.año}`);

//Con base en el objeto Car, crea una clase que posea un metodo estatico que reciba un objeto Car y retorne un string con la información del carro.

class CarInfo{
    
    static showInfo(car: Car): string {
        return `"marca:"${car.marca}"modelo:"${car.modelo}"año:"${car.año}`;
    }
}

const carInfo = CarInfo.showInfo(newCar);
//console.log(carInfo);


//Implementa una función que reciba un objeto Car y retorne un nuevo objeto con las mismas propiedades, pero con el año incrementado en 1.

function newCarObject(car: Car): {} {
    const carReturned: Car = {
        marca: car.marca,
        modelo: car.modelo,
        año: car.año + 1
    }
    return carReturned;
}

//console.log(newCarObject(newCar));

// Implementa una función que reciba un array de números y retorne el mayor valor.

function maxValue(array: number[]): number {
    return Math.max(...array);
}
//console.log(maxValue(numbers));


//Implementa una funcion que reciba rest parameters y retorne error si almenos uno de los parametros pasados no es del tipo de los dos primeros parametros. Asegurarse que los dos primeros parametros sean del mismo tipo.

function checkTypes(...args: any[]): void {
    if (args.length < 2) {
      throw new Error("Se requieren al menos dos parámetros.");
    }
  
    const type1 = typeof args[0];
    const type2 = typeof args[1];
  
    if (type1 !== type2) {
      throw new Error("Los dos primeros parámetros deben ser del mismo tipo.");
    }
  
    for (let i = 2; i < args.length; i++) {
      if (typeof args[i] !== type1) {
        throw new Error(`El parámetro en la posición ${i} no es del type ${type1}.`);
      }
    }
  
    console.log("Todos los parámetros son del mismo tipo.");
  }
  
//   try {
//      checkTypes(1, 2, 3, 4); // Todos los parámetros son del mismo tipo.
//   } catch (error) {
//     console.log(error)
//   }

//Define una funcion que reciba una matriz cuadrada de numeros como parametros y devuelva la matriz girada 90 grados en sentido horario. (2 Riwi points)

const matriz: number[][] = [
    [1, 3, 5, 6],
    [4, 6, 1, 4],
    [7, 8, 9, 5],
    [1, 4, 2, 4],
  ];
  
function matrizRotated(matriz: number[][]): number[][]{

    let nuevaMatriz: number[][]= [] ;

    for (let i = 0; i < matriz.length ; i++ ){
      nuevaMatriz[i] = [];
      for (let j = 0; j < matriz.length; j++) {
  
      nuevaMatriz[i][j] = matriz[matriz.length -j -1][i];
      }
    }
    return nuevaMatriz;
}

  console.log(matrizRotated(matriz));
  

