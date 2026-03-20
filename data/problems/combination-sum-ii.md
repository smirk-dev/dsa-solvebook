---
id: "40"
title: "Combination Sum II"
slug: "combination-sum-ii"
difficulty: "Medium"
tags: ["Array", "Backtracking"]
language: "python3"
date_solved: "2025-02-18"
status: "solved"
submission_id: "1547685637"
---

## Problem

Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note:**  The solution set must not contain duplicate combinations.

 

**Example 1:**
    
    
    **Input:** candidates = [10,1,2,7,6,1,5], target = 8
    **Output:** 
    [
    [1,1,6],
    [1,2,5],
    [1,7],
    [2,6]
    ]
    

**Example 2:**
    
    
    **Input:** candidates = [2,5,2,1,2], target = 5
    **Output:** 
    [
    [1,2,2],
    [5]
    ]
    

 

**Constraints:**

  * `1 <= candidates.length <= 100`
  * `1 <= candidates[i] <= 50`
  * `1 <= target <= 30`

## Solution

```python
class Solution(object):
    def combinationSum2(self, candidates, target):
        candidates.sort()
        res = []

        def dfs(target, start, comb):
            if target < 0:
                return
            if target == 0:
                res.append(comb)
                return
            for i in range(start, len(candidates)):
                if i > start and candidates[i] == candidates[i-1]:
                    continue
                if candidates[i] > target:
                    break
                dfs(target-candidates[i], i+1, comb+[candidates[i]])

        dfs(target, 0, [])
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
