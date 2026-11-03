function productExceptSelf(nums) {
    let left = 0;
    let right = 0;
    let productLeft = 0;
    let productRight = 0;
    // let answers = [];

    // let product = 0;
    for(let i = 0; i <= nums.length; i++){
        if(i !== 0){
            right = nums[i-1]
        }

        if(i > nums.length){
            left = nums[i+1]
        }

        // console.log(nums[i],right, left); 
        productLeft *= left;
        productRight *= right;
        right++;
        left++;
        console.log(productLeft, productRight);
    }

    
    return product
}


console.log(productExceptSelf([1,2,3,4]));   //[24,12,8,6]
// console.log(productExceptSelf([-1,1,0,-3,3]));   //[0,0,9,0,0]