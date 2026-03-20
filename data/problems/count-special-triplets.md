---
id: "3885"
title: "Count Special Triplets"
slug: "count-special-triplets"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Counting"]
language: "python3"
date_solved: "2025-12-09"
status: "solved"
submission_id: "1851245413"
---

## Problem

You are given an integer array `nums`.

A **special triplet** is defined as a triplet of indices `(i, j, k)` such that:

  * `0 <= i < j < k < n`, where `n = nums.length`
  * `nums[i] == nums[j] * 2`
  * `nums[k] == nums[j] * 2`



Return the total number of **special triplets** in the array.

Since the answer may be large, return it **modulo** `109 + 7`.

 

**Example 1:**

**Input:** nums = [6,3,6]

**Output:** 1

**Explanation:**

The only special triplet is `(i, j, k) = (0, 1, 2)`, where:

  * `nums[0] = 6`, `nums[1] = 3`, `nums[2] = 6`
  * `nums[0] = nums[1] * 2 = 3 * 2 = 6`
  * `nums[2] = nums[1] * 2 = 3 * 2 = 6`



**Example 2:**

**Input:** nums = [0,1,0,0]

**Output:** 1

**Explanation:**

The only special triplet is `(i, j, k) = (0, 2, 3)`, where:

  * `nums[0] = 0`, `nums[2] = 0`, `nums[3] = 0`
  * `nums[0] = nums[2] * 2 = 0 * 2 = 0`
  * `nums[3] = nums[2] * 2 = 0 * 2 = 0`



**Example 3:**

**Input:** nums = [8,4,2,8,4]

**Output:** 2

**Explanation:**

There are exactly two special triplets:

  * `(i, j, k) = (0, 1, 3)`
    * `nums[0] = 8`, `nums[1] = 4`, `nums[3] = 8`
    * `nums[0] = nums[1] * 2 = 4 * 2 = 8`
    * `nums[3] = nums[1] * 2 = 4 * 2 = 8`
  * `(i, j, k) = (1, 2, 4)`
    * `nums[1] = 4`, `nums[2] = 2`, `nums[4] = 4`
    * `nums[1] = nums[2] * 2 = 2 * 2 = 4`
    * `nums[4] = nums[2] * 2 = 2 * 2 = 4`



 

**Constraints:**

  * `3 <= n == nums.length <= 105`
  * `0 <= nums[i] <= 105`

## Solution

```python
class Solution:
    def specialTriplets(self, nums: List[int]) -> int:
        n, MOD=len(nums), 10**9+7
        freq, prev=Counter(nums), Counter()
        cnt=0
        prev[nums[0]]+=1
        for i in range(1, n-1):
            x=nums[i]
            x2=x<<1
            cnt+=prev[x2]*(freq[x2]-prev[x2]-(x==0))
            prev[x]+=1
        return cnt%MOD
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
