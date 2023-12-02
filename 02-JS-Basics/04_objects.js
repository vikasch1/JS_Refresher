//const tinderUser = new Object()
const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="vikas"
tinderUser.isLoggedIn=true
console.log(tinderUser)

const regularUser={
  email:"vikas@gmail.com",
  fullname:{
    userFullName:{
      firstname:"rahul",
      lastName:"chaudhary",


    }

    }
  }

  console.log(regularUser.fullname)

const obj1={
  1:"a",
  2:"b",
  3:"c"
}
const obj2 ={
  4:"e",
  5:"f"
}
const obj5 ={
  6:"g",
  7:"h"
}

const obj3={obj1,obj2}
console.log(obj3)
console.log('----------')

const obj4=Object.assign({},obj1,obj2,obj5)
console.log(obj4)

const obj6={...obj1,...obj2}
console.log(obj6)


console.log('&&&&&&&&&&&&&')

const users=[
  {
    id:1,
    email:"vik@gmail.yahoo"
  },
  {
    id:1,
    email:"vik@gmail.yahoo"
  },
  {
    id:1,
    email:"vik@gmail.yahoo"
  },
  {
    id:1,
    email:"vik@gmail.yahoo"
  }
]

console.log(users[1].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
 








