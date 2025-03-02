//// example of promise
let error = false;

const promiseExample = new Promise((resolve,reject)=>{
  if(error){
    
    reject("error aayo hai tw")
  }
  else{
   resolve("sanjeev data");
  
}

})

// promiseExample.then((value)=>{
// console.log(value)
// }).catch((err)=>{
// console.log(err)
// }).finally(()=>{
//   console.log("kam sakyo hai")
// })



//// async function

async function asyncExample(){
  try {
    
    const value =  await promiseExample
    console.log(value);
  } catch (error) {
    console.log(error)
  }
}


function example (){
  console.log("example");
}
function example2 (){
  console.log("example2");
}

asyncExample();
example();
example2();
