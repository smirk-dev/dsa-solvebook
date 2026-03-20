---
id: "1001"
title: "N-Repeated Element in Size 2N Array"
slug: "n-repeated-element-in-size-2n-array"
difficulty: "Easy"
tags: ["Array", "Hash Table"]
language: "python3"
date_solved: "2026-01-02"
status: "solved"
submission_id: "1871808835"
---

## Problem

You are given an integer array `nums` with the following properties:

  * `nums.length == 2 * n`.
  * `nums` contains `n + 1` **unique** values, `n` of which occur **exactly once** in the array.
  * Exactly one element of `nums` is repeated `n` times.



Return _the element that is repeated_`n` _times_.

 

**Example 1:**
    
    
    **Input:** nums = [1,2,3,3]
    **Output:** 3
    

**Example 2:**
    
    
    **Input:** nums = [2,1,2,5,3,2]
    **Output:** 2
    

**Example 3:**
    
    
    **Input:** nums = [5,1,5,2,5,3,5,4]
    **Output:** 5
    

 

**Constraints:**

  * `2 <= n <= 5000`
  * `nums.length == 2 * n`
  * `0 <= nums[i] <= 104`
  * `nums` contains `n + 1` **unique** elements and one of them is repeated exactly `n` times.

## Solution

```python
class Solution:
    def repeatedNTimes(self, A: list[int]) -> int:
        for i in range(len(A) - 2):
            if A[i] == A[i + 1] or A[i] == A[i + 2]:
                return A[i]
        return A[-1]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
