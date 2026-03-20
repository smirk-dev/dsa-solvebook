---
id: "1783"
title: "Ways to Make a Fair Array"
slug: "ways-to-make-a-fair-array"
difficulty: "Medium"
tags: ["Array", "Prefix Sum"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830322953"
---

## Problem

You are given an integer array `nums`. You can choose **exactly one** index (**0-indexed**) and remove the element. Notice that the index of the elements may change after the removal.

For example, if `nums = [6,1,7,4,1]`:

  * Choosing to remove index `1` results in `nums = [6,7,4,1]`.
  * Choosing to remove index `2` results in `nums = [6,1,4,1]`.
  * Choosing to remove index `4` results in `nums = [6,1,7,4]`.



An array is **fair** if the sum of the odd-indexed values equals the sum of the even-indexed values.

Return the _**number** of indices that you could choose such that after the removal, _`nums` ___is**fair**. _

 

**Example 1:**
    
    
    **Input:** nums = [2,1,6,4]
    **Output:** 1
    **Explanation:**
    Remove index 0: [1,6,4] -> Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.
    Remove index 1: [2,6,4] -> Even sum: 2 + 4 = 6. Odd sum: 6. Fair.
    Remove index 2: [2,1,4] -> Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.
    Remove index 3: [2,1,6] -> Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.
    There is 1 index that you can remove to make nums fair.
    

**Example 2:**
    
    
    **Input:** nums = [1,1,1]
    **Output:** 3
    **Explanation:**  You can remove any index and the remaining array is fair.
    

**Example 3:**
    
    
    **Input:** nums = [1,2,3]
    **Output:** 0
    **Explanation:**  You cannot make a fair array after removing any index.
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `1 <= nums[i] <= 104`

## Solution

```python
class Solution:
    def waysToMakeFair(self, nums: List[int]) -> int:
        n = len(nums)
        even_prefix = [0] * (n + 1)
        odd_prefix = [0] * (n + 1)
        for i in range(n):
            even_prefix[i + 1] = even_prefix[i]
            odd_prefix[i + 1] = odd_prefix[i]
            if i % 2 == 0:
                even_prefix[i + 1] += nums[i]
            else:
                odd_prefix[i + 1] += nums[i]

        result = 0
        for i in range(n):
            even_sum = even_prefix[i] + odd_prefix[n] - odd_prefix[i + 1]
            odd_sum = odd_prefix[i] + even_prefix[n] - even_prefix[i + 1]
            if even_sum == odd_sum:
                result += 1
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
