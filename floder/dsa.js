function isPlaindrome(x){
    if(x<0) {return}
    if (x===x.toString().split("").reverse()){
        return true
    }
    else false
}

function isPlaindrome1(x){
    if(x<0){return }
    x===x.toString().split("").reverse()?true:false;
     
}

// function isPlaindrome2(x){
//     let a=x.toString();
//     let i=0,j=a.length-1; 
//     console.log(a.length,a)
// //   while(i<=j){
// //     const temp=a[i];
// //     a[i++]=a[j];
// //     a[j--]=temp
// //     console.log(i,j,a[0],a[1],a[2])
// //   }
// //   console.log(x,a)
// //   return (x,a)
// }

// // isPlaindrome2(x)
// console.log(isPlaindrome2(129))

function fibonanic(n){
    let first=0;
    let second=1;
    let next;
    let i=0
    while(i<n){
        next=first+second;
        first=second;
        second=next;
        i++
    }
    return next;

}
console.log(fibonanic(8))

function fibonanic1(n){
    let a=[0,1];
    for(let i=0;i<n;i++){
        a.push(a[i]+a[i+1]);
    }
    return a
}
console.log(fibonanic1(8))

function fibonanic2(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    return fibonanic2(n-1)+fibonanic2(n-2)
}
console.log(fibonanic2(8))


function twosum(a,target){
    for(let i=0;i<a.length;i++){
        for(let j=i;j<a.length;j++){
            if(a[i]+a[j]==target){
                return [i,j]
            }
        }
    }
}

function twoSumByObject(num,target){
    let ob={}
    for(let i=0;i<num.length;i++){
        const n=num[i];
        
        if(ob[target-n]>=0){
            return [ob[target-n],i]
        }
        else{
            ob[n]=i
        }
        console.log(ob[n],ob)

    }
}
console.log(twoSumByObject([9,2,5,1,6],7))