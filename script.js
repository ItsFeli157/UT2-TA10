function getSum(nums){
    const sum = nums.reduce((total,num) => total + num, 0);
    console.log(sum);
    return sum;
}

const nums = [10,20,5,5];

getSum(nums);