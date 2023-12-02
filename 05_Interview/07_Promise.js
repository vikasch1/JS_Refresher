/*

 
 */

// fetch('https://something.com').then().catch()
console.log('--Promise 1--')

const promiseOne=new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('async task completed')
    resolve()
  },1000)

})
promiseOne.then(function(){
  console.log("promise consumed")

})
new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("async task 2 ")
    resolve();

  },1000);
}).then(function(){
  console.log("async two resoved")

})

const Promisethree= new Promise(function(res,rej){
  setTimeout(function() {
    res({username:"vikas",email:"vikas@gmail.com"})
    
  }, 1000)

})

Promisethree.then(function(user){
  console.log(user)

})

const promisefour= new Promise(function(resolve,rej){
  setTimeout(function() {
    let error=true
    if(!error){
      resolve({username:"rahul",age:24})
    }else{
      rej('Error"something wrong')
    }
    
  }, 2000);
})

const username=promisefour.then((user)=>{
  console.log(user);
  return user.username;
}).then((username)=>{
  console.log(username)
}).catch(function(err){
  console.log(err)
}).finally(()=> console.log('the promise is either resolved or rejected '))


const promisefive=new Promise(function(res,rej){
  setTimeout(function() {
    let error=true
    if(!error){
      resolve({username:"rahul",age:24})
    }else{
      rej('Error"something wrong')
    }
    
  }, 1000);


});

async function consumePromiseFive(){
  try{
    const response=await promisefive
    console.log(response)

  } catch(err){
    console.log(err)
  }


}

consumePromiseFive()










