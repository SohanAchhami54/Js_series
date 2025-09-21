//function declaration and function statement can be nested.
function addSquare(a,b){
    function square(x){
        return x*x;
    }
    return square(a)+square(b);

}
const result=addSquare(2,3);
console.log("the square of the two number is:",result);


//this is function expression and it is anonymous
const square=function(num){
    return num*num;
}
console.log(`the squaure of number is:`, square(3));



//to find the factorial of number
const factorial=function(num){
    return num<2?1:num*factorial(num-1);
}
console.log("the factorial of the number is:",factorial(10));



//function expression are more convenient when passing as an arguments
//and this is very much easy.
function map(f,a){
    const result=new Array(a.length);
    for(let i=0;i<a.length;i++){
        result[i]=f(a[i]);
    }
    return result;
}


const numbers=[2,3,4,5,6,10];
const cubednumbers=map(function (x){
    return x*x*x;
},numbers);
console.log("the cube of the numbers is:",cubednumbers);


