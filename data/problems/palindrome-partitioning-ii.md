---
id: "132"
title: "Palindrome Partitioning II"
slug: "palindrome-partitioning-ii"
difficulty: "Hard"
tags: ["String", "Dynamic Programming"]
language: "java"
date_solved: "2026-04-06"
status: "solved"
submission_id: "1970233458"
---

## Problem

Given a string `s`, partition `s` such that every substring of the partition is a palindrome.

Return _the**minimum** cuts needed for a palindrome partitioning of_ `s`.

 

**Example 1:**
    
    
    **Input:** s = "aab"
    **Output:** 1
    **Explanation:** The palindrome partitioning ["aa","b"] could be produced using 1 cut.
    

**Example 2:**
    
    
    **Input:** s = "a"
    **Output:** 0
    

**Example 3:**
    
    
    **Input:** s = "ab"
    **Output:** 1
    

 

**Constraints:**

  * `1 <= s.length <= 2000`
  * `s` consists of lowercase English letters only.

## Solution

```java
class Solution {
    public int minCut(String s) {
        int n = s.length();
        if (n <= 1) return 0;

        boolean[][] isPal = new boolean[n][n];
        // Precompute palindrome table using DP
        for (int end = 0; end < n; end++) {
            for (int start = 0; start <= end; start++) {
                if (s.charAt(start) == s.charAt(end) && 
                   (end - start <= 2 || isPal[start + 1][end - 1])) {
                    isPal[start][end] = true;
                }
            }
        }

        int[] dp = new int[n];
        for (int i = 0; i < n; i++) {
            if (isPal[0][i]) {
                dp[i] = 0; // No cut needed if s[0...i] is a palindrome
            } else {
                dp[i] = i; // Max cuts: one for each character
                for (int j = 0; j < i; j++) {
                    if (isPal[j + 1][i]) {
                        // If suffix is palindrome, total = cuts for prefix + 1
                        dp[i] = Math.min(dp[i], dp[j] + 1);
                    }
                }
            }
        }
        return dp[n - 1];
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
