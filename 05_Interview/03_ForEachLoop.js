const coding =["java","cpp","ruby","python"]

coding.forEach( function (item){
  console.log(item)

} )

console.log('-----')

coding.forEach( (item2)=>{
  console.log(item2)
} )

function printMe(item3){
  console.log(item3);
}
console.log('-----')

coding.forEach(printMe)

coding.forEach( (item4,index,arr)=>{
  console.log(item4,index,arr)
})

const myCoding=[{
  langname:'javascript',
  filename:"js",

},{
  langname:'java',
  filename:"java",

},
{
  langname:'python',
  filename:"py",
},
{
  langname:'c++',
  filename:"cpp",
}
]

myCoding.forEach((item5)=>{
  console.log(item5.langname)
})


