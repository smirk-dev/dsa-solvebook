---
id: "968"
title: "Beautiful Array"
slug: "beautiful-array"
difficulty: "Medium"
tags: ["Array", "Math", "Divide and Conquer"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830327967"
---

## Problem

An array `nums` of length `n` is **beautiful** if:

  * `nums` is a permutation of the integers in the range `[1, n]`.
  * For every `0 <= i < j < n`, there is no index `k` with `i < k < j` where `2 * nums[k] == nums[i] + nums[j]`.



Given the integer `n`, return _any**beautiful** array _`nums` _of length_`n`. There will be at least one valid answer for the given `n`.

 

**Example 1:**
    
    
    **Input:** n = 4
    **Output:** [2,1,4,3]
    

**Example 2:**
    
    
    **Input:** n = 5
    **Output:** [3,1,2,5,4]
    

 

**Constraints:**

  * `1 <= n <= 1000`

## Solution

```python
class Solution:
    def beautifulArray(self, n: int) -> List[int]:
        result = [1]
        while len(result) < n:
            odds = [x*2-1 for x in result if x*2-1 <= n]
            evens = [x*2 for x in result if x*2 <= n]
            result = odds + evens
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
