/**
 * File: /Users/yanni/space/leetcode/3_lengthOfLongestSubstring.js
 * Project: /Users/yanni/space/leetcode
 * Created Date: Monday, March 30th 2020, 6:43:30 pm
 * Author: Yanni Zhang
 * Email : iamyadi@126.com
 * ---------
 * Last Modified: Sunday, May 3rd 2020, 11:53:18 am
 * Modified By: Yanni Zhang (iamyadi@126.com>)
 * ---------
 * Description:
 */

/**
 * @param {string}
 * @return {number}
 * 题目：给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */
// 方法一，该方法中间字符串操作较多，运行时间较长
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) {
    return s.length;
  }

  let maxLengthSubstring = "";
  let tempSubstring = "";
  let letterMap = {};
  for (let i = 0; i < s.length; i++) {
    let string = s[i];
    if (!letterMap[string]) {
      tempSubstring += string;
      letterMap[string] = true;
    } else {
      if (maxLengthSubstring.length < tempSubstring.length) {
        maxLengthSubstring = tempSubstring;
      }
      let index = tempSubstring.indexOf(string) + 1;
      let deleteString = tempSubstring.substring(0, index);
      tempSubstring = tempSubstring.substring(index) + string;

      for (let j = 0; j < deleteString.length; j++) {
        delete letterMap[deleteString[j]];
      }
      letterMap[string] = true;
    }
  }
  return Math.max(maxLengthSubstring.length, tempSubstring.length);
};
lengthOfLongestSubstring("abcabcbb");
// 方法二
var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      result = Math.max(result, arr.length);
      arr = arr.slice(index + 1);
      arr.push(s[i]);
    } else {
      //没有匹配到
      arr.push(s[i]);
    }
  }
  result = Math.max(result, arr.length);
  return result;
};
