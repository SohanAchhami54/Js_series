//map
const num=[1,2,3,4,5,6,7];
const result=num.reduce((total,acc)=>{
    return  total+acc;
},0);
console.log(result);

const array=[10,20,30,40,50];
const finalresult=array.filter((num)=>{
    return num>=30;
})
console.log(finalresult);
