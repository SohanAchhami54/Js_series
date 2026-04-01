const result=(...num)=>{
   let value=0 
   for (const n of num){
    value+=n
   }
   return value
    
}
console.log('the sum of the numbers are:',result(3,4,5))





