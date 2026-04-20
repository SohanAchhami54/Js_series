const arr=[10,33,89,90,56] 
const result1=arr.find((num)=>num>45) 
console.log('Array greater than 45 is:',result1) 



const result2=arr.some((num)=>num>80) 
console.log('Number greater than 90 is:',result2)


const result3=arr.every((num)=>num>91) 
console.log('Number greater than 91 is:',result3)