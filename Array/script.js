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
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (map[val]) {
      return true;
    } else {
      map[val] = true;
    }
  }
  return false;
};
console.log(containsDuplicate([7, 1, 5, 5]));
