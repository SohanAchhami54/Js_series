const array=[1,100,10,45,36,78,45];
const result1=array.sort();
console.log(result1);

//sort ascending
const result2=array.sort((a,b)=>a-b);
console.log(result2);

//sort descending
const result3=array.sort((a,b)=>b-a);
console.log(result3);

//Sorting objects by property
let studn