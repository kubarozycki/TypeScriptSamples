class MathOperations{
    
    //metoda statyczna
    static add(x:number,y:number):number{
        return x+y;
    }
    
    static divide(x:number,y:number):number{
        return x/y;
    }

}

//nie musimy tworzyć instancji klasy,aby wywołać jej metode
console.log(MathOperations.add(4,5));
console.log(MathOperations.divide(10,2));

//Zadanie stwórz klase MathOperations mającą metody:
//RectangleCircuit, CircleCircuit