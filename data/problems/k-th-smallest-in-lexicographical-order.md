---
id: "440"
title: "K-th Smallest in Lexicographical Order"
slug: "k-th-smallest-in-lexicographical-order"
difficulty: "Hard"
tags: ["Trie"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830352405"
---

## Problem

Given two integers `n` and `k`, return _the_ `kth` _lexicographically smallest integer in the range_ `[1, n]`.

 

**Example 1:**
    
    
    **Input:** n = 13, k = 2
    **Output:** 10
    **Explanation:** The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
    

**Example 2:**
    
    
    **Input:** n = 1, k = 1
    **Output:** 1
    

 

**Constraints:**

  * `1 <= k <= n <= 109`

## Solution

```python
class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        def countSteps(curr, n):
            steps = 0
            first = curr
            last = curr
            while first <= n:
                steps += min(last, n) - first + 1
                first *= 10
                last = last * 10 + 9
            return steps

        curr = 1
        k -= 1  # First number is 1
        while k:
            steps = countSteps(curr, n)
            if steps <= k:
                k -= steps
                curr += 1
            else:
                curr *= 10
                k -= 1
        return curr
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
