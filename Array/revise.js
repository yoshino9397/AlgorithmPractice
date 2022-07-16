//////////////////////////////////////// easy ////////////////////////////////////////

/// 1.Two Sum
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if (nums.includes(num) == true) {
      return [i, nums.indexOf(num)];
    }
    return 404;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

/// 7.Valid Parentheses
var isValid = function (s) {
  let arr = ["()", "[]", "{}"];
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(s) === true) {
      return true;
    }
  }
  return false;
};
console.log(isValid("()"));

/// 8.Merge Two Sorted Lists
var mergeTwoLists = function (list1, list2) {
  if (list1 === [] && list2 === []) {
    return [];
  }
  let arr = [];
  arr.push(list1);
  arr.push(list2);
  let result = arr.flat().sort((a, b) => a - b);
  return result;
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

/// 20.Climbing Stairs
var climbStairs = function (n) {
  var n1 = 1;
  var n2 = 1;
  for (var i = 1; i < n; i++) {
    var ways = n1 + n2;
    n1 = n2;
    n2 = ways;
  }
  return n2;
};
console.log(climbStairs(5));

/// 26.Same Tree
var isSameTree = function (p, q) {
  let arr = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === q[i]) {
      arr.push(i);
    }
  }
  if (arr.length === p.length) {
    return true;
  }
  return false;
};
console.log(isSameTree([1, 2, 3], [1, 2, 3]));

/// 28.Maximum Depth of Binary Tree
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// console.log(maxDepth([3, 9, 20, null, null, 15, 7]))

/// 30.Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
  var max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        let diff = prices[j] - prices[i];
        if (max < diff) {
          max = diff;
        }
      }
    }
  }
  return max;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

/// 32.Valid Palindrome
var isPalindrome = function (s) {
  let word = s.toLowerCase().replace(/[^0-9a-z]/gi, "");
  let sakasa = word.split("").reverse().join("");
  if (word === sakasa) {
    return true;
  }
  return false;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));

/// 36.Linked List Cycle
var hasCycle = function (head, pos) {
  if (head.length < 2 || head.length - 1 === pos) {
    return false;
  }
  return true;
};
console.log(hasCycle([3, 2, 0, -4], 3));

/// 40. Reverse Bits
var reverseBits = function (n) {
  let num = n.split("").reverse().join("");
  let result = parseInt(num, 2);
  return Math.abs(result);
};
console.log(reverseBits("00000010100101000001111010011100"));


