function person(obj){
     obj.nationality='Dhoti'
}
const obj={
    name:'Prabhat',
    study:'Bachelor',
    age:22,
    address:'Bhanjang',
    nationality:'Nepali'
}
console.log('Person nationality is:',obj.nationality)
person(obj)
console.log('Person nationality is:',obj.nationality)


function factorial(n){
    return n>=1?n*factorial(n-1):1
}

console.log('The factorial is:',factorial(10))
