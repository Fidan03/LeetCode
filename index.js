function productExceptSelf(nums) {
    const prefProduct = new Array(nums.length).fill(1);
    const suffProduct = new Array(nums.length).fill(1);
    const res = new Array(nums.length);

    for (let i = 1; i < nums.length; i++) {
        prefProduct[i] = nums[i - 1] * prefProduct[i - 1];
    }

    for (let j = nums.length - 2; j >= 0; j--) {
        suffProduct[j] = nums[j + 1] * suffProduct[j + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        res[i] = prefProduct[i] * suffProduct[i];
    }

    return res;
}


console.log(productExceptSelf([1,2,3,4]));   //[24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3]));   //[0,0,9,0,0]