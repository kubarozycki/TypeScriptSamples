"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        //private property - można zmienić jej wartość tylko z metod klasy
        this.hasTail = true;
        this.Name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("making default animal sound");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(catName, age) {
        var _this = _super.call(this, catName) || this;
        _this.Age = age; //z klasy pochodnej mamy dostęp do własciwości klasy bazowej (w tym wypadku protected)
        _super.prototype.makeSound.call(_this);
        return _this;
    }
    return Cat;
}(Animal));
//Stwórz klasy Person, Employee, Customer
//Person - powinna zawierac prywatne wlasciwosci imie oraz nazwisko oraz opcjonalną właściwość address 
//(może być edytowana tylko z metod klasy Person oraz pochodnych)
//Employee - powinna zawierać własciwość PhoneNumber oraz metoda CallCustomer (przyjmującą argument typu Customer )
//Customer - powinna zawierać właściwości PhoneNumber,ShoppingCard (lista wybranych produktów) oraz metode PrintProducts (wypisującą wszystkie produkty)
