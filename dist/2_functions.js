"use strict";
function simpleFunction() {
    console.log("i dont have to return anything");
}
simpleFunction();
function add(x, y) {
    console.log("i have to return number");
    return x + y;
}
console.log(add(4, 5)); //najpierw zostanie wywołana funkcja add, a jej wynik zostanie przekazany do console.log()
//Immediately invoked function expression - funkcja wywoływana natychmiast po inicjalizacji
(function () {
    console.log("IIFE with anymous function");
})();
//Immediately invoked function expression - funkcja wywoływana natychmiast po inicjalizacji
(function (x) {
    console.log(x);
    console.log("IIFE function expression");
})("Hello world");
//argument age jest opcjonalny
//argument is human ma domyślna wartość true
function addUser(firstName, age, isHuman) {
    if (isHuman === void 0) { isHuman = true; }
    //todo API call
}
addUser("John", 14);
addUser("Yeti", undefined);
//rest parameters - funkcja, którą można wywołać z dynamiczną ilością argumentów
function manyParams(firstParam) {
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    //jeśli nie znasz tej konstrukcji użyj konstrukcji, którą znasz np. for/while
    other.forEach(function (val) {
        console.log(val);
    });
}
// manyParams(4,"first","second");
// manyParams(4,"first","second","third");
manyParams(4, "first", "second", "third", "fourth", "asdjakjsd", "asdasdasd");
//Stwórz funkcje:
//multiply dla 3 liczb całkowitych
//printWall, przyjmująca i wypisująca 'Maluje sciane na {{kolor}}', wywoływaną natychmiast dla koloru czerwonego
//stwórz funkcję concatenationCustomNate, która przyjmie dowolną ilość wartości typu number i połączy je w jeden łańcuch znaków 
function concatenateCustom() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var val = "";
    for (var index = 0; index < params.length; index++) {
        val += params[index];
    }
    console.log(val);
}
function contatenateCustom2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(params.join(""));
}
concatenateCustom(4, 5, 5, 12, 312, 21);
contatenateCustom2(123, 12, 312, 3, 123, 12, 3);
