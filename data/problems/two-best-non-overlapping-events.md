---
id: "2164"
title: "Two Best Non-Overlapping Events"
slug: "two-best-non-overlapping-events"
difficulty: "Medium"
tags: ["Array", "Binary Search", "Dynamic Programming", "Sorting", "Heap (Priority Queue)"]
language: "python3"
date_solved: "2025-12-23"
status: "solved"
submission_id: "1862932829"
---

## Problem

You are given a **0-indexed** 2D integer array of `events` where `events[i] = [startTimei, endTimei, valuei]`. The `ith` event starts at `startTimei` and ends at `endTimei`, and if you attend this event, you will receive a value of `valuei`. You can choose **at most** **two** **non-overlapping** events to attend such that the sum of their values is **maximized**.

Return _this**maximum** sum._

Note that the start time and end time is **inclusive** : that is, you cannot attend two events where one of them starts and the other ends at the same time. More specifically, if you attend an event with end time `t`, the next event must start at or after `t + 1`.

 

**Example 1:**
    
    
    **Input:** events = [[1,3,2],[4,5,2],[2,4,3]]
    **Output:** 4
    **Explanation:** Choose the green events, 0 and 1 for a sum of 2 + 2 = 4.
    

**Example 2:**
    
    
    **Input:** events = [[1,3,2],[4,5,2],[1,5,5]]
    **Output:** 5
    **Explanation:** Choose event 2 for a sum of 5.
    

**Example 3:**
    
    
    **Input:** events = [[1,5,3],[1,5,1],[6,6,5]]
    **Output:** 8
    **Explanation:** Choose events 0 and 2 for a sum of 3 + 5 = 8.

 

**Constraints:**

  * `2 <= events.length <= 105`
  * `events[i].length == 3`
  * `1 <= startTimei <= endTimei <= 109`
  * `1 <= valuei <= 106`

## Solution

```python
class Solution:
    def maxTwoEvents(self, events: List[List[int]]) -> int:

        end_sorted = deque(sorted(events, key=itemgetter(1)))
        start_sorted = sorted(events, key=itemgetter(0))

        ans = max(v for _, _, v in events)

        end_max = 0  

        for start, end, value in start_sorted:
            while end_sorted and end_sorted[0][1] < start:
                _, _, v = end_sorted.popleft()
                end_max = max(end_max, v)
            ans = max(ans, value + end_max)

        return ans
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
