
function throttle(fn,delay){
    let lastCall=0 
    return function (...args){ 
        let now= Date.now()
        if(now-lastCall>=delay){
            lastCall=now 
             fn.apply(this,args) 
        }else{
            return null
        }
        
    }
}

function databaseQuery(query){
    console.log(`Searching for ${query}`)
}

const throttleSearch=throttle(databaseQuery,1000)
throttleSearch('bags') 
setTimeout(()=>throttleSearch('clothes1'),200) 
setTimeout(()=>throttleSearch('clothes2'),100) 
setTimeout(()=>throttleSearch('clothes3'),1200) 
setTimeout(()=>throttleSearch('clothes4'),1300) 
setTimeout(()=>throttleSearch('clothes5'),1000) 

