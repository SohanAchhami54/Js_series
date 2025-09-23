//to implement the some method
const array=[1,2,3,4,5];
const even=(element)=>element%2===0;
console.log(array.some(even));


//check whether the value exists in the array or not
const fruits=["banana","grapes","mango","orange"];

function checkAvailability(arr,val){
    return arr.some((arrVal)=> val===arrVal);
}

console.log(checkAvailability(fruits,"pineapple"));