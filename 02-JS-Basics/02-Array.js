const marvel_Heros=["thor","ironamn","spiderman"]
const dc=["superman","flash","batman"]

marvel_Heros.push(dc)
console.log(marvel_Heros)
console.log(marvel_Heros.length)
console.log(marvel_Heros[3][2])

const allHeros=marvel_Heros.concat(dc)
console.log(allHeros)

const all_new_heros=[...marvel_Heros,...dc]
console.log(all_new_heros)

const another_Arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr= another_Arr.flat(Infinity)
console.log(real_another_arr)


console.log(Array.isArray("vikas"))
console.log(Array.from("vikas"))
console.log(Array.from({name:"vikas"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))










