---
id: "3610"
title: "Find X-Sum of All K-Long Subarrays I"
slug: "find-x-sum-of-all-k-long-subarrays-i"
difficulty: "Easy"
tags: ["Array", "Hash Table", "Sliding Window", "Heap (Priority Queue)"]
language: "python3"
date_solved: "2025-11-04"
status: "solved"
submission_id: "1820286447"
---

## Problem

You are given an array `nums` of `n` integers and two integers `k` and `x`.

The **x-sum** of an array is calculated by the following procedure:

  * Count the occurrences of all elements in the array.
  * Keep only the occurrences of the top `x` most frequent elements. If two elements have the same number of occurrences, the element with the **bigger** value is considered more frequent.
  * Calculate the sum of the resulting array.



**Note** that if an array has less than `x` distinct elements, its **x-sum** is the sum of the array.

Return an integer array `answer` of length `n - k + 1` where `answer[i]` is the **x-sum** of the subarray `nums[i..i + k - 1]`.

 

**Example 1:**

**Input:** nums = [1,1,2,2,3,4,2,3], k = 6, x = 2

**Output:** [6,10,12]

**Explanation:**

  * For subarray `[1, 1, 2, 2, 3, 4]`, only elements 1 and 2 will be kept in the resulting array. Hence, `answer[0] = 1 + 1 + 2 + 2`.
  * For subarray `[1, 2, 2, 3, 4, 2]`, only elements 2 and 4 will be kept in the resulting array. Hence, `answer[1] = 2 + 2 + 2 + 4`. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.
  * For subarray `[2, 2, 3, 4, 2, 3]`, only elements 2 and 3 are kept in the resulting array. Hence, `answer[2] = 2 + 2 + 2 + 3 + 3`.



**Example 2:**

**Input:** nums = [3,8,7,8,7,5], k = 2, x = 2

**Output:** [11,15,15,15,12]

**Explanation:**

Since `k == x`, `answer[i]` is equal to the sum of the subarray `nums[i..i + k - 1]`.

 

**Constraints:**

  * `1 <= n == nums.length <= 50`
  * `1 <= nums[i] <= 50`
  * `1 <= x <= k <= nums.length`

## Solution

```python
class Solution:
    def findXSum(self, nums: List[int], k: int, x: int) -> List[int]:
        def x_sum(freq):
            freq2=sorted(freq, reverse=True)
            Sum=0
            for f, num in freq2[:x]:
                if f==0: break
                Sum+=num*f
            return Sum
        n=len(nums)
        sz=n-k+1
        ans=[0]*sz
        freq=[[0, 0] for _ in range(51)]
        for z in nums[:k]:
            freq[z][1]=z
            freq[z][0]+=1
        ans[0]=x_sum(freq)
        for l in range(1, sz):
            L, R=nums[l-1], nums[l+k-1]
            freq[L][0]-=1
            freq[R][0]+=1
            freq[R][1]=R
            ans[l]=x_sum(freq)
        return ans
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
