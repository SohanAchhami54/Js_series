//for loop
for(let i=0;i<10;i++){
    console.log(`My name is sohan achhami ${i+1} times `);
}

//for.... in loop
let person={
    name:"Sohan",
    age:21,
    country:"nepal",
}
for (key in person){
    console.log("Key:",key, person[key]);
}

//for... of loop
let name=["manesh","sohan","bibek","prabhat"];
for(key of name){
    console.log(` ${key}`);
}


let matrix=[
    [1,2,3],
    [4,5,6]
];
for(let row of matrix){
   // console.log("value",value);
    for(let value of row ){
        console.log("value",value);
    }
}