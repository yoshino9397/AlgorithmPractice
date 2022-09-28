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


var isSameTree = function (p, q) {
  var queue1 = [];
    var queue2 = [];
    
    queue1.push(p);
    queue2.push(q);
    
    while(queue1.length && queue2.length){
        var node1 = queue1.shift();
        var node2 = queue2.shift();
        var val1;
        var val2;
        
        
        if(node1 === null){
            val1 = null;
        } else {
            val1 = node1.val;
            queue1.push(node1.left);
            queue1.push(node1.right);
        }
        
        if(node2 === null){
            val2 = null;
        } else {
            val2 = node2.val;
            queue2.push(node2.left);
            queue2.push(node2.right);
        }
        
        if(val1 !== val2){
            return false;
        }
    }
    
    return queue1.length === queue2.length;
};
console.log(isSameTree([1, 2, 3], [1, 2, 3]));
