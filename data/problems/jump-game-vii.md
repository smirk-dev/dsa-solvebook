---
id: "2001"
title: "Jump Game VII"
slug: "jump-game-vii"
difficulty: "Medium"
tags: ["String", "Dynamic Programming", "Sliding Window", "Prefix Sum"]
language: "java"
date_solved: "2026-05-25"
status: "solved"
submission_id: "2012194740"
---

## Problem

You are given a **0-indexed** binary string `s` and two integers `minJump` and `maxJump`. In the beginning, you are standing at index `0`, which is equal to `'0'`. You can move from index `i` to index `j` if the following conditions are fulfilled:

  * `i + minJump <= j <= min(i + maxJump, s.length - 1)`, and
  * `s[j] == '0'`.



Return `true` _if you can reach index_`s.length - 1` _in_`s` _, or_`false` _otherwise._

 

**Example 1:**
    
    
    **Input:** s = "_0_ 11 _0_ 1 _0_ ", minJump = 2, maxJump = 3
    **Output:** true
    **Explanation:**
    In the first step, move from index 0 to index 3. 
    In the second step, move from index 3 to index 5.
    

**Example 2:**
    
    
    **Input:** s = "01101110", minJump = 2, maxJump = 3
    **Output:** false
    

 

**Constraints:**

  * `2 <= s.length <= 105`
  * `s[i]` is either `'0'` or `'1'`.
  * `s[0] == '0'`
  * `1 <= minJump <= maxJump < s.length`

## Solution

```java
class Solution {
    public boolean canReach(String s, int minJ, int maxJ) {
        int n = s.length();

        if (s.charAt(n - 1) == '1')
            return false;

        int[] dp = new int[n];
        dp[0] = 1;
        int reach = 0, maxR = maxJ;

        for (int i = minJ; i < n; i++) {
            if (i > maxR) return false;

            reach += dp[i - minJ];
            if (i > maxJ) reach -= dp[i - maxJ - 1];

            if (reach > 0 && s.charAt(i) == '0') {
                dp[i] = 1;
                maxR = i + maxJ;
            }
        }

        return reach > 0;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
