// console.log("hlooo")



console.log("i can do it");



function message(value,cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //   console.log("value")
            resolve(`subscribe to new message my channel ${value}`)
        },1000)
    })
}


function likethevideo(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //   console.log("value")
            resolve(`subscribe new to my channel ${value}`)
        },1000)
    })
}

function subsrcibeto(value){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //   console.log("value")
            let a=false
            if(a){
            resolve(`subscribe to my channel ${value}`)}
            else reject(Error("bhai subscribe kr le"))
        },1000)
    })
   
}
// const mess=message("know you can make good things","")
// const mess1=message("know you can make good things",function (value){
//     console.log(value)
//     likethevideo("plzzz like and subscribe to my channel",function(value){
//         console.log(value)
//     });
//     subsrcibeto("pllzzz make it large code base of india",function(value){
//         console.log(value)
//     })
// })
// console.log(mess1)
// console.log("you have acheived your path")


// // to get out of callnack helll and pryamid of dome

// const sub= new Promise((reject,resolve)=>{
//     setTimeout(()=>{
//         let a=true;
//         if(a)  resolve("this good to have")
//         else  reject(new Error("not good to have"))
//     },2000)
    
// })

// console.log(sub.then((res)=>console.log(res)))

// message("roadside code").then((res)=>console.log(res))
// likethevideo("plzzz like and subscribe to my channel").then((res)=>console.log(res))
// subsrcibeto("pllzzz make it large code base of india").then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// message("roadside code").then((res)=>{console.log(res)
//   return (
//     likethevideo("plzzz like and subscribe to my channel")
//   )}).then((res)=>{console.log(res)
// return (subsrcibeto("pllzzz make it large code base of india"))
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>
// console.log(err,"err"))



// promise.all return the array with fullfilled result , if one get reject then it rejects the whole promise

Promise.all([message("roadside code"),likethevideo("plzzz like and subscribe to my channel"),subsrcibeto("pllzzz make it large code base of india")])
.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})


const result =async()=>{
   const m1=await message("roadside code")
  const m2= await likethevideo("plzzz like and subscribe to my channel")
  const m3=await subsrcibeto("pllzzz make it large code base of india")

  return {m1,m2,m3}

}

console.log(result(),"result")


function promiseRecur(prom){
    if(prom.length===0) return ;
    const promresult=prom.shift();
    promresult.then((res)=>console.log(res)).catch((err)=>console.log(err))
    promiseRecur(promresult)
}

promiseRecur([message("roadside code"),likethevideo("plzzz like and subscribe to my channel"),subsrcibeto("pllzzz make it large code base of india")])


function promiseAll(prom){
    let result=[]
    return new Promise((resolve , reject)=>{
        prom.forEach((element,index) => {
            element.then((res)=>{
                result.push(element)
                if(index===prom.length-1)resolve(result)

            }).catch((err)=>reject(err))
            
        });
    })
}