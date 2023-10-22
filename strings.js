// function revesreString1(str){

// }


// function reverse(str,left ,right){
//     console.log(str)
//     if(str.length<2 || !str) return
//     while(left<right){
//         let temp=str[left];
//         console.log(str.substr(0,left),"str.substr(0,left)")
//         str=str.substr(0,left)+str[right]+str.substr(left+1);
//         console.log(str)
//         str=str.substr(0,right) +temp+str.substr(right+1);
//         left++;
//         right--;
//     }
//     return str
// }


// console.log("string".substr(0))
// console.log(reverse("string",0,"string".length))


function reverse1(str,start,end){
    console.log(start,end,str.length)
    if(start<0 || end >=str.length || start>=end){
        return "invalid string"
    }

    const firstString=str.slice(0,start);
    const laststring=str.slice(end+1);
    const middleString=str.slice(start,end+1).split("").reverse().join("")
    console.log( firstString+middleString+laststring)

}

console.log(reverse1('stringwale',2,4))