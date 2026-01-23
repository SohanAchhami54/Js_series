//dynamic typing 
//means we can change the data here 
let a='Sohan'
a=null
a=undefined 
a= {}
a=[]
a=function num(){}


//type coercion => convert the value from one data type to another data types
console.log('4'+1)
console.log(typeof('4'+1))

console.log('4'-1)
console.log(typeof('4'-1))


console.log('4'+'2')
console.log(typeof('4'+'4'))

console.log('4'-'4')
console.log(typeof('4'-'4'))

//truthy and falsy value 
//0 false "" null undefined NaN document.all =>it is converted to false 
// and all others are converted to false.
if(!NaN){
    console.log('I am learning the javascript')
}
if(-1){ //this is truthy value 
 console.log('This is truthy value')
} 

if(2234343){
    console.log('This is also truthy value')
}

 