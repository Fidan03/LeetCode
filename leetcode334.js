let increasingTriplet = function(nums) {
    let n = nums.length;
    let first = Infinity;
    let second = Infinity;
    
    for(let i = 0; i < n; i++){
        let current = nums[i];

        if(current <= first){
            first = nums[i];
        }else if(current > first && current <= second){
            second = current;
        }else{
            return true
        }
    }
    return false 
    
};


console.log(increasingTriplet([1,2,3,4,5]));  //true
console.log(increasingTriplet([5,4,3,2,1]));   //false
console.log(increasingTriplet([2,1,5,0,4,6]));   //true