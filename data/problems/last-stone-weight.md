---
id: "1127"
title: "Last Stone Weight"
slug: "last-stone-weight"
difficulty: "Easy"
tags: ["Array", "Heap (Priority Queue)"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829408464"
---

## Problem

You are given an array of integers `stones` where `stones[i]` is the weight of the `ith` stone.

We are playing a game with the stones. On each turn, we choose the **heaviest two stones** and smash them together. Suppose the heaviest two stones have weights `x` and `y` with `x <= y`. The result of this smash is:

  * If `x == y`, both stones are destroyed, and
  * If `x != y`, the stone of weight `x` is destroyed, and the stone of weight `y` has new weight `y - x`.



At the end of the game, there is **at most one** stone left.

Return _the weight of the last remaining stone_. If there are no stones left, return `0`.

 

**Example 1:**
    
    
    **Input:** stones = [2,7,4,1,8,1]
    **Output:** 1
    **Explanation:** 
    We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
    we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
    we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
    we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
    

**Example 2:**
    
    
    **Input:** stones = [1]
    **Output:** 1
    

 

**Constraints:**

  * `1 <= stones.length <= 30`
  * `1 <= stones[i] <= 1000`

## Solution

```python
import heapq
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [-s for s in stones]
        heapq.heapify(stones)
        
        while len(stones) > 1:
            y = -heapq.heappop(stones)  # heaviest
            x = -heapq.heappop(stones)  # second heaviest
            if y != x:
                heapq.heappush(stones, -(y - x))
        return -stones[0] if stones else 0
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
