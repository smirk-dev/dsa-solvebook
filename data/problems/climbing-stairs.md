---
id: "70"
title: "Climbing Stairs"
slug: "climbing-stairs"
difficulty: "Easy"
tags: ["Math", "Dynamic Programming", "Memoization"]
language: "python3"
date_solved: "2025-03-05"
status: "solved"
submission_id: "1234567893"
---

## Problem

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example 1:**
```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**
```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

**Constraints:**
- `1 <= n <= 45`

## Solution

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        prev2, prev1 = 1, 2
        for _ in range(3, n + 1):
            prev2, prev1 = prev1, prev1 + prev2
        return prev1
```

## Editorial

`dp[n] = dp[n-1] + dp[n-2]` — you can reach step `n` from step `n-1` (1 step) or step `n-2` (2 steps). This is the Fibonacci recurrence.

Space-optimised: keep only the last two values instead of the full array. This is the "gateway" DP problem — if this structure makes sense, most 1D DP problems will too.
