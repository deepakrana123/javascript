// bubble sort
// decreasing order
var bubblesort=(nums)=>{
    for(let i=0;i<nums.length;i++){
        for(j=i;j<nums.length;j++){
            if(nums[i]<nums[j+1]){
                [nums[i],nums[j+1]]=[nums[j+1],nums[i]]
            }
        }
    }
    console.log(nums,"nums")
}
console.log(bubblesort([2,1,4,3,6,9,4,10]))

// increasing order
var bubblesort1=(nums)=>{
    for(let i=0;i<nums.length;i++){
        for(j=i;j<nums.length;j++){
            if(nums[i]<nums[j+1]){
                [nums[i],nums[j+1]]=[nums[j+1],nums[i]]
            }
        }
    }
    console.log(nums,"nums")
}
console.log(bubblesort1([2,1,4,3,6,9,4,10]))