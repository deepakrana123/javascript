// var maxProduct = function(nums) {
//     let a=-Infinity;
//     let product=1;
//     for(let i=0;i<nums.length;i++){
//         product*= nums[i];
//         a = Math.max(a,product);
//         if(product===0){
//             product=1
//         }
//     }
//     product=1;
//     for(let i=nums.length-1;i>=0;i--){
//         product*=nums[i];
//         a=Math.max(a,product);
//         if(product==0){
//             product=1
//         }
//     }
//     return a
//   };

// // console.log(maxProduct([-2]))

// var percentageLetter = function(s, letter) {
//     let count=0;
//     for(let i=0;i<s.length;i++){
//         if(s.charAt(i)===letter){
//             count++
//         }
//     }
//     return parseInt((count/s.length)*100)
// };
// // console.log(percentageLetter( "foobar", "o"))

// var firstUniqChar = function(s) {
//     let map=new Map();
//     let a=[]
//     for(let i=0;i<s.length;i++){
//         let value=s.charAt(i);
//         if(map.has(value)){
//             map.set(value,map.get(value)+1)
//         }
//         else{
//             map.set(value,1)
//         }
//     }
//     for (const [key, value] of map) {
//         if(value===1){
//             a.push(key)
//             return s.indexOf(key)
//         }
//         else{
//             return -1
//         }
//       }
//       console.log(a)
// };
// console.log(firstUniqChar("loveleetcode"))

var sumSubarrayMins = function(arr) {
   let ans=[];
    for(let i=0;i<arr.length;i++){
      ans.push(arr[i])
      for(let j=i+1;j<arr.length;j++){
         console.log(ans,"ans")
         if(ans[ans.length-1]>arr[j]){
            ans.push(arr[j])
         }
      }
    }
 };
 console.log(sumSubarrayMins([3,1,2,4]))
