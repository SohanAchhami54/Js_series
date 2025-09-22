//function vs regular function
 
//This is the first difference
function regularfunction(){
    console.log(arguments);
};

const arrowFunction=()=>{
    console.log(arguments)
};

regularfunction("hi",5,true);


//this is the second differences
function returnValue(x){
    return x;
}

const returnValueFAF=(x)=>x;
console.log(returnValue(3));
console.log(returnValueFAF(4));


//third differences is this binding
let myObj={
    x:2,
    regularfunction(){
        console.log(this.x);
    },

    arrowfunction:()=>{
        console.log(this.x);
    }
};

//myObj.regularfunction();
myObj.arrowfunction();