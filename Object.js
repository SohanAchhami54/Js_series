const fs=require('fs');
fs.readFile('myfile.txt',(err,data)=>{
    if(err){
        console.log('error occurred',err);
    }else{
        console.log('data is:',data);
    }
})