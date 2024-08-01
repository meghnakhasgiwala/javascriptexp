let myP= new Promise((resolve,reject)=>{
    let age=3;
    if(age>=18)
    {
        resolve("good")
    }
    else{
        reject("bad")
    }
    
})
myP.then((Data)=>{
    console.log("age is 18 or greater",Data)   // adding  data  is passing an argument makes makes custom promise
}).catch((Data)=>{
    console.log("age is less than 18",Data)
})