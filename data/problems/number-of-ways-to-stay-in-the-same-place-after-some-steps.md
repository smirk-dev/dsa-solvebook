---
id: "1398"
title: "Number of Ways to Stay in the Same Place After Some Steps"
slug: "number-of-ways-to-stay-in-the-same-place-after-some-steps"
difficulty: "Hard"
tags: ["Dynamic Programming"]
language: "java"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951121953"
---

## Problem

You have a pointer at index `0` in an array of size `arrLen`. At each step, you can move 1 position to the left, 1 position to the right in the array, or stay in the same place (The pointer should not be placed outside the array at any time).

Given two integers `steps` and `arrLen`, return the number of ways such that your pointer is still at index `0` after **exactly** `steps` steps. Since the answer may be too large, return it **modulo** `109 + 7`.

 

**Example 1:**
    
    
    **Input:** steps = 3, arrLen = 2
    **Output:** 4
    **Explanation:** There are 4 differents ways to stay at index 0 after 3 steps.
    Right, Left, Stay
    Stay, Right, Left
    Right, Stay, Left
    Stay, Stay, Stay
    

**Example 2:**
    
    
    **Input:** steps = 2, arrLen = 4
    **Output:** 2
    **Explanation:** There are 2 differents ways to stay at index 0 after 2 steps
    Right, Left
    Stay, Stay
    

**Example 3:**
    
    
    **Input:** steps = 4, arrLen = 2
    **Output:** 8
    

 

**Constraints:**

  * `1 <= steps <= 500`
  * `1 <= arrLen <= 106`

## Solution

```java
class Solution {
    public int numWays(int steps, int arrLen) {
        int maxPosition = Math.min(steps / 2 + 1, arrLen);
        int[] curWays = new int[maxPosition + 2];
        int[] nextWays = new int[maxPosition + 2];
        curWays[1] = 1;
        int mod = 1000000007;

        while (steps > 0) {
            for (int pos = 1; pos <= maxPosition; pos++) {
                nextWays[pos] = (int)(((long)curWays[pos] + curWays[pos - 1] + curWays[pos + 1]) % mod);
            }

            int[] temp = curWays;
            curWays = nextWays;
            nextWays = temp;
            steps--;
        }

        return curWays[1];        
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
