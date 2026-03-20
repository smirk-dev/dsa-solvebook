---
id: "84"
title: "Largest Rectangle in Histogram"
slug: "largest-rectangle-in-histogram"
difficulty: "Hard"
tags: ["Array", "Stack", "Monotonic Stack"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829406135"
---

## Problem

Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return _the area of the largest rectangle in the histogram_.

 

**Example 1:**
    
    
    **Input:** heights = [2,1,5,6,2,3]
    **Output:** 10
    **Explanation:** The above is a histogram where width of each bar is 1.
    The largest rectangle is shown in the red area, which has an area = 10 units.
    

**Example 2:**
    
    
    **Input:** heights = [2,4]
    **Output:** 4
    

 

**Constraints:**

  * `1 <= heights.length <= 105`
  * `0 <= heights[i] <= 104`

## Solution

```python
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = []
        max_area = 0
        n = len(heights)
        
        for i in range(n + 1):
            cur_height = heights[i] if i < n else 0
            while stack and cur_height < heights[stack[-1]]:
                h = heights[stack.pop()]
                w = i if not stack else i - stack[-1] - 1
                max_area = max(max_area, h * w)
            stack.append(i)
        
        return max_area
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
