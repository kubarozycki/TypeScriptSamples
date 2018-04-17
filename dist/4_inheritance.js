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
var Animal = (function () {
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
var Cat = (function (_super) {
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
var Person = (function () {
    function Person(name, surname, address) {
        this.Name = name;
        this.Surname = surname;
        this.Address = address;
    }
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, phoneNumber, address) {
        var _this = _super.call(this, name, surname) || this;
        _this.Phone = phoneNumber;
        return _this;
    }
    Employee.prototype.callCustomer = function (customerToCall) {
        console.log("dzwonie do:" + customerToCall.PhoneNumber);
    };
    return Employee;
}(Person));
var Customer = (function (_super) {
    __extends(Customer, _super);
    function Customer(name, surname, phoneNumber, address) {
        var _this = _super.call(this, name, surname) || this;
        _this.PhoneNumber = phoneNumber;
        _this.ShoppingCard = [];
        _this.ShoppingCard.push(new Product("taczki", "taczki opis"));
        _this.ShoppingCard.push(new Product("gruszki", "owoc"));
        return _this;
    }
    Customer.prototype.printProducts = function () {
        for (var i = 0; i < this.ShoppingCard.length; i++) {
            console.log(this.ShoppingCard[i]);
        }
    };
    return Customer;
}(Person));
var Product = (function () {
    function Product(name, description) {
        this.Name = name;
        this.Description = name;
    }
    return Product;
}());
var Employee1 = new Employee("empl1", "surname 3", "adasd", "asd");
Employee1.callCustomer(new Customer("asdasd", "adsasd", "asdasd", "asdasd"));
var Customer1 = new Customer("name 1", "surname 2", "ads", "ads");
Customer1.printProducts();
