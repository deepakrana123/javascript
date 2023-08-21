function findSecondLargest(a){
    let b= Array.from(new Set(a))
    // return b[b.length-2]
    b.sort((a,b)=>b-a)
    // return c[c.length-2]
    if(b.length>=2){
        return b[1]
    }
    else{
        return -1
    }


}

function findSecondLargests(a){
    let first=Number.NEGATIVE_INFINITY;
    let second=Number.NEGATIVE_INFINITY;
    let thrid=Number.NEGATIVE_INFINITY;
    for(let i=0;i<a.length;i++){
        if(a[i]>first){
            thrid=second
            second=first
            first=a[i]
        }
        else if(a[i]!=first && a[i]>second){
            third=second
            second=a[i]
        }
        else if(a[i]!=second && a[i]>thrid){
            third=a[i]
        }
    }
    return thrid
}

console.log(findSecondLargests([1,5,2,7,9,10,12,18,12,10,20]))
console.log(findSecondLargest([1,5,2,7,9,10,12,18,12,10,20]))

function rotatedAnArray(a,b){
    if(b<=0){
        return a
    }
    for(let i=0;i<b;i++){

        let c=a.pop();
        console.log(c)
        a.unshift(c)
    }
    return a
}
console.log(rotatedAnArray([2,1,4,3],2))

function rotatedAnArray1(a,b){
    if(a.length>b){
        b=a.length%b;
    }
    let c=a.slice(a.length-b,a.length)
    

    return c.concat(a.slice(0,a.length-b))
}
console.log(rotatedAnArray1([2,1,4,3,5],2))

function reverse1(nums,left,right){
       while(left<right){
        const temp=nums[left]
        nums[left++]=nums[right]
        nums[right--]=temp
       }
       return nums

}
function rotate(a,b){
     reverse1(a,0,a.length);
     reverse1(a,0,b-1);
     reverse1(a,b,a.length-1)
    return a
}
console.log(rotate([2,1,4,3,5],2))