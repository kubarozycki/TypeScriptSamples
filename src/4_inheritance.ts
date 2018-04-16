
class Animal{

    //wlasciwosc typu string
    public Name:string;

    //protected property - można zmienić jej wartość tylko z metod klasy lub klas pochodnych
    //co oznacza znak zapytania? (wróć do rozdziału 2_functions)
    protected Age?:number;

    //private property - można zmienić jej wartość tylko z metod klasy
    private hasTail:boolean=true;

    constructor(name:string)
    {
        this.Name=name;
    }

    makeSound():void{
        console.log("making default animal sound");
    }
}

class Cat extends Animal
{
    constructor(catName:string,age:number)
    {
        super(catName);// przekazanie zmiennej do wywołania konstruktora klasy bazowej
        
        this.Age=age; //z klasy pochodnej mamy dostęp do własciwości klasy bazowej (w tym wypadku protected)
        super.makeSound();
    }
}


//Stwórz klasy Person, Employee, Customer

//Person - powinna zawierac prywatne wlasciwosci imie oraz nazwisko oraz opcjonalną właściwość address 
//(może być edytowana tylko z metod klasy Person oraz pochodnych)

//Employee - powinna zawierać własciwość PhoneNumber oraz metoda CallCustomer (przyjmującą argument typu Customer )

//Customer - powinna zawierać właściwości PhoneNumber,ShoppingCard (lista wybranych produktów) oraz metode PrintProducts (wypisującą wszystkie produkty)