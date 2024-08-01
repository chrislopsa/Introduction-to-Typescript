"use strict";
function numIsEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
;
function determineNumberSign(num) {
    if (num > 0) {
        console.log("positivo");
    }
    else if (num < 0) {
        console.log("negativo");
    }
    else {
        console.log("cero");
    }
}
const num = 0;
const validate = num === 0 ? "cero" : num > 0 ? "positivo" : "negativo";
function printNames(names) {
    names.forEach(name => console.log(name));
}
const names = ["Jose", "camilo", "ana"];
const numbers = [5, 6, 4, 7, 88, 1];
const suma = numbers.reduce((acum, val) => acum + val);
const concatenar = function (array) {
    return array.reduce((acum, val) => acum + val);
};
const users = [
    { id: 1, name: "Juan" },
    { id: 2, name: "María" },
    { id: 3, name: "Pedro" }
];
function highestValue(array) {
    const maxNumber = Math.max(...array);
    return maxNumber;
}
const newCar = {
    marca: "Toyota",
    modelo: "TXL",
    año: 2021
};
class CarInfo {
    static showInfo(car) {
        return `"marca:"${car.marca}"modelo:"${car.modelo}"año:"${car.año}`;
    }
}
const carInfo = CarInfo.showInfo(newCar);
function newCarObject(car) {
    const carReturned = {
        marca: car.marca,
        modelo: car.modelo,
        año: car.año + 1
    };
    return carReturned;
}
function maxValue(array) {
    return Math.max(...array);
}
function checkTypes(...args) {
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
const matriz = [
    [1, 3, 5, 6],
    [4, 6, 1, 4],
    [7, 8, 9, 5],
    [1, 4, 2, 4],
];
function matrizRotated(matriz) {
    let nuevaMatriz = [];
    for (let i = 0; i < matriz.length; i++) {
        nuevaMatriz[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            nuevaMatriz[i][j] = matriz[matriz.length - j - 1][i];
        }
    }
    return nuevaMatriz;
}
console.log(matrizRotated(matriz));
//# sourceMappingURL=index.js.map