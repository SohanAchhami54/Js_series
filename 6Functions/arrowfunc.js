const result=(...num)=>{
   let value=0 
   for (const n of num){
    value+=n
   }
   return value
    
}
console.log('the sum of the numbers are:',result(3,4,5))

const array=[1,2,3,4,5,6,7,8,9,10]
array.forEach(num=>{
   console.log(num+2)
})


