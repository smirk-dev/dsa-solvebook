---
id: "3299"
title: "Find the Maximum Number of Elements in Subset"
slug: "find-the-maximum-number-of-elements-in-subset"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Enumeration"]
language: "java"
date_solved: "2026-06-27"
status: "solved"
submission_id: "2047382654"
---

## Problem

You are given an array of **positive** integers `nums`.

You need to select a subset of `nums` which satisfies the following condition:

  * You can place the selected elements in a **0-indexed** array such that it follows the pattern: `[x, x2, x4, ..., xk/2, xk, xk/2, ..., x4, x2, x]` (**Note** that `k` can be be any **non-negative** power of `2`). For example, `[2, 4, 16, 4, 2]` and `[3, 9, 3]` follow the pattern while `[2, 4, 8, 4, 2]` does not.



Return _the**maximum** number of elements in a subset that satisfies these conditions._

 

**Example 1:**
    
    
    **Input:** nums = [5,4,1,2,2]
    **Output:** 3
    **Explanation:** We can select the subset {4,2,2}, which can be placed in the array as [2,4,2] which follows the pattern and 22 == 4. Hence the answer is 3.
    

**Example 2:**
    
    
    **Input:** nums = [1,3,2,4]
    **Output:** 1
    **Explanation:** We can select the subset {1}, which can be placed in the array as [1] which follows the pattern. Hence the answer is 1. Note that we could have also selected the subsets {2}, {3}, or {4}, there may be multiple subsets which provide the same answer. 
    

 

**Constraints:**

  * `2 <= nums.length <= 105`
  * `1 <= nums[i] <= 109`

## Solution

```java
class Solution {
    private static final int MAX_BASE = 31622;

    public int maximumLength(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int n : nums)
            freq.merge(n, 1, Integer::sum);

        int one = freq.getOrDefault(1, 0);
        int res = (one - 1) | 1;
        freq.remove(1);

        for (int f : freq.keySet()) {
            int sq = (int) Math.sqrt(f);
            if (sq * sq == f && freq.getOrDefault(sq, 0) > 1) continue;

            int n = 0;
            int x = f;

            while (x <= MAX_BASE && freq.containsKey(x) && freq.get(x) > 1) {
                n += 2;
                x *= x;
            }

            res = Math.max(res, n + (freq.containsKey(x) ? 1 : -1));
        }

        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
