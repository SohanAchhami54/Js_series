const a=[1,2,3,4,5]
const b=[...a,6,7,8,9,10] 
console.log('THe value of finalarray is:',b)


//merging array 
const a1=[1,2,3,4,5,6,7,8,9,10] 
const a2=[11,12,13,14,25,15] 
const mergedArray=[...a1,...a2] 
console.log('MergedArray is:',mergedArray)


//merging object
const obj1={
    name:'Smaran',
    age:22, 
    nationality:'Nepali'
}
const obj2={
    fullname:'Uttam',
    ageno:23,
    nationality:'Nepali'
}
const finalObject={...obj1,...obj2}
console.log('The value of finalObject is:',finalObject)



//practice question 1
const user={
    name:'Sohan',
    address:{
        city:'Kathmandu',
        country:'Nepal'
    }
}

const newObj={...user,address:{...user.address,city:'Pokhara'}}
console.log(newObj)

//practive question 2
const defaultSettings={
    theme:'light',
    language:'en',
    notification:true 
};

const userSettings={
    theme:'dark'
}

const finalSettings={...defaultSettings,...userSettings}
console.log(finalSettings)


//practice question 3
function multiply(a,b,c){
    return a*b*c
}

const nums=[2,3,4]

console.log('Multiply function is:',multiply(...nums))     


//practice question 4 
const users1 = [
  { id: 1, name: "Ram" },
  { id: 2, name: "Shyam" },
  { id: 3, name: "Hari" }
] 
const updatedUser=users1.map(user=>user.id==2?{...user,name:'Sita'}:user)
console.log('UpdatedUser is:',updatedUser)

//practice question 5
const users2 = [
  { id: 1, name: "Ram", skills: ["HTML", "CSS"] },
  { id: 2, name: "Shyam", skills: ["JavaScript", "React"] },
  { id: 3, name: "Hari", skills: ["Node", "Express"] }
];

const updatedSkill=users2.map(user=>user.id===2?{...user,skills:[...user.skills , 'TypeScript']}:user)
console.log('UpdatedSkills is:',updatedSkill)

//practice question 6 
const user3 = {
  id: 1,
  name: "Sohan",
  address: { city: "Kathmandu", country: "Nepal" },
  preferences: { theme: "light", notifications: true }
};
const newObj2={...user3,address:{...user3.address,city:'Pokhara'},
preferences:{...user3.preferences,theme:'dark'}}
console.log('newObj2 is:',newObj2)



//practice question 7
const frontendSkills = ["HTML", "CSS"];
const backendSkills = ["Node", "Express"];

const newSkillArray=[...frontendSkills,...backendSkills,'React.js','MongoDB']
console.log('new combine array is:',newSkillArray)


//practice question 8 
const user4 = [
  { id: 1, name: "Ram", active: true },
  { id: 2, name: "Shyam", active: false },
  { id: 3, name: "Hari", active: true }
];
const updatedUser2=user4.map((user)=>user.id===2?{...user,active:true}:user)
console.log('Updated User with active property is:',updatedUser2)

//practice question 9 
function registerUser(name,skills) {
    return {
        name,
        skills
    }
}
const Name='Sohan'
const skills=['React.js','MongoDB','PostgreSql','express.js']

console.log('The detail of the register user is:',registerUser(Name,skills))