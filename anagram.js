// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//     console.log(s.length,t.length)
//     let a={};
//     if(s.length!=t.length){
//         return false
//     }
//     for(let i=0;i<=s.length-1;i++){
//         console.log(s[i],s[i+1])
//         if(a[s[i]]){
//             a[s[i]]=a[s[i]]+1
//         }
//         else{
//             a[s[i]]=1
//         }
//     }
//     console.log(a)
//      for(let i=0;i<=t.length-1;i++){
//         console.log(t[i],a)
//         if(a.hasOwnProperty(t[i])){
//             console.log(a,t[i])
//             a[t[i]]=a[t[i]]-1
//             if(a[t[i]]==0){
//                 delete a[t[i]]
//             }
//         }
//         else{
//             a[t[i]]=1
//         }
//     }
//     console.log(a)
//     return Object.keys(a).length===0?true:false
// };

// console.log(isAnagram("a","b"))


var insertInterval=(intervals, newInterval)=>{
    const result=[]
    for(const item of intervals){
      if(item[1]<newInterval[0] ){
        console.log(item)
       result.push(item)
      }
      else if(item[0]>newInterval[1]){
       result.push(newInterval)
       newInterval=item
      }
      else{
       newInterval[0]=Math.min(item[0],newInterval[0])
       newInterval[1]=Math.max(item[1],newInterval[1])
      }
   }
   result.push(newInterval)
   return result

}
console.log(insertInterval([[1,3],[6,9]],[2,5]))


var mergeInterval=(intervals)=>{
    intervals=intervals.sort((a,b)=>a[0]-b[0])
    let results=0;
    let pair=intervals[0]
    for(const interval of intervals){
          if(interval[0]<=pair[1]){
            pair[1]=Math.max(interval[1],pair[1])
          }
          else{
            results.push(pair)
            pair=item
          }

    }
    result.push(pair)
    return result
}
console.log(mergeInterval([[1,3],[2,6],[18,15],[8,10]]))