Array.prototype.selfconcat=function(arr){
   let a=[];
   for(let i=0;i<this.length;i++){
    a.push(this[i])
   }
   for(let j=0;j<arr.length;j++){
    a.push(arr[j])
   }
   return a
}
Array.prototype.firstIndex=function(value){
    for(let i=0;i<this.length;i++){
        if(this[i]===value){
            return i
        }
    }
}
Array.prototype.lastIndexOf1=function(value){
    for(let i=this.length-1;i>0;i--){
        if(this[i]===value){
            return i
        }
    }
}
Array.prototype.atValue=function(index){
    for(let i=0;i<this.length;i++){
        if(i===index){
            return this[i]
        }
    }
}
Array.prototype.myMap=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}
Array.prototype.myFilter=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
       if(cb(this[i],i,this)){
        temp.push(this[i])
       }
    }
    return temp
}
Array.prototype.AtInculdes=function(value,formIndex=0){
    for(let i=formIndex;i<this.length;i++){
        if(this[i]===value){
            return true
        }
    }
    return false
}
Array.prototype.reverse1=function(){
    let start=0;
    let end=this.length-1;
    while(start<=end){
       let temp=this[start];
       this[start]=this[end];
       this[end]=temp
       start++;
       end--;
    }
    return this
}
Array.prototype.joinThis=function(joinedValue){
    let str=this[0];
    for(let i=1;i<this.length;i++){
        str=str+joinedValue+this[i]
    }
    return str
}
Array.prototype.ToString=function(){
    let str=this[0];
    for(let i=1;i<this.length;i++){
        str=str+","+this[i]
    }
    return str
}
Array.prototype.UnShift2=function(...args){
   return [...args,...this]
   
}
Array.prototype.reduce=function(cb,initialValue){
    let accumulator=initialValue;
    for(let i=0;i<this.length;i++){
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i]
    }
    return accumulator
}
Array.prototype.shift=function(){
    return this.slice(1,this.length)
}

Array.prototype.fill=function(value,start=0){
    if(start<-this.length) start=0;
    if(end>this.length) return []
    for(let start;start<end;start++){
        this.push(value)
    }
}
Array.prototype.find1=function(cb){
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            return this[i]
        }
    }
    return "not found"
}
Array.prototype.findIndex1=function(cb){
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            return i
        }
    }
    return "not found"
}

Array.prototype.findLast1=function(cb){
    for(let i=this.length;i>0;i--){
        if(cb(this[i],i,this)){
            return this[i]
        }
    }
    return "not found"
}

Array.prototype.forEach1=function(cb){
    for(let i=0;i<this.length;i++){
        return cb(this[i],i,this)
    }
}

Array.prototype.findLastIndex1=function(cb){
    for(let i=this.length;i>0;i--){
        if(cb(this[i],i,this)){
            return i
        }
    }
    return "not found"
}

Array.prototype.every1=function(cb){
    let a=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
           a.push(0)
        }
        else{
            a.push(1)
        }
    }
    let sum=a.reduce((acc,curr)=>acc+curr,0);
    return sum===0?true:false
}

Array.prototype.reduceRight1=function(cb,initialValue){
    let accumulator=initialValue;
    for(let i=this.length;i>=0;i--){
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i]
    }
    return accumulator
}

Array.prototype.push1=function(value){
    this[this.length]=value;
    return this
}
Array.prototype.pop1=function(){
    if(this.length===0) return undefined;
    else{
        var poppedItem=this[this.length-1];
        this.length--
    }
    return this
}






