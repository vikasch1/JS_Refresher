//es 6 concept-2015
const user={
  username:"vikas",
  price:999,
  welcomeMsg:function(){
    console.log(`${this.username}, welcome to website `)
    console.log(this);

  }
}
// console.log(user.welcomeMsg())
// user.username="puneet"
// console.log(user.welcomeMsg())

console.log(this) //current context-empty object

function myFun(){
  let username="dev"
  console.log(this.username)
}
myFun();


const myFun2=function(){
  let userName="rohan"
  console.log(this.userName)
}
myFun2();

console.log('---arrow function----')


const myFun3=()=>{
  let username="avinash"
  console.log(this)
  console.log(this.username)
}

myFun3();


console.log('---more on arrow function----')

const addTwo=(num1,num2)=>{
  return num1+num2
}
const addTwo2=(num1,num2)=> (num1+num2)

const addTwo3=(num1,num2)=> ({username:"vikas"})

console.log(addTwo(4,4))
console.log(addTwo2(7,7))
console.log(addTwo3(3,3))












