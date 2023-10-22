const cart =['shows','pants','shirts'];

// api.createOrder(cart, function() {
//     api.proceedPayment(payment, function(){
//         api.showOrderSummay(summary , function(){
//             api.orderDeatils(order , function(){
//                 api.updateWallet()
//             })
//         })
//     })
// });

// inversion of loop , while you are coding ,it will become hell if something wrong is written on the first one



let a=1;
let a1=8
var sub;
var f;

if(a!=6){
    sub=Promise.resolve("a values is correct")
}
if(a1===8){
    console.log(a1,"a1")
   f= Promise.reject("no a doesnot stand with that value")
}

var g=Promise.resolve("a value is not good")

var b=Promise.resolve("have a good day")

sub.then((res)=>console.log(res)).catch((err)=>console.log(err))


const b1 = Promise.all([b,g,sub])
console.log(Promise.all([b,g,sub]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)}))
b1.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
console.log(b1.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)}))

const b2=Promise.race([b,f,g,sub]).then((res)=>console.log(res)).catch((err)=>console.log(err))
console.log(b2)

const b3=Promise.allSettled([f,b,g,sub]).then((res)=>console.log(res)).catch((err)=>console.log(err))
console.log(b3)


const result=async()=>{
    try{

        const message1=await sub();
        const message2=await f();
        const message3=await b();
        return {message1,message2,message3}
    }catch{
        console.log("promise fail")
    }
}
console.log(result(),"result")






