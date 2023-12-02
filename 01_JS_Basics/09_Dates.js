const dt= new Date()
console.log(dt)
console.log(dt.toString())
console.log(dt.toLocaleDateString())
console.log(dt.getFullYear())
console.log(typeof dt)

const newdt= new Date(2023,0,23)
console.log(newdt.toString())

const myCreatedDate= new Date('2023-02-15')
console.log(myCreatedDate.getTime())

let myTimeStamp=Date.now();
console.log(myTimeStamp)

console.log('--------------------------')

console.log(Math.floor(Date.now()/1000))

newdt.toLocaleDateString('default',{
  hour:"2-digit"
})




