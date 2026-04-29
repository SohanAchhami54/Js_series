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
    console.log('keydown:',e)
    h4.textContent=`${e.key}`
})


const uploadfile=document.querySelector('#uploadfile')
const hiddenfile=document.querySelector('#hiddenfile')

uploadfile.addEventListener('click',(e)=>{
    hiddenfile.click()
    console.log(e)
})
hiddenfile.addEventListener('change',(e)=>{
    console.log(e)
    // const filepath=e.target.value  //this is one way 
    // const result=filepath.split('\\').pop()
    // console.log(result)
    // uploadfile.textContent=result   
    uploadfile.textContent=e.target?.files[0]?.name //this is another way 
})





const form =document.querySelector('#cardform') 
const main=document.querySelector('#main')

const inp=document.querySelectorAll('#cardform input')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
console.log('input value is:',inp)

const card=document.createElement('div') 
card.classList.add('card')

const profile=document.createElement('div')
profile.classList.add('profile') 

const cardimg=document.createElement('img') 
cardimg.setAttribute('id','img')
cardimg.setAttribute('src',`${inp[2]?.value}`)

const h2=document.createElement('h2') 
h2.textContent=`${inp[0]?.value}` 

const h3=document.createElement('h3') 
h3.textContent='This is your image' 


profile.appendChild(cardimg) 
card.appendChild(profile) 
card.appendChild(h2) 
card.appendChild(h3) 

main.appendChild(card)

}) 



