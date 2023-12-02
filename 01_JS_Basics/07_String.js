const name="vikas"
const repoCount=50
console.log(name+repoCount+" value")
console.log(`my repo count is ${name+" "+repoCount}`);

const gameName=new String("vikas-chaudhary");
console.log(gameName)
console.log(gameName[2])
console.log(gameName.lastIndexOf('k'));
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

const newString =gameName.substring(0,4);
console.log(newString)

const anotherString =gameName.slice(0,6);
console.log(anotherString)

const newStringOne="    vikas    "
console.log(newStringOne.trim())

const url='https://vikas.com/vikas%20chaudhary'
console.log(url.replace('%20','-'))
console.log(url.includes('vikas'))

console.log(gameName.split('-').length)













