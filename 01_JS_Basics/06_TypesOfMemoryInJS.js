// stack (primitive types)-copy and heap(non primitive)-reference 
let myPetName="Montu"

let anotherName=myPetName
anotherName="Vicky"
console.log("another name -"+anotherName)
console.log("mypet name -"+myPetName)

let userOne={
  email:"user@google.com",
  upi:"user@ybl",

}
let userTwo=userOne
userOne.upi="xyz"
console.log(userOne.upi)
console.log(userTwo.upi)



 
