function add(a){
    return function (b){
      return function (c){
        return function (d){
            return a+b+c+d
        }
      }
    }
}

let val1=add(5)
let val2=val1(5)
let val3=val2(5)
let finalResult=val3(4)
console.log('The finalResult is:',finalResult)

//this is the example of currying in js 
function greeting(greet){
    return function (name){
        console.log(`${greet} ${name} `)
    }
}
let sayHello=greeting('Hello')
sayHello('Sohan')
sayHello('Uttam')
sayHello('Smaran')

//this is another example of currying in js 
function createApi(baseUrl){
    return function(endpoint){
       return `${baseUrl}/${endpoint}`
    }
}

const user=createApi('https://api.example.com')
console.log(user('user'))
console.log(user('admin'))
console.log(user('host'))

