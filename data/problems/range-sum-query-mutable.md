---
id: "307"
title: "Range Sum Query - Mutable"
slug: "range-sum-query-mutable"
difficulty: "Medium"
tags: ["Array", "Divide and Conquer", "Design", "Binary Indexed Tree", "Segment Tree"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830348091"
---

## Problem

Given an integer array `nums`, handle multiple queries of the following types:

  1. **Update** the value of an element in `nums`.
  2. Calculate the **sum** of the elements of `nums` between indices `left` and `right` **inclusive** where `left <= right`.



Implement the `NumArray` class:

  * `NumArray(int[] nums)` Initializes the object with the integer array `nums`.
  * `void update(int index, int val)` **Updates** the value of `nums[index]` to be `val`.
  * `int sumRange(int left, int right)` Returns the **sum** of the elements of `nums` between indices `left` and `right` **inclusive** (i.e. `nums[left] + nums[left + 1] + ... + nums[right]`).



 

**Example 1:**
    
    
    **Input**
    ["NumArray", "sumRange", "update", "sumRange"]
    [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
    **Output**
    [null, 9, null, 8]
    
    **Explanation**
    NumArray numArray = new NumArray([1, 3, 5]);
    numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
    numArray.update(1, 2);   // nums = [1, 2, 5]
    numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8
    

 

**Constraints:**

  * `1 <= nums.length <= 3 * 104`
  * `-100 <= nums[i] <= 100`
  * `0 <= index < nums.length`
  * `-100 <= val <= 100`
  * `0 <= left <= right < nums.length`
  * At most `3 * 104` calls will be made to `update` and `sumRange`.

## Solution

```python
class NumArray:
    def __init__(self, nums: List[int]):
        self.n = len(nums)
        self.tree = [0] * (2 * self.n)
        # Build tree
        for i in range(self.n):
            self.tree[self.n + i] = nums[i]
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[2 * i] + self.tree[2 * i + 1]

    def update(self, index: int, val: int) -> None:
        pos = index + self.n
        self.tree[pos] = val
        while pos > 1:
            pos //= 2
            self.tree[pos] = self.tree[2 * pos] + self.tree[2 * pos + 1]

    def sumRange(self, left: int, right: int) -> int:
        l = left + self.n
        r = right + self.n
        s = 0
        while l <= r:
            if l % 2 == 1:
                s += self.tree[l]
                l += 1
            if r % 2 == 0:
                s += self.tree[r]
                r -= 1
            l //= 2
            r //= 2
        return s
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
