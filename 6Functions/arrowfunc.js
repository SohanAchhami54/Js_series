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

//map function 
const arr1=[1,2,3,4,5,76]
const value1=arr1.map((num)=>num*2) 
console.log('Value 1:',value1)

//filter function 
const arr2=[23,77,766,454,2347,55]
const value2=arr2.filter((num)=>num%2==0) 
console.log('Value 2:',value2)

//reduce function 
const arr3=[1,2,3,4,5]
const value3=arr3.reduce((num,acc)=>num+acc,0)
console.log('Value 3:',value3)


//practice question of higher order function and closure also
function discountCalculator(discount){
   return function (price){
      return price-price*(discount/100)
   }
}


let ten=discountCalculator(10)
console.log('10% discount is:',ten(2000))
let twenty=discountCalculator(20) 
console.log('20% discount is:',twenty(2000))



