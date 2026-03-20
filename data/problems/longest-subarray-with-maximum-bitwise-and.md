---
id: "2503"
title: "Longest Subarray With Maximum Bitwise AND"
slug: "longest-subarray-with-maximum-bitwise-and"
difficulty: "Medium"
tags: ["Array", "Bit Manipulation", "Brainteaser"]
language: "c"
date_solved: "2025-07-30"
status: "solved"
submission_id: "1717379573"
---

## Problem

You are given an integer array `nums` of size `n`.

Consider a **non-empty** subarray from `nums` that has the **maximum** possible **bitwise AND**.

  * In other words, let `k` be the maximum value of the bitwise AND of **any** subarray of `nums`. Then, only subarrays with a bitwise AND equal to `k` should be considered.



Return _the length of the**longest** such subarray_.

The bitwise AND of an array is the bitwise AND of all the numbers in it.

A **subarray** is a contiguous sequence of elements within an array.

 

**Example 1:**
    
    
    **Input:** nums = [1,2,3,3,2,2]
    **Output:** 2
    **Explanation:**
    The maximum possible bitwise AND of a subarray is 3.
    The longest subarray with that value is [3,3], so we return 2.
    

**Example 2:**
    
    
    **Input:** nums = [1,2,3,4]
    **Output:** 1
    **Explanation:**
    The maximum possible bitwise AND of a subarray is 4.
    The longest subarray with that value is [4], so we return 1.
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `1 <= nums[i] <= 106`

## Solution

```c
#define MAX(x, y) ((x) > (y) ? (x) : (y))

int longestSubarray(int *nums, int numsSize)
{
    int result = 0;
    int max = 0;
    int streak = 0;

    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == max) {
            streak++;
        } else if (nums[i] < max) {
            streak = 0;
        } else {
            max = nums[i];
            streak = 1;
            result = 1;
        }
        result = MAX(result, streak);
    }
    return result;
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
