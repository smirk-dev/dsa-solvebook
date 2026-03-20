---
id: "1996"
title: "Number of Ways to Rearrange Sticks With K Sticks Visible"
slug: "number-of-ways-to-rearrange-sticks-with-k-sticks-visible"
difficulty: "Hard"
tags: ["Math", "Dynamic Programming", "Combinatorics"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830310222"
---

## Problem

There are `n` uniquely-sized sticks whose lengths are integers from `1` to `n`. You want to arrange the sticks such that **exactly** `k` sticks are **visible** from the left. A stick is **visible** from the left if there are no **longer**  sticks to the **left** of it.

  * For example, if the sticks are arranged `[_1_ ,_3_ ,2,_5_ ,4]`, then the sticks with lengths `1`, `3`, and `5` are visible from the left.



Given `n` and `k`, return _the**number** of such arrangements_. Since the answer may be large, return it **modulo** `109 + 7`.

 

**Example 1:**
    
    
    **Input:** n = 3, k = 2
    **Output:** 3
    **Explanation:** [_1_ ,_3_ ,2], [_2_ ,_3_ ,1], and [_2_ ,1,_3_] are the only arrangements such that exactly 2 sticks are visible.
    The visible sticks are underlined.
    

**Example 2:**
    
    
    **Input:** n = 5, k = 5
    **Output:** 1
    **Explanation:** [_1_ ,_2_ ,_3_ ,_4_ ,_5_] is the only arrangement such that all 5 sticks are visible.
    The visible sticks are underlined.
    

**Example 3:**
    
    
    **Input:** n = 20, k = 11
    **Output:** 647427950
    **Explanation:** There are 647427950 (mod 109 + 7) ways to rearrange the sticks such that exactly 11 sticks are visible.
    

 

**Constraints:**

  * `1 <= n <= 1000`
  * `1 <= k <= n`

## Solution

```python
class Solution:
    def rearrangeSticks(self, n: int, k: int) -> int:
        MOD = 10**9 + 7
        
        # dp[i][j] = number of ways to arrange i sticks with j visible
        dp = [[0] * (k + 1) for _ in range(n + 1)]
        
        # Base case: 0 sticks, 0 visible
        dp[0][0] = 1
        
        # Build the DP table
        for i in range(1, n + 1):
            for j in range(1, min(i, k) + 1):
                # Case 1: Place the tallest stick (i) at the beginning
                # This makes it visible, so we need j-1 visible sticks from remaining i-1
                # The remaining i-1 sticks can be arranged in any order
                dp[i][j] = dp[i-1][j-1]
                
                # Case 2: Place the tallest stick (i) after the first position
                # We can place it after any of the remaining i-1 positions
                # This doesn't make it visible (blocked by previous stick)
                # We need j visible sticks from remaining i-1 sticks
                # Multiply by (i-1) because we can insert the tallest stick in i-1 positions
                dp[i][j] = (dp[i][j] + dp[i-1][j] * (i - 1)) % MOD
        
        return dp[n][k]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
