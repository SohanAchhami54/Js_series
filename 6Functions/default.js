function defaultp(a=0,b=0){
  console.log(a+b)
}
defaultp()



//higher order function 
function higherOrder(){
    return function(){
        console.log('This is return statement from higher order function.')
    }
}
higherOrder()()
