//use to merge two or more array
const array1=["a","b","c"];
const array2=["d","e","f"];
const array3=array1.concat(array2);
console.log(array3);


//concatenate three arrays
const num1=[1,2,3];
const num2=[4,5,6];
const num3=[7,8,9];
const finalresult=num1.concat(num2,num3);
console.log(finalresult);


//fill method
const num4=[1,2,3,4,5];
console.log(num4.fill(0,2,5));
console.log(num4.fill(0,3));
console.log(num4.fill(5,3));


//find method
