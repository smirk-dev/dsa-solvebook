---
id: "239"
title: "Sliding Window Maximum"
slug: "sliding-window-maximum"
difficulty: "Hard"
tags: ["Array", "Queue", "Sliding Window", "Heap (Priority Queue)", "Monotonic Queue"]
language: "python3"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951116902"
---

## Problem

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return _the max sliding window_.

 

**Example 1:**
    
    
    **Input:** nums = [1,3,-1,-3,5,3,6,7], k = 3
    **Output:** [3,3,5,5,6,7]
    **Explanation:** 
    Window position                Max
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       **3**
     1 [3  -1  -3] 5  3  6  7       **3**
     1  3 [-1  -3  5] 3  6  7      **5**
     1  3  -1 [-3  5  3] 6  7       **5**
     1  3  -1  -3 [5  3  6] 7       **6**
     1  3  -1  -3  5 [3  6  7]      **7**
    

**Example 2:**
    
    
    **Input:** nums = [1], k = 1
    **Output:** [1]
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `-104 <= nums[i] <= 104`
  * `1 <= k <= nums.length`

## Solution

```python
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        res = []
        q = deque()

        for idx, num in enumerate(nums):
            while q and q[-1] < num:
                q.pop()
            q.append(num)

            if idx >= k and nums[idx - k] == q[0]:
                q.popleft()
            
            if idx >= k - 1:
                res.append(q[0])
        
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
