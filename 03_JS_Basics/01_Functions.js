

function sayMyName(){
  console.log("v")
console.log("i")
console.log("k")
console.log("a")
console.log("s")

}

// sayMyName();
// sayMyName();
// sayMyName();
console.log(typeof sayMyName)

function addTwoNums(a,b){
  return a+b;
}
console.log(addTwoNums(4,5))
console.log(addTwoNums(4,"5"))
console.log(addTwoNums(2,null))
const result=addTwoNums(10,10)
console.log(result)


function loginUserMsg(username="sam"){
  if(username===undefined){
    console.log("plz enter user name ")
  }
  return `${username} just logged in`
}
const user=loginUserMsg();
console.log(user)

console.log('------------------------------')


function calcPrice(val1,val2, ...num1){
  return num1;
}

console.log(calcPrice(200,400,500,2000))


const userTwo={
  username:"rahul",
  price:200,
}

function handleObject(anyobject){
  console.log(`username is  ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(userTwo);

const myarr=[10,20,30]
function handleArray(getArray){
  return getArray[0]

}
console.log(handleArray(myarr))













