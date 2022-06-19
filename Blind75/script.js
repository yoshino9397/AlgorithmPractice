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
  let map = [];
  let len = 0;
  let maxLen = len;
  let start = 0;

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
  let stack = [];
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
  let sum = 0;
  let max = -Infinity;

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
let climbStairs = function (n) {
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

  for (let i = 0; i < getArray.length; i++) {
    if (this[i] instanceof Array && getArray[i] instanceof Array) {
      if (!this[i].equals(getArray[i])) return false;
    } else if (this[i] != getArray[i]) {
      return false;
    }
  }
  return true;
});
let p = [1, 2, 3];
let q = [1, 2, 3];
let g = [1, 3, 2];
let h = [1, null, 2];
console.log(p.equals(g));

/// 28.Maximum Depth of Binary Tree
// var maxDepth = function (root) {
//   if (root === null) {
//     return 0;
//   }
//   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };
// console.log(maxDepth([3, 9, 20, null, null, 15, 7]));

/// 30.Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0;
  }
  let maxProfit = 0;
  let maxStock = Math.max(prices[prices.length - 1], prices[prices.length - 2]);
  for (let i = prices.length - 2; i > -1; i--) {
    let profit = maxStock - profit[i];
    maxStock = Math.max(maxStock, profit);
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};

/// 32id Palindrome
var isPalindrome = function (s) {
  let lower = s.toLowerCase();
  let a = lower.replace(/ /g, "").replace(/[^0-9a-z]/gi, "");
  let sakasa = a.split("").reverse().join("");

  if (a == sakasa) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));

/// 36.Linked List Cycle
var hasCycle = function (head) {
  let pos;
  if (head.length < 0) {
    return false;
  } else if (head.length - 1 < pos) {
    return false;
  } else {
    return true;
  }
};

/// 40.Reverse Bits
var reverseBits = function (n) {
  let a = parseInt(n.toString(2).split("").reverse().join(""), 2);
  return a;
};
console.log(reverseBits("11111111111111111111111111111101"));

///41. Number of 1 Bits
var hammingWeight = function (n) {
  let array = Array.from(String(n), Number);
  let weight = 1;
  for (let i = 0; i < array.length; i++) {
    weight += array[i];
  }
  return weight;
};
console.log(hammingWeight("101"));

///44. Reverse Linked List
var reverseList = function (head) {
  let arr = [];
  let num = head.reverse();
  arr.push(num);
  return arr[0];
};
console.log(reverseList([1, 2, 3, 4]));

///50. Contains Duplicate
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i + 1];
    return true;
  }
  return false;
};
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

/** Binary Tree **/
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

///51. Invert Binary Tree
/// wakaran
var invertTree = function (root) {
  const reverseNode = (node) => {
    if (node == null) {
      return null;
    }
    reverseNode(node.left);
    reverseNode(node.right);
    let holdLeft = node.left;
    node.left = node.right;
    node.right = holdLeft;
    return node;
  };

  return reverseNode(root);
};
console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));

///53. Lowest Common Ancestor of a Binary Search Tree
var lowestCommonAncestor = function (root, p, q) {
  const low = Math.min(p.val, q.val);
  const high = Math.max(p.val, q.val);
  let ancestor = null;

  const aux = (node) => {
    if (!node) {
      return;
    }
    if (node.val >= low && node.val <= high) {
      ancestor = node;
    } else if (node.val <= low) {
      aux(node.right);
    } else {
      aux(node.left);
    }
  };
  aux(root);
  return ancestor;
};
console.log(
  lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4)
);

///56. Valid Anagram
var isAnagram = function (s, t) {
  var hash = {};

  if (s === null || t === null || s.length !== t.length) {
    return false;
  } else {
    for (i = 0; i < s.length; i++) {
      var sval = s[i];
      var tval = t[i];

      if (hash[sval] === undefined) {
        hash[sval] = 0;
      }

      if (hash[tval] === undefined) {
        hash[tval] = 0;
      }
      hash[sval]++;
      hash[tval]--;
    }

    for (var j in hash) {
      if (hash[j] !== 0) {
        return false;
      }
    }

    return true;
  }
};
console.log(isAnagram("cat", "car"));

///60. Missing Number
var missingNumber = function (nums) {
  var res = 0;
  if (nums.length === null) {
    return false;
  } else {
    for (var i = 1; i <= nums.length; i++) {
      res = res ^ i ^ nums[i - 1];
    }
    return res;
  }
};
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

///67. Counting Bits
var countBits = function (n) {};
console.log(countBits(5));
