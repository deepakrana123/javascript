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

var maximumSubarraySum = function(nums, k) {
    let sumMax=-1;
   let start=0;
   let end=0;
   var sum=0;
   console.log(arr,k,"k")
   while(end<nums.length){
       sum=sum+nums[end];
       if(end-start+1<k){
           end++;
       }
       else if(end-start+1==k){
           if(sum>sumMax){
               sumMax=sum
           }
           console.log()
           sum=sum-arr[start];
           start++;
           end++
       }
   }
  if(sumMax==-1){
      return 0
  }  
  return sumMax
};

console.log(maximumSubarraySum([3,5,3,4],2))


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
function sildingWindow(nums,k){
    let start=0;
    let end=0;
    let maxSum=-Infinity
    var sum=0;
    while(end<nums.length){
    sum=sum+nums[end];
        if(end-start+1<k){
            end++
        }
        else if(end-start+1==k){
            if(sum>maxSum){
                maxSum=sum;
            }
            console.log(maxSum)
            sum=sum-nums[start];
            console.log(sum)
            start++;
            end++;
        }
    }
    return maxSum;
}


function firstnegative(nums,k){
    let a=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<i+k;j++){
            if(nums[j]<0){
                a.push(nums[j])
                break
            }
        }
    }
    return a
}
console.log(firstnegative([1,-2,3,-4,-5,-1,2],3))

function firstnegative1(nums,k){
    let a=[];
    let start=0;
    let end=0;
    let s=[];
    while(end<nums.length){
        if(nums[end]<0){
            s.push(nums[end])
        }
        if(end-start+1<k){
            end++
        }
        else if(end-start+1==k){
            if(s.length===0){
                a.push(0)
            }
            else {
            a.push(s[0])
            if(s[0]===nums[start]){
            s.shift()
            }
            }
            start++
            end++
        }
    }
    return a
}
console.log(firstnegative1([1,-2,3,-4,-5,1,2,3-1,2],3))
// first neg number of widnow size k

var nextGreaterElementsRight = function(nums) {
    let ans=[];
    let stack=[];
    for(let i=nums.length-1;i>=0;i--){
        if(stack.length===0){
            ans.push(-1)
        }
        else if( stack.length >0 && stack[stack.length-1]>nums[i]){
               ans.push(stack[stack.length-1])
        }
        else if(stack.length >0 && stack[stack.length-1]<=nums[i]){
            while(stack.length >0 && stack[stack.length-1]<=nums[i]){
            stack.pop()
            if(stack.length===0){
                ans.push(-1)
            }
            else if(stack[stack.length-1]>nums[i]){
                ans.push(stack[stack.length-1])
            }
            }
        }
        stack.push(nums[i])
    }
    console.log(ans.reverse(),stack)
};
var nextGreaterElementsLeft = function(nums) {
    let ans=[];
    let stack=[];
    for(let i=0;i<=nums.length-1;i++){
        if(stack.length===0){
            ans.push(-1)
        }
        else if( stack.length >0 && stack[stack.length-1]>nums[i]){
               ans.push(stack[stack.length-1])
        }
        else if(stack.length >0 && stack[stack.length-1]<=nums[i]){
            while(stack.length >0 && stack[stack.length-1]<=nums[i]){
            stack.pop()
            if(stack.length===0){
                ans.push(-1)
            }
            else if(stack[stack.length-1]>nums[i]){
                ans.push(stack[stack.length-1])
            }
            }
        }
        stack.push(nums[i])
    }
    console.log(ans,stack)
};
console.log(nextGreaterElements([1,2,3,4,3]))
function stockspan(arr){
    let s=[];
    let response=[];
    let a=[]
    let b=[]
    for(let i=0;i<arr.length;i++){
        if(s.length===0){
            response.push(-1)
            a.push(-1)
        }
        else if(s.length>0 && s[s.length-1][0]>arr[i]){
            response.push(s[s.length-1][1])
            a.push(s[s.length-1][0])
            
        }
        else if(s.length>0 && s[s.length-1][0]<=arr[i]){
            // console.log(s)
            while(s.length>0 && s[s.length-1][0]<=arr[i]){
                s.pop()
            }
            if(s.length===0){
                response.push(-1)
                a.push(-1)
            }
            else if(s[s.length-1][0]>arr[i]){
                response.push(s[s.length-1][1])
                a.push(s[s.length-1])
            }
        }
        s.push([arr[i],i])
    }
    for(let i=0;i<arr.length;i++){
        b.push(i-response[i])
    }
    return b
}
console.log(stockspan([100,80,60,70,60,75,85]))

