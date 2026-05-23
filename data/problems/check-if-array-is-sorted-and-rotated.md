---
id: "1878"
title: "Check if Array Is Sorted and Rotated"
slug: "check-if-array-is-sorted-and-rotated"
difficulty: "Easy"
tags: ["Array"]
language: "java"
date_solved: "2026-05-23"
status: "solved"
submission_id: "2011152058"
---

## Problem

Given an array `nums`, return `true` _if the array was originally sorted in non-decreasing order, then rotated**some** number of positions (including zero)_. Otherwise, return `false`.

There may be **duplicates** in the original array.

**Note:** An array `A` rotated by `x` positions results in an array `B` of the same length such that `B[i] == A[(i+x) % A.length]` for every valid index `i`.

 

**Example 1:**
    
    
    **Input:** nums = [3,4,5,1,2]
    **Output:** true
    **Explanation:** [1,2,3,4,5] is the original sorted array.
    You can rotate the array by x = 2 positions to begin on the element of value 3: [3,4,5,1,2].
    

**Example 2:**
    
    
    **Input:** nums = [2,1,3,4]
    **Output:** false
    **Explanation:** There is no sorted array once rotated that can make nums.
    

**Example 3:**
    
    
    **Input:** nums = [1,2,3]
    **Output:** true
    **Explanation:** [1,2,3] is the original sorted array.
    You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
    

 

**Constraints:**

  * `1 <= nums.length <= 100`
  * `1 <= nums[i] <= 100`

## Solution

```java
class Solution {
    public boolean check(int[] nums) {
        boolean fault = false;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            if (nums[i] > nums[(i + 1) % n]) {
                if (fault) return false;
                fault = true;
            }
        }

        return true;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
