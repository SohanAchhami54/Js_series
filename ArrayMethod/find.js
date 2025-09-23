//find method in the array
const array=[5,12,6,8,140,33];
const found=array.find((element)=>element>10);
console.log(found);

//find an object in an array by one of its properties
const inventory=[
    {name:"banana",price:2000},
    {name:"apple",price:1000},
    {name:"cherry",price:3000},
]

function isCherry(fruits){
    return fruits.name==="cherry";
}

console.log(inventory.find(isCherry));

//by using the arrow function ans destructuring
const items=[
    {name:"banana",price:2000},
    {name:"apple",price:1000},
    {name:"cherry",price:3000},
];

const result=items.find(({name})=> name==="apple");
console.log(result);