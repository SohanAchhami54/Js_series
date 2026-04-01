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