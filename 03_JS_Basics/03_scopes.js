function one(){
  const userName="vikas"
  function two(){
    const website="youtube"
    console.log(userName);
  }
  //console.log(website)
  two();

}
//one();

if(true){
  const username="rahul"
  if(username==="rahul"){
    const website=" youtube"
    //console.log(username+website)
  }
  //console.log(website)
}

//console.log(username)

console.log("---imp concept---")

console.log(addone(5))
function addone(num){
  return num +1
}


console.log(addtwo(5)) //error - hoisting concept
const addtwo=function(num){
  return num +2
}





