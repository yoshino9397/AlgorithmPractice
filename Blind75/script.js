//////////////////////////////////////// easy ////////////////////////////////////////

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
var countBits = function (num) {
  var ans = [0];
  for (let i = 1; i <= num; i++) {
    ans[i] = (ans[i] || 0) + ans[i & (i - 1)] + 1;
  }
  return ans;
};
console.log(countBits(5));

///７４. Subtree of Another Tree
var isSubtree = function (s, t) {
  let treeMap = {};
  changeTreeToString(s, true);
  let str = changeTreeToString(t);
  return treeMap[str] ? true : false;

  function changeTreeToString(node, setMap) {
    if (!node) {
      return "";
    }
    let str1 = changeTreeToString(node.left, setMap);
    let str2 = changeTreeToString(node.right, setMap);
    let str3 =
      node.val +
      (str1.length ? "/" + str1 : "") +
      (str2.length ? "/" + str2 : "");
    if (setMap) {
      treeMap[str1] = true;
      treeMap[str2] = true;
      treeMap[str3] = true;
    }
    return str3;
  }
};
console.log(isSubtree([3, 4, 5, 1, 2], [4, 1, 2]));

//////////////////////////////////////// medium ////////////////////////////////////////

//// 3.Longest Palindromic Substring
var longestPalindrome = function (string) {
  let longestPal = "";

  var getLongestPalindrome = function (leftPosition, rightPosition) {
    // While there is space to expand, and the expanded strings match
    while (
      leftPosition >= 0 &&
      rightPosition < string.length &&
      string[leftPosition] === string[rightPosition]
    ) {
      // Expand in each direction.
      leftPosition--;
      rightPosition++;
    }

    // Store the longest palindrom (if it's the longest one found so far)
    if (rightPosition - leftPosition > longestPal.length) {
      longestPal = string.slice(leftPosition + 1, rightPosition);
    }
  };

  // Loop through the letters
  for (let i = 0; i < string.length; i++) {
    // Find the longest odd palendrome
    getLongestPalindrome(i, i + 1);
    // Find the longest even palendrome
    getLongestPalindrome(i, i);

    // Check if a longer palindrome cannot be found
    if ((string.length - i) * 2 < longestPal.length) {
      // Break out to avoid unnecessary computation
      break;
    }
  }
  return longestPal;
};
console.log(longestPalindrome("babad"));

/// 4.Container With Most Water
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let contain = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(contain, max);
    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

/// 5.3Sum
var threeSum = function (nums) {
  let result = [];
  if (nums.length === 0 || nums.length < 3) {
    return result;
  }
  nums.sort(function (a, b) {
    return a > b ? 1 : -1;
  });

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      var target = 0 - nums[i];

      j = i + 1;
      k = nums.length - 1;

      while (j < k) {
        if (nums[j] + nums[k] === target) {
          result.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;
          while (j < k && nums[j] === nums[j - 1]) {
            j++;
          }
          while (j < k && nums[k] === nums[k + 1]) {
            k--;
          }
        } else if (nums[j] + nums[k] < target) {
          j++;
        } else {
          k--;
        }
      }
    }
  }
  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/// 7.Remove Nth Node From End of List
var removeNthFromEnd = function (head, n) {
  let index = n - 1;
  if (index > -1) {
    head.reverse().splice(index, 1);
  }
  return head.reverse();
};
console.log(removeNthFromEnd([5, 6, 7, 8, 9], 2));

///10.Search in Rotated Sorted Array
var search = function (nums, target) {
  if (nums.length < 2 || nums.includes(target) == false) {
    return -1;
  } else if (target === 0) {
    return nums[0];
  } else {
    const isTarget = (element) => element === target;
    let order = nums.findIndex(isTarget);
    for (let i = 0; i < target + 1; i++) {
      nums.push(nums.shift());
    }
    let result = nums[order];
    return result;
  }
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

///11.Combination Sum
var combinationSum = function (candidates, target) {
  let result = [];
  let output = [];

  if (candidates === null || candidates.length === 0) {
    return result;
  }
  candidates.sort(function (a, b) {
    return a > b ? 1 : -1;
  });
  generate(candidates, result, output, target, 0);

  return result;
};

var generate = function (candidates, result, output, target, index) {
  if (target === 0) {
    result.push(output.slice());
  }
  if (target < 0) {
    return;
  }

  for (var i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] === candidates[i - 1]) {
      continue;
    }

    if (candidates[i] <= target) {
      output.push(candidates[i]);
      generate(candidates, result, output, target - candidates[i], i);
      output.pop();
    }
  }
};
console.log(combinationSum([2, 3, 5], 8));

/// 12.Rotate Image
var rotate = function (matrix) {
  rotateDiagonal(matrix);
  rotateRow(matrix);
};
var swap = function (matrix, x1, y1, x2, y2) {
  var temp = matrix[x1][y1];
  matrix[x1][y1] = matrix[x2][y2];
  matrix[x2][y2] = temp;
};
var rotateRow = function (matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var start = 0;
    var end = matrix[i].length - 1;

    while (start < end) {
      swap(matrix, i, start, i, end);
      start++;
      end--;
    }
  }
};
var rotateDiagonal = function (matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = i; j < matrix.length; j++) {
      swap(matrix, i, j, j, i);
    }
  }
};

/// 13.Group Anagrams
var sort = function (s) {
  var arr = s.split("");
  arr.sort((a, b) => (a > b ? 1 : -1));
  return arr.join("");
};
///文字列の中でアルファベット順に直す式
var groupAnagrams = function (strs) {
  var hash = {};
  for (var i = 0; i < strs.length; i++) {
    var str = strs[i];
    var key = sort(str);

    hash[key] = hash[key] || [];
    hash[key].push(str);
  }
  var result = [];
  for (i in hash) {
    result.push(hash[i]);
  }
  return result;
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

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

/// 15. Spiral Matrix
var spiralOrder = function (matrix) {
  var result = [];

  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return result;
  }

  var rows = matrix.length;
  var cols = matrix[0].length;

  var x = 0;
  var y = 0;

  while (rows > 0 && cols > 0) {
    if (rows === 1) {
      for (var i = 0; i < cols; i++) {
        result.push(matrix[x][y++]);
      }
      break;
    } else if (cols === 1) {
      for (i = 0; i < rows; i++) {
        result.push(matrix[x++][y]);
      }
      break;
    }

    for (i = 0; i < cols - 1; i++) {
      result.push(matrix[x][y++]);
    }
    for (i = 0; i < rows - 1; i++) {
      result.push(matrix[x++][y]);
    }
    for (i = 0; i < cols - 1; i++) {
      result.push(matrix[x][y--]);
    }
    for (i = 0; i < rows - 1; i++) {
      result.push(matrix[x--][y]);
    }

    x++;
    y++;
    cols -= 2;
    rows -= 2;
  }
  return result;
};

///16.Jump Game
var canJump = function (nums) {
  var numLeft = nums[0];
  for (var i = 1; i < nums.length; i++) {
    numLeft--;
    if (numLeft < 0) {
      return false;
    }
    numLeft = Math.max(nums[i], numLeft);
  }
  return true;
};
console.log(canJump([2, 2, 0, 4, 4]));

///17.Merge Intervals
var merge = function (intervals) {
  let arr = [];
  arr.push(intervals.flat()[0]);
  arr.push(intervals.flat()[3]);
  let result = [];
  result.push(arr);

  if (intervals.length > 2) {
    for (let i = 0; i < intervals.length - 2; i++) {
      result.push(intervals[i + 2]);
    }
    return result;
  } else {
    return result;
  }
};
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

/// 18.Insert Interval
var insert = function (intervals, newInterval) {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];

    // If overlaps
    if (
      Math.max(interval[0], newInterval[0]) <=
      Math.min(interval[1], newInterval[1])
    ) {
      newInterval = [
        Math.min(interval[0], newInterval[0]),
        Math.max(interval[1], newInterval[1]),
      ];
      continue;
    }

    // If lower
    if (interval[0] > newInterval[1]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }
    result.push(interval);
  }
  result.push(newInterval);
  return result;
};
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);

/// 19.Unique Paths
var uniquePaths = function (m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }

  var dp = [[1]];
  for (var i = 1; i < n; i++) {
    dp[0][i] = 1;
  }

  for (var j = 1; j < m; j++) {
    dp.push([]);
    dp[j][0] = 1;
  }

  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
console.log(uniquePaths(3, 7));

/// 21.Set Matrix Zeroes
var setZeroes = function (matrix) {
  var result = [];
  let array = [];

  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return result;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(0) == true) {
      result.push(matrix[i].fill(0));
    } else {
      result.push(matrix[i]);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    const zero = (element) => element === 0;
    let index = matrix[i].findIndex(zero);
    result[i].splice(index - 1, 1, 0);
  }

  return result;
};
console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

/// 23.Word Search
var exist = function (board, word) {};

/// 24.Decode Ways
var numDecodings = function (s) {};

/// 25.Validate Binary Search Tree
var isValidBST = function (root) {};
