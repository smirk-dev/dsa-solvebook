---
id: "47"
title: "Permutations II"
slug: "permutations-ii"
difficulty: "Medium"
tags: ["Array", "Backtracking", "Sorting"]
language: "python3"
date_solved: "2025-02-18"
status: "solved"
submission_id: "1547703350"
---

## Problem

Given a collection of numbers, `nums`, that might contain duplicates, return _all possible unique permutations**in any order**._

 

**Example 1:**
    
    
    **Input:** nums = [1,1,2]
    **Output:**
    [[1,1,2],
     [1,2,1],
     [2,1,1]]
    

**Example 2:**
    
    
    **Input:** nums = [1,2,3]
    **Output:** [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
    

 

**Constraints:**

  * `1 <= nums.length <= 8`
  * `-10 <= nums[i] <= 10`

## Solution

```python
class Solution(object):
    def permuteUnique(self, nums):
        permutations = []
        counter = Counter(nums)
        def findAllPermutations(res):
            if len(res) == len(nums):
                permutations.append(res)
                return 
            
            for key in counter:
                if counter[key]:
                    counter[key]-=1 # decrement visited key
                    findAllPermutations(res + [key])    
                    counter[key]+=1 # restore the state of visited key to find the next path
                
        findAllPermutations([])
        return permutations
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
