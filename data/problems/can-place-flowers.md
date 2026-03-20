---
id: "605"
title: "Can Place Flowers"
slug: "can-place-flowers"
difficulty: "Easy"
tags: ["Array", "Greedy"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823880019"
---

## Problem

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` _if_ `n` _new flowers can be planted in the_ `flowerbed` _without violating the no-adjacent-flowers rule and_ `false` _otherwise_.

 

**Example 1:**
    
    
    **Input:** flowerbed = [1,0,0,0,1], n = 1
    **Output:** true
    

**Example 2:**
    
    
    **Input:** flowerbed = [1,0,0,0,1], n = 2
    **Output:** false
    

 

**Constraints:**

  * `1 <= flowerbed.length <= 2 * 104`
  * `flowerbed[i]` is `0` or `1`.
  * There are no two adjacent flowers in `flowerbed`.
  * `0 <= n <= flowerbed.length`

## Solution

```python
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        count = 0
        for i in range(len(flowerbed)):
            if flowerbed[i] == 0:
                prev = i == 0 or flowerbed[i-1] == 0
                next = i == len(flowerbed)-1 or flowerbed[i+1] == 0
                if prev and next:
                    flowerbed[i] = 1
                    count += 1
        return count >= n
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
