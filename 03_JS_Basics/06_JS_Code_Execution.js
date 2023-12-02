//js execution context
//js runs a code in 2 phase
// global execution context - this keyword
/**
 single threaded-single process
 -functional execution context
 -(eval EC -mongoose)
 phase1 - memory creation phase(MEMORY ALLOCXATED TO VARIABLES)
 phase2 -EC

 step 1- global EC-this

 step 2- val1=undefined
 val2=undefined
 addNum=undefined
 result1= undefined
 result2- undefined

 step 3- execution phase
 val1=10
 val2=5
 addNum-.EC (addnum func)- new variable env+execution thread 
  -memory creation phase + executiuon phase for funvtion
    -step 1 - memory phase
      -val1=undefined
      -val2=undefined
      -total-undefined
    step 2- execution context
      -num1=10
      -num2=5
      total=15-return to global EC
      -delete
  result1=15
  repeat for function call 2


 



 


 */

 let val1=10
 let val2=5
 function addNum(num1,num2){
  let total=num1+num2
 }
 let result1=addNum(val1,val2);
 let result2=addNum(10,5);

 