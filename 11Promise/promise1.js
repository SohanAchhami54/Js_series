const myPromise=new Promise((resolve,reject)=>{
    let success=true 
    if(success){
        resolve('Data received')
    }else{
        reject('Data not received')
    }
})
myPromise
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

//Promise.all 
const p1= Promise.resolve('User Data1') 
const p2= Promise.resolve('User Data2')
const p3=  Promise.resolve('User Data3') 

Promise.all([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

//Promise.race 
const p4=new Promise(res=>setTimeout(()=>res('slow api'),2000)) 
const p5=new Promise(res=>setTimeout(()=>res('fast api'),500)) 
Promise.race([p4,p5])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

//Promise.any 
const p6=Promise.reject('Data do not received')
const p7=new Promise(res=>setTimeout(()=>res('Server 2'),2000)) 
const p8=new Promise(res=>setTimeout(()=>res('Server 3'),1000)) 
Promise.any([p6,p7,p8])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

async function getCurrency(currency){
  fetch(`https://open.er-api.com/v6/latest/${currency}`)
  .then((res)=>res.json()) 
  .then((res)=>console.log('the value of the currency is:',res))
  .catch(err=>console.log('Error occured:',err))
}

await getCurrency('npr')


// async function getWeatherData(city){
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a7d38e7a92fd4d388498fe1593bac94`)
//   .then(res=>res.json()) 
//   .then(res=>console.log('The Weather Data is:',res)) 
//   .catch(err=>console.log('Error occur while fetching weather data:',err)) 
// }
// await getWeatherData('Kathmandu')

