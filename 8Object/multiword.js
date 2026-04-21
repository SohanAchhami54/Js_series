const user={
    name:'John',
    age:30,
    "Likes Bird":true
}
user.isAdmin=true
delete user.age


console.log('The user object is:',user)

//new way to create the object .
function makeUser(name,age){
  return {
    name,
    age,
  }
}
let newUser=new makeUser('John',20) 
console.log('The newUser is:',newUser)


//another example of the object 
const laptop={
    name:'Dell inspiron',
    price:80000,
    company:'Dell',
    year:2021, 
    ram:'8 GB',
    ssd:'512 GB'
}
console.log('The laptop object is:',laptop)

delete laptop.company 
laptop.isUsefull=false
console.log('The new laptop object is:',laptop)

console.log('The price of the dell laptop is:',laptop.price)
for(let i in laptop){
    console.log(`${i}`,laptop[i])
}

console.log('The keys of laptop object is:',Object.keys(laptop))
console.log('The keys and value pair is:',Object.entries(laptop))


//nested array 
let role='admin'
const address={
    name:'Prabhat',
    location:{
        city:'Kathmandu',
        pincode:44600, 
        longitude:'27.71103 N',
        latitude:'85.3222 E', 
    },
    [role]:'sohan'
}

const {pincode,longitude,latitude}=address.location
console.log('Pincode is:',pincode) 
console.log('longitude is:',longitude) 
console.log('latitude is:',latitude)

//Object assign 
const newObject=Object.assign({},address) //target and source
console.log('New data is:',newObject)


//deep copy in nested objects. 
const newAddress=JSON.parse(JSON.stringify(address))
newAddress.location.city='Pokhara'
console.log('The original address is:',address.location.city)
console.log('New Address is:',newAddress)
console.log('longitude of the new address is:',newAddress?.location?.longitude) //optional chaining.