///1,Two Sum
const twoSum = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr[nums[i]] >= 0) {
      return [arr[nums[i]], i];
    }
    arr[target - nums[i]] = i;
  }
  return arr;
};
console.log(twoSum([2, 7, 11, 15], 9));
