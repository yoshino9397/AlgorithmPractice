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

///2,Longest Substring Without Repeating Characters
const lengthOfLongestSubstring = function (s) {
  if (s.length < 2) {
    return s.length;
  }
  var map = [];
  var len = 0;
  var maxLen = len;
  var start = 0;

  for (let i = start; i < s.length; i++) {
    c = s[i];
    if (map[c] !== undefined && map[c] >= start) {
      start = map[c] + 1; // start new search with repeated word's last location + 1
      len = i - start; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
    }
    len++; // real length -> from for example 3 to 5 is 3, so it's 5-3+1 and + 1 happens later
    if (len > maxLen) {
      maxLen = len;
    }
    map[c] = i;
  }
  return maxLen;
};
console.log(lengthOfLongestSubstring("pwwkew"));

/// 7,Valid Parentheses
const isValid = function (s) {
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c == "{" || c == "(" || c == "[") {
      stack.push(c);
    } else if (c == "}" || c == ")" || c == "]") {
      let a = stack.pop();
      if (
        !a ||
        (a == "{" && c !== "}") ||
        (a == "[" && c !== "]") ||
        (a == "(" && c !== ")")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValid("()["));

/// 8,Merge Two Sorted Lists
const mergeTwoLists = function (list1, list2) {
  let arr = [...list1, ...list2];
  arr.sort((a, b) => a - b);
  return arr;
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 5]));

/// 14,Maximum Subarray
const maxSubArray = function (nums) {
  var sum = 0;
  var max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

///20 Climbing Stairs
var climbStairs = function (n) {
  let n1 = 1;
  let n2 = 1;

  // n1 and n2 stands for how many ways it can reach n taking one step or two steps, such as n - 1 and n - 2
  for (let i = 2; i <= n; i++) {
    let ways = n1 + n2;
    n1 = n2;
    n2 = ways;
  }

  return n2;
};

console.log(climbStairs(6));

///26 Same tree
const isSameTree = (Array.prototype.equals = function (getArray) {
  if (this.length != getArray.length) return false;

  for (var i = 0; i < getArray.length; i++) {
    if (this[i] instanceof Array && getArray[i] instanceof Array) {
      if (!this[i].equals(getArray[i])) return false;
    } else if (this[i] != getArray[i]) {
      return false;
    }
  }
  return true;
});
var p = [1, 2, 3];
var q = [1, 2, 3];
var g = [1, 3, 2];
var h = [1, null, 2];
console.log("Comparing a1 and a2", p.equals(g));
