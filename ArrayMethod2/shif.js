const array=[1,2,3,4,5,6,7,8,9,10];
const firstElement=array.shift()
console.log('The removed array is:',firstElement)



const array2=['d','e','g','h','j','v','n','x'];
array2.unshift('s','e','f','g','h','g')
console.log('The added  element is:',array2) 
array2.reverse()
console.log('The reverse array is:',array2)


const array3=[1,2,3,4,5,6,7,8,9,10];
const sliceArray=array3.slice(0,4)
console.log(sliceArray)


const array4=[1,2,3,4,5,6,7,8,9,10];
array4.splice(2,2,10)
console.log(array4)