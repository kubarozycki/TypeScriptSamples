"use strict";
var trueOrFalse = false;
var birthYear = 2014;
var firstName = "Jack";
var favouriteFruits = ["banana", "apple", "orange"];
//or
var favouriteFruitsGenericArray = ["banana", "apple", "orange"];
var simpleTuple = ["value 1", "value 2", true, 15];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favouriteColor = Color.Blue;
var typedoesntmatter = "tete";
typedoesntmatter = 132;
//Stwórz zmienne przechowujące twoje:
//ulubione ksiązki, imię, płeć(z zakresu male,female), wiek
//Następnie wypisz w konsoli w postaci:
//Mam na imię : x , mam x lat, jestem male/female/ moje ulubione książki to: .....
