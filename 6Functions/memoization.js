//this is the example of memoization 
function memoize(func){
    let cached={}
    return  function(arg){
       if(cached[arg]){
        return cached[arg]
       }else{
          let finalValue=func(arg)
          cached[arg]=finalValue
          return finalValue
       }
    }
}
  

function calc(num){
    console.log('Computing...')
    return num*2
}

let val=memoize(calc)
console.log(val(7))
console.log(val(7))
console.log(val(5))
console.log(val(5))
console.log(val(5))

