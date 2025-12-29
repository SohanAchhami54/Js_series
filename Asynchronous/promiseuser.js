  async function getUser(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(userId){
            resolve({
                id:1,
                name:'Sohan Achhami',
                address:'New baneshwor',
                role:'Admin'
            })
          }else{
            reject('User not found')
          }
        },2000)
    })
}

try{
    console.log('Getting data please wait')
    const final1=await getUser(1)
    console.log(final1)

    console.log('Getting data please wait')
    const final2=await getUser(2)
    console.log(final2)

    console.log('Getting data please wait')
    const final3=await getUser(2)
    console.log(final3)

}catch(error){
    console.log('Error occured:',error)
}

