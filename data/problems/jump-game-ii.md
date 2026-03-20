---
id: "45"
title: "Jump Game II"
slug: "jump-game-ii"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming", "Greedy"]
language: "python3"
date_solved: "2025-02-18"
status: "solved"
submission_id: "1547695589"
---

## Problem

You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at index 0.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at index `i`, you can jump to any index `(i + j)` where:

  * `0 <= j <= nums[i]` and
  * `i + j < n`



Return _the minimum number of jumps to reach index_`n - 1`. The test cases are generated such that you can reach index `n - 1`.

 

**Example 1:**
    
    
    **Input:** nums = [2,3,1,1,4]
    **Output:** 2
    **Explanation:** The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
    

**Example 2:**
    
    
    **Input:** nums = [2,3,0,1,4]
    **Output:** 2
    

 

**Constraints:**

  * `1 <= nums.length <= 104`
  * `0 <= nums[i] <= 1000`
  * It's guaranteed that you can reach `nums[n - 1]`.

## Solution

```python
class Solution(object):
    def jump(self, nums):
        near = far = jumps = 0

        while far < len(nums) - 1:
            farthest = 0
            for i in range(near, far + 1):
                farthest = max(farthest, i + nums[i])
            
            near = far + 1
            far = farthest
            jumps += 1
        
        return jumps
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
