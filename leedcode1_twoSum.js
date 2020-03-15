/*
 * @Author: your name
 * @Date: 2020-03-14 20:03:18
 * @LastEditTime: 2020-03-14 21:45:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /undefined/Users/yanni/Desktop/leedcode1.js
 */
// 1. 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 方法一
function leedcodeOne(rawArr, target){
    let arr = rawArr.map((element, index) => {
        return {
            value: element,
            index
        }
    });
    arr.sort((a, b)=>{
        return a.value - b.value
    })
    let smallIndex = 0, largeIndex = arr.length - 1
    while(smallIndex < largeIndex){
        if(arr[smallIndex].value + arr[largeIndex].value < target) {
            smallIndex++
        } else if(arr[smallIndex].value + arr[largeIndex].value > target) {
            largeIndex--
        } else {
            break
        }
    }
    return [arr[smallIndex].index, arr[largeIndex].index]
}
let a = [230,863,916,585,981,404,316,785,88,12,70,435,384,778,887,755,740,337,86,92,325,422,815,650,920,125,277,336,221,847,168,23,677,61,400,136,874,363,394,199,863,997,794,587,124,321,212,957,764,173,314,422,927,783,930,282,306,506,44,926,691,568,68,730,933,737,531,180,414,751,28,546,60,371,493,370,527,387,43,541,13,457,328,227,652,365,430,803,59,858,538,427,583,368,375,173,809,896,370,789]
let target = 542
console.log(leedcodeOne(a,target))

// 方法二
function twoSum(nums, target){
    let res = {}
    for(let i=0; i<nums.length; i++){
        console.log(res, res[target-nums[i]], target-nums[i], 'ddddd')
        if(res[target-nums[i]] !== undefined){
            return [res[target-nums[i]], i]
        } else {
            res[nums[i]] = i 
        }
    }
}
console.log(twoSum([2,7,11,15],9))