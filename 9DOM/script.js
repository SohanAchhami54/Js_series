let h1tag=document.querySelector('h1') 
h1tag.hidden=true
console.log('value is:',h1tag)

let para=document.querySelector('p') 
para.textContent='I am building the simple website for myself to start the company.'

console.log('Value is:',para)


let a=document.querySelector('a') 
a.setAttribute('href','https://www.google.com')

 
let para2=document.querySelector('#para2') 
para2.textContent='Sohan Achhami.'
para2.setAttribute('data-content','Sohan')
console.log(para2.getAttribute('id'))

//for image 
let img=document.querySelector('img')
img.setAttribute('src','https://images.unsplash.com/photo-1770752986377-1982c76424e8?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

console.log(img.getAttribute('src'))


//dynamic dom manipulation 
let h1=document.createElement('h1') 
h1.innerHTML='<i>Hello My name is Sohan Achhami and I am learning DOM manipulation.</i>'
document.body.prepend(h1)
console.log(h1)



let h1div=document.createElement('h1') 
h1div.textContent='I am Studing Dom manipulation'
document.querySelector('#divh1').prepend(h1div)
h1div.classList.toggle('text')
console.dir(h1div)

