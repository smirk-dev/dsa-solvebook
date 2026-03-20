---
id: "421"
title: "Maximum XOR of Two Numbers in an Array"
slug: "maximum-xor-of-two-numbers-in-an-array"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Bit Manipulation", "Trie"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830355711"
---

## Problem

Given an integer array `nums`, return _the maximum result of_`nums[i] XOR nums[j]`, where `0 <= i <= j < n`.

 

**Example 1:**
    
    
    **Input:** nums = [3,10,5,25,2,8]
    **Output:** 28
    **Explanation:** The maximum result is 5 XOR 25 = 28.
    

**Example 2:**
    
    
    **Input:** nums = [14,70,53,83,49,91,36,80,92,51,66,70]
    **Output:** 127
    

 

**Constraints:**

  * `1 <= nums.length <= 2 * 105`
  * `0 <= nums[i] <= 231 - 1`

## Solution

```python
class Solution:
    def findMaximumXOR(self, nums: List[int]) -> int:
        mask = 0
        max_xor = 0
        for i in range(32, -1, -1):
            #set each bit and printing
            mask |= (1 << i)
            prefixes = {num & mask for num in nums}
            candidate = max_xor | (1 << i)
            for prefix in prefixes:
                if prefix ^ candidate in prefixes:
                    max_xor |= candidate
                    break

        return max_xor
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
