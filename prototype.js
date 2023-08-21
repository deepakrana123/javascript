Array.prototype.map=function(cb){
    let ar=[]
    for(let i=0;i<this.length;i++){
        ar.push(cb(this[i],i,this))
    }
    return arr
}


Array.prototype.filter=function(cb){
    let ar=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){

            ar.push(cb(this[i],i,this))
            }    }
    return arr
}


Array.prototype.reduce=function(cb,initalValue){
    let acc=initalValue;
    for(let i=0;i<this.length;i++){
        acc=acc?cb(acc,this[i],i,this):this[i]
    }
    return acc

}


const obj={
    name:"devendra"
}

function say(yes){
    return "name"+ " " + this.name +" " +yes;
}

console.log(say.call(obj,"why"))

function forsay(yes){
    return "name" + " " + this.name + " " + yes
}

console.log(say.apply(obj, ["yes know not"]))

const abc=forsay.bind()
console.log(abc("bind"))



Function.prototype.myCall= function(context={},...args){
    if(typeof this !='function'){
        throw new Error("")
    }
    context.fn=this;
    context.fn(...args)
}

Function.prototype.myApply= function(context={},args){
    if(typeof this !='function'){
        throw new Error("")
    }
    if(typeof args !='object'){
        throw new Error("hjkl")
    }
    context.fn=this;
    context.fn(...args)
}

Function.prototype.myBind= function(context={},...args){
    if(typeof this !='function'){
        throw new Error("")
    }
    
    context.fn=this;

    return function(...newArgs){
    return  context.fn(...args,...newArgs)
}}


// most important topic debounce and throttling

function merge(a,b){
    let i=0 ;
    let j=0;
    let n=a.length;
    let m=b.length;
    let k=0
    let ar=[]
    
    while(i<n & j<m){
        if(a[i]<b[j]){
              ar[k]=ar[i];
              k=k+1;
              i=i+1
        }
        else{
            ar[k]=ar[j];
            k=k+1
            j=j+1
        }
    }
    while(i<n){
        ar[k]=ar[i];
              k=k+1;
              i=i+1
    }
    while(j<m){
        ar[k]=ar[j];
              k=k+1;
              j=j+1
    }
}
