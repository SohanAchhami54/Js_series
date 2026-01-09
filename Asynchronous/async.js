
async function getUser(userData){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        if(userData){
            resolve({
                id:userData.id,
                name:userData.name
            })
        }else{
            reject('User not found')
        }
     },2000)
   } 
)}


console.log('Getting the Data 1...')
getUser({id:1,name:'Sohan Achhami'})
.then((res)=>{
    console.log(res)
    return getUser({id:2,name:'Smaran Rawal'})
})
.then((res)=>{
    console.log('Getting the Data 2...')
    console.log(res)
})


// console.log('Getting User Data 1...')
// const data1=await getUser({id:1,name:'Smaran Rawal'})
// console.log(data1)


// console.log('Getting User Data 1...')
// const data2=await getUser({id:2,name:'Sohan Achhami'})
// console.log(data2)


// console.log('Getting User Data 1...')
// const data3=await getUser({id:1,name:'Uttam K.C'})
// console.log(data3)

// setTimeout(()=>{
//  console.log('This function runs after 2 sec')
// },2000)


