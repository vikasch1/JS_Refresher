//singleton-using constructor
//not singleton - using literals

// Object.create()
const mySym= Symbol("key1")
const JsUser= {name:"vikas",
"full name":"vikas chaudhary",
age:18,
location:"delhi",
email:"vikas@gmail.com",
isLoggedIn:false,
lastLoginDays:["mon","tue"],
[mySym]:"mykey1"
}

console.log(JsUser.age)
console.log(JsUser.lastLoginDays[1])
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof mySym)

JsUser.email="vikas@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="vikas@yahoo.co.in"
console.log(JsUser)
JsUser.greeting=function(){
  console.log("hello")
}
JsUser.greetingTwo=function(){
  console.log(`hello js user ${this["full name"]}`)
}








