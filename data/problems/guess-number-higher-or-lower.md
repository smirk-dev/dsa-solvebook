---
id: "374"
title: "Guess Number Higher or Lower"
slug: "guess-number-higher-or-lower"
difficulty: "Easy"
tags: ["Binary Search", "Interactive"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823997666"
---

## Problem

We are playing the Guess Game. The game is as follows:

I pick a number from `1` to `n`. You have to guess which number I picked (the number I picked stays the same throughout the game).

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API `int guess(int num)`, which returns three possible results:

  * `-1`: Your guess is higher than the number I picked (i.e. `num > pick`).
  * `1`: Your guess is lower than the number I picked (i.e. `num < pick`).
  * `0`: your guess is equal to the number I picked (i.e. `num == pick`).



Return _the number that I picked_.

 

**Example 1:**
    
    
    **Input:** n = 10, pick = 6
    **Output:** 6
    

**Example 2:**
    
    
    **Input:** n = 1, pick = 1
    **Output:** 1
    

**Example 3:**
    
    
    **Input:** n = 2, pick = 1
    **Output:** 1
    

 

**Constraints:**

  * `1 <= n <= 231 - 1`
  * `1 <= pick <= n`

## Solution

```python
class Solution:
    def guessNumber(self, n: int) -> int:
        left, right = 1, n
        while left <= right:
            mid = (left + right) // 2
            result = guess(mid)
            if result == 0:
                return mid
            elif result == -1:
                right = mid - 1
            else:
                left = mid + 1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
