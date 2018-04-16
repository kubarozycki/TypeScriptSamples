var x=4;
export {x as y};

export class MathOperations{
    static add(x:number,y:number):number{
        return x+y;
    }
}


export default function customConcat(...other:string[]):string{
    let result:string=other.join('');
    return result;
}