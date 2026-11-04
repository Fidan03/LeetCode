function productExceptSelf(nums) {
    let i = nums.length - 1;
    let left = 1;
    let right = 1;
    let productLeft = [];
    let productRight = [];
    
    for(i = 0; i < nums.length; i++){

        productLeft.push(left);
        left *= nums[i];
    }

    for(i = nums.length - 1; i >= 0; i--){
        productRight[i] = right;
        right *= nums[i];
    }

    let answers = productLeft.map((num, index) => num * productRight[index]);
    // console.log(answers);

    // console.log(left, productLeft);
    // console.log(right, productRight);
    
    
    return answers
}


console.log(productExceptSelf([1,2,3,4]));   //[24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3]));   //[0,0,9,0,0]