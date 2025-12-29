//it changes all the elements within a range of indices in an array 
const array1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const finalResult1=array1.fill(10,5,9)
console.log(finalResult1)

const array2=[1,2,3,4,5,6,7,8,9,10];
const finalResult2=array2.fill(12,5,7)
console.log(array2)
// and it cannot include the last array