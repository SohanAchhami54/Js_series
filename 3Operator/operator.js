//arithmetic, comparison, logical, assignment, unary, ternary operator 
const a=10
const b='10'
if(a===b){  //(===) it also check the data type of number
    console.log('both number are equal')
}else{
    console.log('both number are not equal')
}

//unary operator 
let c=[] //non primitive data types 
console.log('the data type of c is array:',c instanceof Array)

//temperature 
let temperature=10
if(!(temperature>40)){
     console.log('Today is very cold')
}else {
     console.log('Today is very hot')

}


//ternary operator 
let score=39
let grade= score>=90?'A+':score>=80?'A':score>=70?'B+':score>=60?'B':score>=50?'C+':score>=40?'C':'Fail'
console.log('The grade of the student is:',grade)


let n=4 
let result= n++ + ++n 
console.log(result)