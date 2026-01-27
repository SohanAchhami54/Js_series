//print number from 1 to 10 using a for loop 
console.log('Example of for loop')
for(let i=1;i<=10;i++){
    console.log(i)
}

//print numbers from 10 to 1 using a while loop 
console.log('Example of while loop')
let i=10 
while(i>=1){
    console.log(i)
    i-- 
}

//print even numbers from 1 to 20 using a for loop 
console.log('Example of printing even number using for loop')
for(let i=1;i<20;i++){
    if(i%2==0){
        console.log(i)
    }
}

//print odd numbers from 1 to 15 using a while loop 
console.log('Example of printing odd number using while loop')
let num=1 
while(num<15){
    if(num%2!=0){
        console.log(num)
    }
    num++
}

//print the multiplication table of 5 
console.log('This is multiplication of table 5')
for(let i=1;i<=10;i++){
    console.log(`5*${i}=${5*i}`)
}

//Find the sum of numbers from 1 to 100 using a loop 
console.log('This is sum of number from 1 to 100')
//let value=1 
let result=0
for(let i=1;i<=100;i++){
      result+=i 
}
console.log('The sum of number from 1 to 100 is:',result) 

//Print all numbers between 1 to 50 that are divisible by 3 
console.log('Example of printing number between 1 to 50 div by 3')
for(let i=1;i<50;i++){
    if(i%3==0){
        console.log(i)
    }
} 

//count how many numbers between 1 to 100 are divisible by both 3 and 5 
let count=0 
for(let i=1;i<100;i++){
    if(i%3==0 && i%5==0){
        count ++
    }
}
console.log('The value of count is:',count)


//Write a loop from 1 to 100 that print each number and stops immediately when it finds the first number 
//divible by 7 
console.log('loop from 1 to 100')
for(let i=1;i<=100;i++){
    console.log(i)
    if(i%7===0) {
        break 
    }
}

//write a loop from 1 to 20 that skips numbers divisible by 3 and prints all others 
console.log('loop from 1 to 20 that skips numbers div by 3 and prints all others')
for(let i=1;i<20;i++){
    if(i%3===0) continue 
    console.log(i)
}


//Write a loop from 1 to 100 that prints only 5 odd numbers then stops the loop 
console.log('loop from 1 to 100 that prints only 5 odd numbers then stops the loop') 
let c=0
for(let i=1;i<=100;i++){
   if(i%2===0) continue 
   console.log(i) 
   c++
   if(c===5) break 

}




