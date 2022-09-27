var twoSum = function (nums, target) {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.includes(target - nums[i]) === true &&
      nums.indexOf(nums[i]) < nums.indexOf(target - nums[i])
    ) {
      array.push([nums.indexOf(nums[i]), nums.indexOf(target - nums[i])]);
    }
  }
  return array;
};
console.log(twoSum([2, 7, 11, 15], 9));

var mergeTwoLists = function (list1, list2) {
  let array = [...list1, ...list2];
  return array.sort();
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

var combinationSum = function (candidates, target) {
  let res = [];
  dfsTraversal(candidates, 0, target, [], res);
  return res;
};

const dfsTraversal = (candidates, startIdx, remaining, curPath, res) => {
  if (remaining === 0) {
    res.push(curPath.slice());
  }
  for (let i = startIdx; i < candidates.length; i++) {
    if (remaining - candidates[i] >= 0) {
      curPath.push(candidates[i]);
      dfsTraversal(candidates, i, remaining - candidates[i], curPath, res);
      curPath.pop();
    }
  }
};
console.log(combinationSum([2, 3, 6, 7], 7));

var climbStairs = function (n) {
  var n1 = 1;
  var n2 = 1;
  for (let i = 1; i < n; i++) {
    var ways = n1 + n2;
    n1 = n2;
    n2 = ways;
  }
  return n2;
};
console.log(climbStairs(2));
