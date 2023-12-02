const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.map((num)=>num+10)
console.log(newnums)

const newnums2=mynums.map((num)=>num *10)
.map((num)=>num+10)
.filter((num)=>num>=40)


console.log(newnums2)

console.log('-----reduce method---')

const newnums3=[10,20,30,40,50]

const mytotal=newnums3.reduce(function (acc,cv){
  console.log(`acc : ${acc} and curr value : ${cv}`)
  return acc+cv;
},0)

console.log(mytotal)

console.log('----------')

const mytotal2=newnums3.reduce((acc,cv)=> acc+cv,1)

console.log(mytotal2)





