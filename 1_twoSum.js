/**
 * File: /Users/yanni/space/leetcode/leedcode1_twoSum.js
 * Project: /Users/yanni/space/leetcode
 * Created Date: Saturday, March 14th 2020, 8:03:18 pm
 * Author: Yanni Zhang
 * Email : iamyadi@126.com
 * ---------
 * Last Modified: Tuesday, March 31st 2020, 6:40:14 pm
 * Modified By: Yanni Zhang (iamyadi@126.com>)
 * ---------
 * Description:
 */

// 1. 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 方法一
function leedcodeOne(rawArr, target) {
  let arr = rawArr.map((element, index) => {
    return {
      value: element,
      index
    };
  });
  arr.sort((a, b) => {
    return a.value - b.value;
  });
  let smallIndex = 0,
    largeIndex = arr.length - 1;
  while (smallIndex < largeIndex) {
    if (arr[smallIndex].value + arr[largeIndex].value < target) {
      smallIndex++;
    } else if (arr[smallIndex].value + arr[largeIndex].value > target) {
      largeIndex--;
    } else {
      break;
    }
  }
  return [arr[smallIndex].index, arr[largeIndex].index];
}

// 方法二
function twoSum(nums, target) {
  let res = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(res, res[target - nums[i]], target - nums[i], "ddddd");
    if (res[target - nums[i]] !== undefined) {
      return [res[target - nums[i]], i];
    } else {
      res[nums[i]] = i;
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
