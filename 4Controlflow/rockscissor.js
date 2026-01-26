//logic to write the rock scissor and paper 
let value=['rock','scissor','paper']
function computer(value){
    let index 
    for(i=0;i<value.length;i++){
         index=Math.floor(Math.random()*value.length)
    }
    return value[index]
}

function rps(user,computer){
    if(user==='rock' && computer==='scissor') return 'user wins'
     else if(user==='rock' && computer==='paper') return 'computer wins'
     else if(user==='scissor' && computer==='paper') return 'user wins'
     else if(user==='scissor' && computer ==='rock') return 'compuer wins'
     else if(user==='rock' && computer==='scissor') return 'user wins'
     else if(user==='rock' && computer ==='paper') return 'computer wins'
     else return 'game draw'
     
}

console.log('The result of rock scissor and paper game is:',rps('rock',computer(value)))