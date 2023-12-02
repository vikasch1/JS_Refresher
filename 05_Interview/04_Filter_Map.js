const coding =["java","cpp","ruby","python"]

const values=coding.forEach((item)=>{
  console.log(item)
  return item


})
console.log(values)

console.log('--------------------------------')


const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=>num>4)
console.log(newNums)

const newNums2=myNums.filter((num)=>{
  return num>5
})
console.log(newNums2)



const myNum2=[1,2,3,4,5,6,7,8,9,10]

const newNums3=[]
myNum2.forEach((num)=>{
  if(num>6){
    newNums3.push(num)
  }

})
console.log(newNums3)




