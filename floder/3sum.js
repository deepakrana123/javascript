var twoSum=function(nums,target,start,end){
  let r=[]
    while(start<end){
        if(nums[start]+nums[end]>target){
            end--
        }
        else if(nums[start]+nums[end]<target){
            start++
        }
        else{
            while(nums[start]===nums[start+1] && start<end) start++;
            while(nums[end]===nums[end-1] && start<end) end--
            r.push([-target,nums[start],nums[end]])
            start++;
            end--;
        }
    }
   return r
   
}
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    var result=[]
    if(nums.length<3){
        return {}
    }
    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i]===nums[i-1]){
            continue;
        }
        let n1=nums[i];
        let target=-n1;
        let r=twoSum(nums,target,i+1,nums.length-1)
        result.push(r)
    }
    const filteredArray = result.filter(subArray => subArray.some(item => item !== undefined));
       console.log(filteredArray)
       return filteredArray
    
};
// console.log(threeSum([-1,0,1,2,-1,-4]))

var makeGood = function(s) {
    let a=[];
    for(let i=0;i<s.length;i++){
        console.log(a,i)
        a.push(s.charAt(i))
        if(a[a.length-1].toUpperCase()===s.charAt(i+1)){
            console.log(a[a.length-1],s.charAt(i))
            a.pop()
            i=i+1
        }
    
    }
    console.log(a.join(''))
};
    console.log(makeGood("abBAcC"))

