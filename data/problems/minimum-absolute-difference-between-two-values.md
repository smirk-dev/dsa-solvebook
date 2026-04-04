---
id: "4255"
title: "Minimum Absolute Difference Between Two Values"
slug: "minimum-absolute-difference-between-two-values"
difficulty: "Easy"
tags: []
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965509425"
---

## Problem

You are given an integer array `nums` consisting only of 0, 1, and 2.

A pair of indices `(i, j)` is called **valid** if `nums[i] == 1` and `nums[j] == 2`.

Return the **minimum** absolute difference between `i` and `j` among all valid pairs. If no valid pair exists, return -1.

The absolute difference between indices `i` and `j` is defined as `abs(i - j)`.

 

**Example 1:**

**Input:** nums = [1,0,0,2,0,1]

**Output:** 2

**Explanation:**

The valid pairs are:

  * (0, 3) which has absolute difference of `abs(0 - 3) = 3`.
  * (5, 3) which has absolute difference of `abs(5 - 3) = 2`.



Thus, the answer is 2.

**Example 2:**

**Input:** nums = [1,0,1,0]

**Output:** -1

**Explanation:**

There are no valid pairs in the array, thus the answer is -1.

 

**Constraints:**

  * `1 <= nums.length <= 100`
  * `0 <= nums[i] <= 2`

## Solution

```java
class Solution {
    public int minAbsoluteDifference(int[] nums) {
        // [1,0,0,2,0,1] -> Array
        //  0 1 2 3 4 5 -> Index

        int minDiff = Integer.MAX_VALUE;
        int n = nums.length;
        for(int i = 0; i < n; i++){
            for(int j = i+1; j < n; j++){
                if((nums[i] == 1 && nums[j] == 2) || (nums[i] == 2 && nums[j] == 1)){
                    minDiff = Math.min(minDiff, Math.abs(i-j));
                }
            }
        }
        return minDiff == Integer.MAX_VALUE ? -1 : minDiff;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
