---
id: "46"
title: "Permutations"
slug: "permutations"
difficulty: "Medium"
tags: ["Array", "Backtracking"]
language: "python3"
date_solved: "2025-02-18"
status: "solved"
submission_id: "1547701427"
---

## Problem

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in **any order**.

 

**Example 1:**
    
    
    **Input:** nums = [1,2,3]
    **Output:** [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    

**Example 2:**
    
    
    **Input:** nums = [0,1]
    **Output:** [[0,1],[1,0]]
    

**Example 3:**
    
    
    **Input:** nums = [1]
    **Output:** [[1]]
    

 

**Constraints:**

  * `1 <= nums.length <= 6`
  * `-10 <= nums[i] <= 10`
  * All the integers of `nums` are **unique**.

## Solution

```python
class Solution(object):
    def permute(self, nums):
        if len(nums) == 1:
            return [nums[:]]
        
        res = []

        for _ in range(len(nums)):
            n = nums.pop(0)
            perms = self.permute(nums)

            for p in perms:
                p.append(n)
            
            res.extend(perms)
            nums.append(n)
        
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
