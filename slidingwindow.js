function maxSlidingWindow(nums, k){
    let result=[];
    let n=nums.length;
    for(let i=0;i<=n-k;i++){
        let max=nums[i];
        for(let j=1;j<k;j++){
            if(nums[j+i]>max){
                max=nums[j+i]
            }
        }
        result.push(max)
    }
    return result
}

console.log(maxSlidingWindow([1,-1,3,2,-1,4,-6,9,7],3))