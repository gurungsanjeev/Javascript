setTimeout(()=>{
  console.log("An unknown behaviour is seen in your system , please contact system administrator!!")
},1000)
setTimeout(()=>{
  console.log("Warning!!!,Your system is under danger.....")
},3000)
setTimeout(()=>{
  console.log("SomeOne is accessing your data!!")
},5000)
setTimeout(()=>{
  let internalId = setInterval(()=>{
    console.log("Your data is being transferring!!!")
  },1000)
  setTimeout(()=>{
    clearInterval(internalId);
  },5000)
},5000)
setTimeout(()=>{
  console.log("data sent successfully, your disk is cleaned!!")
},8000) 