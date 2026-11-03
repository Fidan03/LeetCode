function productExceptSelf(nums) {
    let i = 0;
    let left = 1;
    let right = nums.length - 1;
    let productLeft = [];
    let productRight = [];
    // let answers = [];
    

    let product = 0;
    for(i = 0; i < nums.length; i++){

        productLeft.push(left);
        left *= nums[i];

        productRight.push(right);
        right *= nums[nums.length - 1];
    }

    // console.log(left, productLeft);
    console.log(right, productRight);
    
    
    return product
}


console.log(productExceptSelf([1,2,3,4]));   //[24,12,8,6]
// console.log(productExceptSelf([-1,1,0,-3,3]));   //[0,0,9,0,0]