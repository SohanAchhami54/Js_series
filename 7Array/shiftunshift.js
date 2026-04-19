let fruits=['Apple','Orange','Pear'] 
console.log(fruits.shift())
fruits.unshift('Guava') 
console.log(fruits)

//first form of loop 
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
//second form of loop 
for(let fruit of fruits){
    console.log(fruit)
}

let arr=[1,2,3,4,5,6] 
console.log('The length of the array is:',arr.length)
arr.length=0
console.log('The length of the array is:',arr.length)

//another way of creating the array 
let arr2=new Array('bugati','lambo','rollsroyall','mercedes') 
arr2.push('swift') 
console.log('The new array is:',arr2)

//multidimensional arrays 
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log('The matrix at position [0][2]:',matrix[0][2])


