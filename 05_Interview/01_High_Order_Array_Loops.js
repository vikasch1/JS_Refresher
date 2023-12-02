const arr=[1,2,3,4,5]

for (const num of arr) {
  console.log(num)
  
}
const greetings="hello world !"
for (const greet of greetings) {
  console.log(greet)
 
}

//Maps

const map= new Map()
map.set("IN","India")
map.set("US","uNITED STATES")
map.set("FR","FRANCE")

console.log(map)

map.set("IN","INDIA")
console.log(map)

for (const item of map) {
  console.log(item)
  
}

for (const [key,value] of map) {
  console.log(key,':-',value)
  
}

const games={
  game1:"nfs",
  game2:"spiderman"
}

// for (const item2 of games) {
//   console.log(item2)
  
// }





