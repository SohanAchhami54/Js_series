const input=document.querySelector('input') //input event 
input.addEventListener('input',(e)=>{
    if(e.data!==null) {
        console.log(e)
        console.log(e.target.value)
    }
})

const sel=document.querySelector('#mobilelist') //change event 
sel.addEventListener('change',(e)=>{
    console.log(e.target.value)
    const device=document.querySelector('#device') 
    device.textContent=`Device Selected ${e.target.value}`
})

const h4=document.querySelector('#h4id')  //keydown 
window.addEventListener('keydown',(e)=>{
    console.log(e)
    h4.textContent=`${e.key}`
})


const uploadfile=document.querySelector('#uploadfile')
const hiddenfile=document.querySelector('#hiddenfile')

uploadfile.addEventListener('click',(e)=>{
    hiddenfile.click()
    console.log(e)
})
hiddenfile.addEventListener('change',(e)=>{
    const filepath=e.target.value  
    const result=filepath.split('\\').pop()
    console.log(result)
    uploadfile.textContent=result 
    
})
