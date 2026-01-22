// Temporal Dead Zone 
var a=20
console.log('the value of x is:',x)
let x=10

function num(){
    console.log('This is the normal function')
}

num()


//the memory is allocated to the variable x for the first time  and for the function also 
//then in second phase the line 4 runs but the value 10 is not assigned to variable x 
// thats because the variable x is hoisted and  it is in the temporal dead zone 
// the time between variable is declare and value is assigned is called TDZ 
// but in the second phase when line 4 runs it didn't get the value as it is in the TDZ so 
//we get the reference error 



//and the variable declare with var is in the global 
//and the variable declare with let and const are in the seperate memory location

let b=10 
{
    let b=20 
    console.log('Inside:',b)
}
console.log('Outside:',b)