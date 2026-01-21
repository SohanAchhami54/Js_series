// 1.)Variables 
//declarations and initialization 
var a=12 //it is attached to window 
let b=20 //it is not attached to window 
console.log('Value of a is:',a)

//and var is function scope where as let and const are block scope  
function num(){
    if(true){
        var x=10
    }
    console.log('the value of x is:',x)
}
num()

