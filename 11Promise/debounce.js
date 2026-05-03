
const debounce=(fn,delay)=>{
    let timer 
    return function (...args){
         clearTimeout(timer) 
         timer=setTimeout(()=>{
           fn.apply(this,args)
         },delay)
    }
}




const search=(query)=>{
    console.log(query)
}

const debounceSearch=debounce(search,500) 
debounceSearch('h')
debounceSearch('he')
debounceSearch('hel')

