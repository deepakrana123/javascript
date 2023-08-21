console.log("hlo string")
const a="string1";
const b='string2 vhloo bhloo';
const c=`a
vhloo
bhloo
vhloo string1`
console.log`a`
console.log`hiii ${"devendra"} what yout ${"plan"}`

function test(pass , the ,interview){
    console.log(pass,the,interview)
    return
}

const devendra="dev1"
const plan="plan1"
test`hiii ${devendra} what yout ${plan}`

console.log(a.length);
console.log(a[0])
console.log(a.charAt(1))

for(let i=0;i<a.length;i++){
    console.log(a[i])
}

console.log(a.split("").reverse().join(""))
function truncate(s,maxlength){
    if(s.length<=maxlength){
        return s
    }
    return s.slice(0,maxlength-1).concat("...")

}
console.log(truncate(b,8))

function palindrome(a,b){
    a=String(a)
    b=String(b)
    console.log(a,b,a.split("").reverse().join(""),b.split("").reverse().join(""))
    if(a.split("").reverse().join("")==a){
        return true;
    }
    return false;
}

console.log(palindrome(121))

const isPlaindrome=function(a){
    a=String(a)
    if(a.split("").reverse().join("")==a){
        return true;
    }
    return false;
}
const bc=isPlaindrome(121)
console.log(bc)

const abc="hello";
const bcd="helwa";

function hammingDistance(a,b){
       if(a.length !=b.length){
          throw new Error("not valid please give both string of same length")
       }
       let count=0;
       for(let i=0;i<a.length;i++){
          if(a[i]!=b[i]){
            count++
          }
       }
       return count;
}
console.log(hammingDistance("abc","bca"))

function hammingDistanceBinary(a,b){
    a=a.toString(2)
    b=b.toString(2)
    console.log(a,b)
    if(a.length<b.length){
        while(a.length!==b.length) x="0"+x;
    }else{
        while(a.length!==b.length)
        y="0"+y
    }
    let count=0;
       for(let i=0;i<a.length;i++){
          if(a[i]!=b[i]){
            count++
          }
       }
       return count;
}
console.log(hammingDistanceBinary(2,3))
