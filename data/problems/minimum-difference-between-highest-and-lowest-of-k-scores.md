---
id: "2112"
title: "Minimum Difference Between Highest and Lowest of K Scores"
slug: "minimum-difference-between-highest-and-lowest-of-k-scores"
difficulty: "Easy"
tags: ["Array", "Sliding Window", "Sorting"]
language: "java"
date_solved: "2026-01-26"
status: "solved"
submission_id: "1897443478"
---

## Problem

You are given a **0-indexed** integer array `nums`, where `nums[i]` represents the score of the `ith` student. You are also given an integer `k`.

Pick the scores of any `k` students from the array so that the **difference** between the **highest** and the **lowest** of the `k` scores is **minimized**.

Return _the**minimum** possible difference_.

 

**Example 1:**
    
    
    **Input:** nums = [90], k = 1
    **Output:** 0
    **Explanation:** There is one way to pick score(s) of one student:
    - [**_90_**]. The difference between the highest and lowest score is 90 - 90 = 0.
    The minimum possible difference is 0.
    

**Example 2:**
    
    
    **Input:** nums = [9,4,1,7], k = 2
    **Output:** 2
    **Explanation:** There are six ways to pick score(s) of two students:
    - [**_9_** ,**_4_** ,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
    - [**_9_** ,4,**_1_** ,7]. The difference between the highest and lowest score is 9 - 1 = 8.
    - [**_9_** ,4,1,**_7_**]. The difference between the highest and lowest score is 9 - 7 = 2.
    - [9,**_4_** ,**_1_** ,7]. The difference between the highest and lowest score is 4 - 1 = 3.
    - [9,**_4_** ,1,**_7_**]. The difference between the highest and lowest score is 7 - 4 = 3.
    - [9,4,**_1_** ,**_7_**]. The difference between the highest and lowest score is 7 - 1 = 6.
    The minimum possible difference is 2.

 

**Constraints:**

  * `1 <= k <= nums.length <= 1000`
  * `0 <= nums[i] <= 105`

## Solution

```java
class Solution {
    public int minimumDifference(int[] nums, int k) {
        int n = nums.length;
        Arrays.sort(nums);
        int ans = nums[k - 1] - nums[0];
        for (int i = 0; i + k <= n; i++) {
            ans = Math.min(ans, nums[i + k - 1] - nums[i]);
        }
        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
