//lexical scope 
let CanteenOC='Restaurant'
function college(){
    let student='Sohan'
    console.log('The name of the student is:',student)
    console.log('The canteen outside the college is:',CanteenOC)
}
college()
// console.log('The Student outside the college is:',student)

//closure and lexical environment here
function a1(){
    let a=10 
    function b1(){
        let b=20
        function c1(){
            let c=30 
            return a+b+c
        }
      return  c1()
    }
  return  b1()
}
let result =a1()
console.log('the value of the result is:',result)


//another example of closure 
function counter(){
    let count =0
    return function(){
        count ++
        console.log(count)
    }
}
let outer=counter()
outer()
outer()


//practice question  
//bank account system 
function createAccount(initialBalance){
    let newBalance=initialBalance
    return function deposit(amount){
        newBalance=initialBalance+amount
        return  newBalance
    }

}

let account=createAccount(1000)
console.log(account(20000))
console.log(account(22000))
console.log(account(244000))


//ticket booking system 
function createMovieTicket(moviename,totalSeats){
    let remainSeats=totalSeats
     return function bookSeat(){
         remainSeats-=1
         if(remainSeats>0) return `Tickets for ${moviename} and Remaining seats:${remainSeats}`
         return `Ticket sold`
     }
}

let ticket=createMovieTicket('Maya',10)
console.log(ticket())
console.log(ticket())
console.log(ticket())
console.log(ticket())
console.log(ticket())
console.log(ticket())
console.log(ticket())
console.log(ticket())
console.log(ticket())
console.log(ticket())
console.log(ticket())



