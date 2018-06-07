"use strict";
// Klasy znasz już z C# oraz JavaScript, będzie to tylko szybka powtórka !
// klasa jest domyślnie publiczna, jaki jest domyślny modyfikator dostępu klasy w C#? 
var Dog = /** @class */ (function () {
    //Konstruktor - metoda wywoływana inicjalizacji nowego obiekty typu 'Dog' 
    function Dog(name) {
        this.Sound = "przypisanie inline";
        this.Sound = "przypisanie konstruktor"; // do readonly można przypisać w konstrukorze
        this.Name = name;
    }
    //metoda, która nie zwraca wartości
    Dog.prototype.makeSound = function () {
        console.log(this.Sound);
    };
    //metoda, która zwraca wartość typu boolean
    Dog.prototype.isCatFriendly = function () {
        return true;
    };
    return Dog;
}());
var dog1 = new Dog("funfel");
dog1.makeSound(); // co zostanie wypisane w konsoli?
// Zadanie
// Zdefiniuj klase 'Teapot' (czajnik), powinna posiadać informacje o:
// kolorze - użyj enum
// temperaturze
// czy czajnik jest wlaczony
// oraz metody:
// wlacz
// wylacz
