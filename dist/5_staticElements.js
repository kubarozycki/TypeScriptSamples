"use strict";
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    //metoda statyczna
    MathOperations.add = function (x, y) {
        return x + y;
    };
    MathOperations.divide = function (x, y) {
        return x / y;
    };
    return MathOperations;
}());
//nie musimy tworzyć instancji klasy,aby wywołać jej metode
console.log(MathOperations.add(4, 5));
console.log(MathOperations.divide(10, 2));
//Zadanie stwórz klase MathOperations mającą metody:
//RectangleCircuit, CircleCircuit
