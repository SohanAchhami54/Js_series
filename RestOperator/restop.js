function array(...num){
    return num.reduce((acc,num)=>acc+num,0)
}
console.log(array(1,2,3,4,5,6,7,8,9,10))

//this is  object destructuring in the object using rest operator
const object={id:1,name:'Smaran Rawal',address:'Tikapur',sex:'male'}
const {address,...rest}=object;
console.log(address)


//this is array destructuring in the array using the rest operator 
const array1=['Smaran','Uttamm','Sohan','Bibek','Prabhat','Pranaya']
const [arr1,arr2,...rest1]=array1
console.log(rest1)