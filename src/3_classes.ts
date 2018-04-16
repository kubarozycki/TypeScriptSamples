// Klasy znasz już z C# oraz JavaScript, będzie to tylko szybka powtórka !

// klasa jest domyślnie publiczna, jaki jest domyślny modyfikator dostępu klasy w C#? 
class Dog{

    //Name oraz Sound to właściwości klasy
    Name:string;
    readonly Sound:string="przypisanie inline";
    
    //Konstruktor - metoda wywoływana inicjalizacji nowego obiekty typu 'Dog' 
    constructor(name:string)
    {
        this.Sound="przypisanie konstruktor"; // do readonly można przypisać w konstrukorze
        this.Name=name;
    }

    //metoda, która nie zwraca wartości
    makeSound():void{
        console.log(this.Sound);
    }

    //metoda, która zwraca wartość typu boolean
    private isCatFriendly():boolean
    {
        return true;
    }

}

let dog1=new Dog("funfel");
dog1.makeSound();// co zostanie wypisane w konsoli?

// Zadanie
// Zdefiniuj klase 'Teapot' (czajnik), powinna posiadać informacje o:
// kolorze - użyj enum
// temperaturze
// czy czajnik jest wlaczony

// oraz metody:
// wlacz
// wylacz

