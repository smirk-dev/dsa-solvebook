---
id: "167"
title: "Two Sum II - Input Array Is Sorted"
slug: "two-sum-ii-input-array-is-sorted"
difficulty: "Medium"
tags: ["Array", "Two Pointers", "Binary Search"]
language: "python3"
date_solved: "2025-11-09"
status: "solved"
submission_id: "1825364352"
---

## Problem

Given a **1-indexed** array of integers `numbers` that is already **_sorted in non-decreasing order_** , find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return _the indices of the two numbers  _`index1` _and_`index2` _,**each incremented by one,** as an integer array _`[index1, index2]`_of length 2._

The tests are generated such that there is **exactly one solution**. You **may not** use the same element twice.

Your solution must use only constant extra space.

 

**Example 1:**
    
    
    **Input:** numbers = [_2_ ,_7_ ,11,15], target = 9
    **Output:** [1,2]
    **Explanation:** The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
    

**Example 2:**
    
    
    **Input:** numbers = [_2_ ,3,_4_], target = 6
    **Output:** [1,3]
    **Explanation:** The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
    

**Example 3:**
    
    
    **Input:** numbers = [_-1_ ,_0_], target = -1
    **Output:** [1,2]
    **Explanation:** The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
    

 

**Constraints:**

  * `2 <= numbers.length <= 3 * 104`
  * `-1000 <= numbers[i] <= 1000`
  * `numbers` is sorted in **non-decreasing order**.
  * `-1000 <= target <= 1000`
  * The tests are generated such that there is **exactly one solution**.

## Solution

```python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1

        while left < right:
            total = numbers[left] + numbers[right]

            if total == target:
                return [left + 1, right + 1]
            elif total > target:
                right -= 1
            else:
                left += 1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
