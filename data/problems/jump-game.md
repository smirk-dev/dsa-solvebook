---
id: "55"
title: "Jump Game"
slug: "jump-game"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming", "Greedy"]
language: "python3"
date_solved: "2025-02-24"
status: "solved"
submission_id: "1553841431"
---

## Problem

You are given an integer array `nums`. You are initially positioned at the array's **first index** , and each element in the array represents your maximum jump length at that position.

Return `true` _if you can reach the last index, or_`false` _otherwise_.

 

**Example 1:**
    
    
    **Input:** nums = [2,3,1,1,4]
    **Output:** true
    **Explanation:** Jump 1 step from index 0 to 1, then 3 steps to the last index.
    

**Example 2:**
    
    
    **Input:** nums = [3,2,1,0,4]
    **Output:** false
    **Explanation:** You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
    

 

**Constraints:**

  * `1 <= nums.length <= 104`
  * `0 <= nums[i] <= 105`

## Solution

```python
class Solution(object):
    def canJump(self, nums):
        goal = len(nums) - 1

        for i in range(len(nums) - 2, -1, -1):
            if i + nums[i] >= goal:
                goal = i
        
        return True if goal == 0 else False
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
