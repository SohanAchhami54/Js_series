let numbers=[1,2,3,4,5] 
numbers.forEach((num)=>{
    console.log(num*2)
})


let fruits=['Apple','Banana','Guava']
fruits.forEach((item,index)=>{
    console.log(index,item)
})


//map 
let arr1=[1,2,3,4,5,6,7,8,9,10] 
let result1=arr1.map((num)=>{
    return num*2
}) 
console.log(result1)
//filter 
let arr2=[1,2,3,4,5,6,7,8,9,10] 
let result2=arr2.filter((num)=>{
    return num%2!=0
}) 
console.log('Odd number is:',result2)

//reduce 
let arr3=[1,2,3,4,5,6,7,8,9,10] 
let result3=arr3.reduce((acc,num)=>{
    return acc+num
})

console.log('The single value is:',result3)