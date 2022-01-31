//Two Sum
const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

///Best Time to Buy and Sell Stock
const maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  let maxProfit = 0;
  let maxStock = Math.max(prices[prices.length - 1], prices[prices.length - 2]);
  for (let i = prices.length - 2; i >= 0; i--) {
    let profit = maxStock - prices[i];
    maxStock = Math.max(maxStock, prices[i]);
    maxProfit = Math.max(profit, maxProfit);
  }
  return maxProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

///Contains Duplicate
const containsDuplicate = function (nums) {
  if (nums === null) {
    return false;
  }
  let map = [];
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (map[val]) {
      return true;
    } else {
      map[val] = true;
    }
  }
  return false;
};
console.log(containsDuplicate([7, 1, 5, 5]));

///Product of Array Except Self
const productExceptSelf = function (nums) {
  let len = nums.length;
  var output = Array(len).fill(1);
  var left = 1;
  var right = 1;
  for (let i = 0; i < len - 1; i++) {
    left *= nums[i];
    right *= nums[len - i - 1];
    output[i + 1] *= left;
    output[len - i - 2] *= right;
  }
  return output;
};
console.log(productExceptSelf([1, 2, 3, 4]));

///Maximum Subarray
const maxSubArray = function (nums) {
  if (nums.length < 2) {
    return nums[0];
  }
  let sum = 0;
  let max = Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(sum, max);
  }
  return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

///Maximum Product Subarray
const maxProduct = function (nums) {
  if (nums.length < 2) {
    return 0;
  }
  var max = nums[0];
  var ans = max;

  for (let i = 1; i < nums.length; i++) {
    var tmax = nums[i] * max;

    max = Math.max(tmax, nums[i]);
    ans = Math.max(ans, max);
  }
  return ans;
};
console.log(maxProduct([2, 3, -2, 4]));

///Find Minimum in Rotated Sorted Array
var findMin = function (nums) {
  ///Find minimum number
  let min = Math.min(...nums)
  return min
  ////////////////////////
  
};
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
