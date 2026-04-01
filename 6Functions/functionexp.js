//function expression are convienent when passing them as an arguments.

function map(f,a){
    const result=new Array(a.length) 
    for(let i=0;i<a.length;i++){
        result[i]=f(a[i])
    }
    return result
}


const num=[1,2,3,4,5,6,7,8,9,10] 

const cubed= map(function (x){
    return x*x*x
},num)
console.log('The cubed of the number is:',cubed)