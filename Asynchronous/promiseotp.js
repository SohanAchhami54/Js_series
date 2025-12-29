function waitForotp(){
    return new Promise(function (resolve,reject){
        let timeleft=20;
        const timer=setInterval(function (){
            if(timeleft===18){
                clearInterval(timer)
                resolve('OTP verified successfully')
            }
            timeleft--
            if(timeleft<0){
                clearInterval(timer)
                reject('OTP not verified')
            }
        },1000)
    })
}

console.log('Getting otp code soon');
waitForotp()
.then(function (msg){
   console.log('Message is:',msg);
   console.log('User logged in');
})
.catch(function (error){
    console.log('Error occured:',error);
})
.finally(function (){
    console.log('OTP verified');
})