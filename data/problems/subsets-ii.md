---
id: "90"
title: "Subsets II"
slug: "subsets-ii"
difficulty: "Medium"
tags: ["Array", "Backtracking", "Bit Manipulation"]
language: "python3"
date_solved: "2025-03-30"
status: "solved"
submission_id: "1591290563"
---

## Problem

Given an integer array `nums` that may contain duplicates, return _all possible_ _subsets_ _(the power set)_.

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.

 

**Example 1:**
    
    
    **Input:** nums = [1,2,2]
    **Output:** [[],[1],[1,2],[1,2,2],[2],[2,2]]
    

**Example 2:**
    
    
    **Input:** nums = [0]
    **Output:** [[],[0]]
    

 

**Constraints:**

  * `1 <= nums.length <= 10`
  * `-10 <= nums[i] <= 10`

## Solution

```python
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res=[]
        subset=[]
        def backtrack(start):
            res.append(subset[:])
            for i in range(start,len(nums)):
                if i>start and nums[i]==nums[i-1]:
                    continue
                subset.append(nums[i])
                backtrack(i+1)
                subset.pop()
        backtrack(0)        
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
