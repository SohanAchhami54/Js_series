//2.) Scope (global,block and functional)

//It is global scope as it is accessible everywhere 
//and it also doesn't respect the block scope and it in also accessible everywhere 
//and it is functional scope 
var x=10 
{
    var b=12
}
console.log('value of b is:',b)

// reassignment and redeclaration 
// reassign and redeclare are possible with var 
var b=10
b=20 
var b=30


//and reassing is possible but redeclare is not possible with let 
let v=30
v=40 
// let v=
