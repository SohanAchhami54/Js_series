const fruits=[1,2,3,4,5,6]
const copyfruits=[...fruits]
console.log(copyfruits)


const array1=[1,2,3,4,5,6,7,8,9,10]
const array2=[11,12,13,14,15,16,17]
const finalarray1=[...array1,...array2]
console.log(finalarray1)


const nums=[1,2,3,4,5]
const finalarray2=[0,...nums,6,7,8]
console.log(finalarray2)



const user={id:1,name:'Sohan Achhami'}
const object1={...user}
console.log(object1)


const user1={id:2,name:'Smaran Rawal'}
const user2={id:3,name:'Uttam K.C.'}
const finalObject={...user1,...user2}
console.log(finalObject)


