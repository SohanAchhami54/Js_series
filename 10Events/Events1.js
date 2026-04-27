let h1=document.querySelector('#h1id') 
h1.addEventListener('click',()=>{
    alert('Event and Event Listeners')
})
h1.addEventListener('dblclick',()=>{
   h1.textContent='This is inner Text Content'
})
h1.addEventListener('mouseover',(e)=>{
    console.log('X:',e.clientX) 
    console.log('Y:',e.clientY)
})

let h2=document.querySelector('#h2id') 

let changeColor=()=>{
    h2.style.backgroundColor='red' 
    h2.style.color='white'
}
h2.addEventListener('mouseover',changeColor)

// h2.addEventListener('click',()=>{
//     let value=prompt('Enter any character') 
//     alert(`The value is:${value}`)
// })

// h2.addEventListener('click',()=>{
//     h2.style.backgroundColor='red'
//     h2.style.fontSize='23px'
//     h2.style.color='white'
// })
