function simpleFunction():void{
    console.log("i dont have to return anything");
}
simpleFunction();




function add(x:number,y:number):number{
    console.log("i have to return number");
    return x+y;
}
console.log(add(4,5)); //najpierw zostanie wywołana funkcja add, a jej wynik zostanie przekazany do console.log()



//Immediately invoked function expression - funkcja wywoływana natychmiast po inicjalizacji
(function(){
    console.log("IIFE with anymous function");
})();




//Immediately invoked function expression - funkcja wywoływana natychmiast po inicjalizacji
((x:string)=>{
    console.log(x);
    console.log("IIFE function expression");
})("Hello world");




//argument age jest opcjonalny
//argument is human ma domyślna wartość true
function addUser(firstName:string,age?:number,isHuman:boolean=true):void{
    //todo API call
}
addUser("John",14);
addUser("Yeti",undefined,false);





//rest parameters - funkcja, którą można wywołać z dynamiczną ilością argumentów
function manyParams(firstParam:number,...other:string[]){
    //jeśli nie znasz tej konstrukcji użyj konstrukcji, którą znasz np. for/while
    other.forEach((val:string)=>{
        console.log(val);
    });
}
manyParams(4,"first","second");
manyParams(4,"first","second","third");
manyParams(4,"first","second","third","fourth");



//Zadanie
//Stwórz funkcje:
//multiply dla 3 liczb całkowitych
//printWall, przyjmująca i wypisująca 'Maluje sciane na {{kolor}}', wywoływaną natychmiast dla koloru czerwonego
//stwórz funkcję concateNate, która przyjmie dowolną ilość wartości typu number i połączy je w jeden łańcuch znaków 