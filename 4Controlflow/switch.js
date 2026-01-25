let Name='SohanAchhami'
switch(Name){
    case 'Uttam':
    console.log('My name is Uttam K.C.')
    break 
    case 'Smaran':
    console.log('My name is Smaran Rawal')
    break 
    case 'Sohan':
    console.log('My name is Sohan Achhami')
    break
    default:
        console.log('My name is nothing')
}


// if else 
 let age=21 
 if(age>=20){
     console.log('He is adult and has understand the world easily')
 }else{
    console.log('He is child and he has not understand the world easily')
 }

//if else if else 
//this is call early return pattern 
function getGrade(mark){
    if(mark>=90 && mark<=100) return 'A+'
    else if(mark>=80 && mark<=89) return 'A'
    else if(mark>=70 && mark<=79) return 'B+'
    else if(mark>=60 && mark<=69) return 'B'
    else if(mark>=33 && mark<=59) return  'C+'
    else if (mark>=0 && mark<=32) return 'Fail'
    else return 'Invalid Marks'
}

console.log('The finalGrade is:',getGrade(82))