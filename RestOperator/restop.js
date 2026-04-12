function sum(...num){ //this is the rest operator.
  return  num.reduce((num,acc)=> num+acc,0)
} 
console.log('The Sum of the number is:',sum(1,2,3,4,5))


function peoplename(greeting,...restname){
    return `${greeting} and ${restname.join(' and ')}`
}
console.log('The name of the people is:',peoplename('sohan','prabhat','sandesh'))


const obj={
    name:'Pranaya',
    dob:2003,
    address:'Bhanjang',
    Nationality:'Nepali'
}
const {name,...rest}=obj 
console.log('The name of the person is:',name)
console.log('The rest of the characterisics of the person is:',rest)


//let's find the multiplication of the number 
function multi(num,...rest){
    return rest.map(rest=>num*rest)
}
console.log('The multiplication of the number is:',multi(9,3,4,5,6,8,9,6))


//practice question 1
const user={
    id:101,
    name:'Sohan',
    email:'sohanachhami55@gmail.com',
    passwordd:'1234567'
}
const {passwordd,...userwithoutpassword}=user 
console.log('userwithout password is:',userwithoutpassword)

//practice question 2
function sumEvenNumbers(...numbers){
    const evennumbers=numbers.filter(num=>num%2==0)
    return evennumbers.reduce((num,acc)=>{
    return num +acc
   },0)
}
console.log(sumEvenNumbers(1,2,3,4,5,6,7,8,9,10))
//practice question 7 
const userData={
    name:'Sita', 
    email:'sita@gmail.com', 
    password:'1234'
}
const {password,...userWithoutPassword}=userData
console.log('User without password is:',userWithoutPassword)
//practice question 8 
function getUsers(...num){
    return num 
}
console.log(getUsers(1,2,3,4,5,6,7,8,9,10))


//practice question 9 
function logger(err,...rest) {
  console.log (`LOG TYPE:${err} | Messages:`,rest)
}
logger("ERROR", "File not found", "Line 23", "server.js");


//practice question 10 
function processOrder(lapt,mous,...rest){
    console.log(lapt) 
    console.log(mous) 
    console.log(rest)
}
processOrder('Laptop','Mouse','Keyboard','Monitor')
