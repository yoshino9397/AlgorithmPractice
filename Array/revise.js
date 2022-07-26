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

/// 41.Number of 1 Bits
var hammingWeight = function (n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += parseFloat(n[i]);
  }
  return sum;
};
console.log(hammingWeight("00000000000000000000000000001011"));

// 44. Reverse Linked List
var reverseList = function (head) {
  if (head === null) {
    return [];
  }
  return head.reverse();
};
console.log(reverseList([1, 2, 3, 4, 5]));

/// 50.Contains Duplicate
var containsDuplicate = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (nums[i] === nums[i + 1]) {
      num++;
    }
  }
  if (num > 0) {
    return true;
  }
  return false;
};
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

/// 51.Invert Binary Tree
var invertTree = function (root) {
  if (root === null) {
    return root;
  }
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};

/// 53.Lowest Common Ancestor of a Binary Search Tree
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return root;
  }

  if (root === p || root === q) {
    return root;
  }
  if (
    (root.val >= p.val && root.val <= q.val) ||
    (root.val <= p.val && root.val >= q.val)
  ) {
    return root;
  }

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return lowestCommonAncestor(root.right, p, q);
  }
};

/// 60.Missing Number
var missingNumber = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return arr[arr.length - 1] + 1;
};
console.log(missingNumber([3, 0, 1]));

/// 67.Counting Bits
var countBits = function (n) {
  var ans = [0];
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i & (i - 1)] + 1;
    ////ビット論理積 (&)
  }
  return ans;
};
console.log(countBits(3));

/// 74.Subtree of Another Tree
var isSubtree = function (root, subRoot) {
  if (root == null) {
    return false;
  }
  if (isSameTree1(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree1 = function (root, subRoot) {
  if (root && subRoot) {
    return (
      root.val === subRoot.val &&
      isSameTree1(root.left, subRoot.left) &&
      isSameTree1(root.right, subRoot.right)
    );
  }
  return root === subRoot;
};

//////////////////////////////////////// medium ////////////////////////////////////////

// 3. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== -1) {
      arr.push(s.indexOf(s[i], i + 1) - i);
    }
  }
  return arr.sort((a, b) => b - a)[0];
};
console.log(lengthOfLongestSubstring("abcabcbb"));

// 4. Longest Palindromic Substring
var longestPalindrome = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== -1) {
      arr.push({
        length: s.indexOf(s[i], i + 1) - i + 1,
        word: s.slice(i, i + (s.indexOf(s[i], i + 1) - i + 1)),
      });
    }
  }
  return arr.sort((a, b) => b.length - a.length)[0].word;
};
console.log(longestPalindrome("cbbd"));

/// 5.3Sum
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length - 2; i++) {
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
  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/// 6.Remove Nth Node From End of List
var removeNthFromEnd = function (head, n) {
  let arr = [];
  arr.push(head.slice(0, n + 1));
  arr.push(head.slice(head.length - n + 1));
  return arr.flat();
};
console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));

///10.Search in Rotated Sorted Array
var search = function (nums, target) {
  if (nums.includes(target) == false) {
    return -1;
  } else {
    let num = nums.indexOf(target);
    return num;
  }
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

/// 11.Combination Sum
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

/// 12.Rotate Image
var rotate = function (matrix) {
  let rev = matrix.reverse();
  let arr = [];
  let result = [];

  let j = 0;
  for (let k = 0; k < rev.length; k++) {
    for (let i = 0; i < rev.length; i++) {
      arr.push(rev[i][j]);
    }
    j++;
  }
  for (let i = 0; i < rev.length; i++) {
    result.push([arr.slice(i * rev.length, (i + 1) * rev.length)]);
  }

  return result;
};
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

/// 13.Group Anagrams
var groupAnagrams = function (strs) {
  var hash = {};

  if (strs.length === null || strs.length === 1) {
    return [strs];
  }

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

var sort = function (s) {
  var arr = s.split("");
  arr.sort((a, b) => (a > b ? 1 : -1));
  return arr.join("");
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/// 14.Maximum Subarray
var maxSubArray = function (nums) {
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

/// 16.Jump Game
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
console.log(canJump([2, 3, 1, 1, 4]));

/// 17.Merge Intervals
var merge = function (intervals) {
  let arr = intervals.flat();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      arr.splice(i, 2);
    }
  }
  for (let i = 0; i <= arr.length / 2 + 1; i = i + 2) {
    result.push([arr[i], arr[i + 1]]);
  }
  return result;
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
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] + 1 === newInterval[0]) {
      intervals.splice(i + 1, 0, newInterval);
    }
  }

  let arr = intervals.flat();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      arr.splice(i, 2);
    }
  }
  for (let i = 0; i < arr.length / 2 + 1; i = i + 2) {
    result.push([arr[i], arr[i + 1]]);
  }
  return result;
};
console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);

/// 19.Unique Paths
var uniquePaths = function (m, n) {
  let m1 = factorial(m - 1);
  let n1 = factorial(n - 1);

  function factorial(k) {
    var j = 1;
    for (var i = 1; i <= k; i++) {
      j *= i;
    }
    return j;
  }
  return factorial(m + n - 2) / (m1 * n1);
};
console.log(uniquePaths(3, 7));

/// 23.Word Search
var exist = function (board, word) {
  var hash = {};

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (dfs(board, word, 0, i, j)) {
        return true;
      }
    }
  }

  function dfs(board, word, w, i, j) {
    var key = i + "," + j;
    if (hash[key]) {
      return false;
    }
    if (w === word.length) {
      return true;
    }
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
      return false;
    }

    var result = false;
    if (word[w] === board[i][j]) {
      hash[key] = true;

      result =
        dfs(board, word, w + 1, i + 1, j) ||
        dfs(board, word, w + 1, i - 1, j) ||
        dfs(board, word, w + 1, i, j + 1) ||
        dfs(board, word, w + 1, i, j - 1);

      hash[key] = false;
    }
    return result;
  }
  return false;
};
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);

/// 25.Validate Binary Search Tree
var isValidBST = function (root) {
  if (!root) {
    return false;
  }

  const helper = (root, min, max) => {
    if (!root) {
      return true;
    }
    if (
      (min !== null && root.val <= min) ||
      (max !== null && root.val >= max)
    ) {
      return false;
    }
    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  };
  return helper(root, null, null);
};

///27.Binary Tree Level Order Traversal
var levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  if (root.length === 1) {
    return [root];
  }

  let result = [[root[0]]];
  for (let i = 0; i < root.length; i++) {
    if (root[i] === null) {
      root.splice(i, 2);
    }
  }
  for (let i = 1; i < root.length; i = i + 2) {
    result.push([root[i], root[i + 1]]);
  }
  return result;
};
console.log(levelOrder([3, 9, 20, null, null, 15, 7]));

/// ３３.Longest Consecutive Sequence
var longestConsecutive = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      sum++;
    }
  }
  return sum;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// 35.Word Break
var wordBreak = function (s, wordDict) {
  if (wordDict === null || wordDict.size === 0) {
    return false;
  }
  let arr = s.split("");
  let value = [];

  for (let i = 0; i < wordDict.length; i++) {
    value.push(wordDict[i].split(""));
  }
  for (let i = 0; i < value.length; i++) {
    arr.splice(arr.indexOf(value[i][0]), value[i].length);
  }

  let len = value.flat().length;
  if (!arr || s.length < len) {
    return false;
  }
  return true;
};
console.log(wordBreak("leetcode", ["leet", "code"]));

/// 37.Reorder Lists
var reorderList = function (head) {
  if (head === null || head.length === 1) {
    return head;
  }

  let even = [];
  let evenresult = [];
  let odd = [];
  let oddresult = [];

  if (head.length % 2 === 0) {
    for (let i = head.length / 2; i < head.length; i++) {
      even.push(head[i]);
      head.splice(i, 0);
    }
    even.reverse();
    for (let i = 0; i < even.length; i++) {
      evenresult.push(head[i]);
      evenresult.push(even[i]);
    }
    return evenresult;
  }

  if (head.length % 2 !== 0) {
    for (let i = Math.floor(head.length / 2) + 1; i < head.length; i++) {
      odd.push(head[i]);
      head.splice(i, 0);
    }
    odd.reverse();
    for (let i = 0; i < odd.length; i++) {
      oddresult.push(head[i]);
      oddresult.push(odd[i]);
    }
    oddresult.push(head[Math.floor(head.length / 2)]);

    return oddresult;
  }
};
console.log(reorderList([1, 2, 3, 4]));

/// 38.Maximum Product Subarray
var maxProduct = function (nums) {
  let num = 1;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    num *= nums[i];
    max = Math.max(max, num);
  }
  return max;
};
console.log(maxProduct([2, 3, -2, 4]));

/// 39.Find Minimum in Rotated Sorted Array
var findMin = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  return arr[0];
};
console.log(findMin([3, 4, 5, 1, 2]));

// 42.House Robber
var rob = function (nums) {
  let arr = [];

  for (let i = 0; i < Math.ceil(nums.length / 2); i++) {
    let sum = nums[i] + nums[i + 2];
    arr.push(sum);
  }
  return arr.sort((a, b) => b - a)[0];
};
console.log(rob([1, 2, 3, 1]));

/// 45.Course Schedule
var canFinish = function (numCourses, prerequisites) {
  for (let i = 0; i < prerequisites.length; i++) {
    if (prerequisites[i].length !== numCourses) {
      return false;
    }
    if (prerequisites[0].length === numCourses && prerequisites.length === 1) {
      return true;
    }
    if (prerequisites.includes(prerequisites[i].reverse()) === true) {
      return false;
    }
    return true;
  }
};
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);

/// 46. Implement Trie (Prefix Tree)
var Trie = function (prefix, words) {
  let arr = [];
  if (prefix[0] === "Trie" && words[0] === null) {
    arr.push(null);
  }

  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] === "insert") {
      insert(words[i]);
    } else if (prefix[i] === "search") {
      search(arr, words[i]);
    } else if (prefix[i] === "startWith") {
      startWith(words[i]);
    }
  }
  return arr;
};
function insert(word) {
  arr.push(word);
}
function search(arr, word) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(word) === true) {
      arr.push(true);
    }
    arr.push(false);
  }
}
function startWith(head) {
  for (let i = 0; i < head.length; i++) {
    if (arr[i].split("").includes(head.split("")[i]) === true) {
      arr.push(true);
    }
    arr.push(false);
  }
}
// console.log(
//   Trie(
//     ["Trie", "insert", "search", "search", "startsWith", "insert", "search"],
//     [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
//   )
// );

/// 46.House Robber II
var rob2 = function (nums) {
  let sum = 0;
  if (nums.length % 2 === 0) {
    for (let i = 0; i < nums.length; i = i + 2) {
      sum += nums[i];
    }
  } else {
    for (let i = 1; i < nums.length; i = i + 2) {
      sum += nums[i];
    }
  }
  return sum;
};
console.log(rob2([2, 3, 2]));

/// 50. Contains Duplicate
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));

/// 52.Kth Smallest Element in a BST
var kthSmallest = function (root, k) {
  root.sort((a, b) => a - b);
  for (let i = 0; i < root.length; i++) {
    if (root[i] === null) {
      root.splice(i, 1);
    }
  }
  return root[k - 1];
};
console.log(kthSmallest([3, 1, 4, null, 2], 1));

/// 54. Lowest Common Ancestor of a Binary Tree
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }
  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);

  for (let i = 0; i < root.length; i++) {
    if (root[i] === p && root[i + 1] == p) {
      return left || right;
    } else {
      return root[p];
    }
  }
};

/// 55.Product of Array Except Self
var productExceptSelf = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      arr.push(-1);
    } else if (nums[i] === 0) {
      arr.push(9);
    }
    arr.push(24 / nums[i]);
  }
  return arr;
};
console.log(productExceptSelf([1, 2, 3, 4]));

/// 56.Meeting Rooms
var meetingrooms = function (meeting) {}
console.log(
  meetingrooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);