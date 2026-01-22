//primitive and non primitive 
//Primitive=> string number boolean null NaN undefined symbol bigint 
//Non Primitive=> arrays objects and functions


//symbol 
let obj={
    uid:2140,
    name:'Sohan',
    age:23,
    address:'nepal',
    education:'bachelor',
}
let id=Symbol('uid')
obj[id]='Student'
console.log('The value of object is:',obj)

//bigint 9007199254740991
let a =9007199254740991n
a=a+23534n
console.log('The value of a is:',a)


//non primitive data types 
