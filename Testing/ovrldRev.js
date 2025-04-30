class Calculator{
    add(a,b){
        if (b===undefined){
            return a + a;
        }
        return a + b;
    }
}
const Calc = new Calculator;
console.log(Calc.add(2));
console.log(Calc.add(2,3));
