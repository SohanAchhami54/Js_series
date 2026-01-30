//function declaration or function defination or function statement
function myFunc(obj){
 obj.model='toyoto'
}
const car={
    make:'honda',
    model:'accord',
    year:1998
}
console.log(car.model)
myFunc(car)
console.log(car.model)


function myArr(arr){
  arr[0]=9
}
const arr=[10,11,12,13,14]
console.log(arr[0])
myArr(arr)
console.log(arr[0])
//this is function expression
let showname=function (){
    return 'My name is sohan achhami'
}
console.log(showname())

//factorial 

const factorial=function(n){
    return n===1?1:n*factorial(n-1)
}
console.log(factorial(3))