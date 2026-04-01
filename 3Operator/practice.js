//discount for ecommerce 
function getFinalPrice(price){
  const finalprice= price>=1000 ?1000-(20/100)*1000 :price>=500? 1000-(10/100)*1000:'No discount'
  return finalprice
}

console.log(getFinalPrice(400))


//function to calculate the final ride fare like in uber or pathao 
function calculateFare(distanceKm,timeMinutes,isNight,isPremium){
     
     let basefare  =100 
     basefare+= distanceKm* 20 
     basefare+= timeMinutes * 5

     if(isNight){
        basefare+=(20/100)*basefare
     }
     if(isPremium){
        basefare-=(10/100)*basefare
     }
     if(basefare<150){
        basefare=150
     } 
     return basefare
}

console.log('Final Fare price:',calculateFare(12,30,true,true))


