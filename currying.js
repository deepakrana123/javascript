 console.log("currying")


 function sum(A,b){
    return a+b;
 }


 function sum1(a){
    return b=(c)=>{
        return d=(e)=>{
            return a+c+e
        }
    }
 }

 console.log(sum1(2)(4)(6))


 function currying(func){
    return function curriedFunc(...args){
     if(args.length>=func.length){
        return func(...args)
     }
     else{
        return function(...next){
            return curriedFunc(...args,...next)
        }
     }
    }
 }