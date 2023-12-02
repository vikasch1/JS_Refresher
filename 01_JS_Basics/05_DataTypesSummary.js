//primitive datatype
//7 types- String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100;
const scorValue=100.3;
//TYPESCRIPT 
// const score2:Number=100;
const isLoggedIn=false;
const outsideTemp=null;
let userEmail=undefined;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
const bigNumber=566464643376466464n;









//Reference types- non primitive type
// Arrays,Objects,Functions

const Heros=["shaktiman","naagraaj","doga"]
let obj={
  name:"vikas",
  age:23,
}

const myfun=function(){
  console.log("hello world")

}

console.log(typeof myfun)
console.log(typeof bigNumber)
console.log(typeof outsideTemp)


