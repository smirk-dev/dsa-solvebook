---
id: "1443"
title: "Minimum Distance to Type a Word Using Two Fingers"
slug: "minimum-distance-to-type-a-word-using-two-fingers"
difficulty: "Hard"
tags: ["String", "Dynamic Programming"]
language: "java"
date_solved: "2026-04-12"
status: "solved"
submission_id: "1976118331"
---

## Problem

You have a keyboard layout as shown above in the **X-Y** plane, where each English uppercase letter is located at some coordinate.

  * For example, the letter `'A'` is located at coordinate `(0, 0)`, the letter `'B'` is located at coordinate `(0, 1)`, the letter `'P'` is located at coordinate `(2, 3)` and the letter `'Z'` is located at coordinate `(4, 1)`.



Given the string `word`, return _the minimum total**distance** to type such string using only two fingers_.

The **distance** between coordinates `(x1, y1)` and `(x2, y2)` is `|x1 - x2| + |y1 - y2|`.

**Note** that the initial positions of your two fingers are considered free so do not count towards your total distance, also your two fingers do not have to start at the first letter or the first two letters.

 

**Example 1:**
    
    
    **Input:** word = "CAKE"
    **Output:** 3
    **Explanation:** Using two fingers, one optimal way to type "CAKE" is: 
    Finger 1 on letter 'C' -> cost = 0 
    Finger 1 on letter 'A' -> cost = Distance from letter 'C' to letter 'A' = 2 
    Finger 2 on letter 'K' -> cost = 0 
    Finger 2 on letter 'E' -> cost = Distance from letter 'K' to letter 'E' = 1 
    Total distance = 3
    

**Example 2:**
    
    
    **Input:** word = "HAPPY"
    **Output:** 6
    **Explanation:** Using two fingers, one optimal way to type "HAPPY" is:
    Finger 1 on letter 'H' -> cost = 0
    Finger 1 on letter 'A' -> cost = Distance from letter 'H' to letter 'A' = 2
    Finger 2 on letter 'P' -> cost = 0
    Finger 2 on letter 'P' -> cost = Distance from letter 'P' to letter 'P' = 0
    Finger 1 on letter 'Y' -> cost = Distance from letter 'A' to letter 'Y' = 4
    Total distance = 6
    

 

**Constraints:**

  * `2 <= word.length <= 300`
  * `word` consists of uppercase English letters.

## Solution

```java
class Solution {
    int cal(int a, int b) {
        return Math.abs(a / 6 - b / 6) + Math.abs(a % 6 - b % 6);
    }

    public int minimumDistance(String word) {
        int n = word.length();
        int[][][] dp = new int[n + 1][26][26];

        for (int i = 0; i < n; i++) {
            int t = word.charAt(i) - 'A';

            for (int j = 0; j < 26; j++) {
                for (int k = 0; k < 26; k++) {
                    dp[i + 1][j][k] = 1000000;
                }
            }

            for (int j = 0; j < 26; j++) {
                for (int k = 0; k < 26; k++) {
                    dp[i + 1][j][t] = Math.min(dp[i + 1][j][t], dp[i][j][k] + cal(k, t));
                    dp[i + 1][t][k] = Math.min(dp[i + 1][t][k], dp[i][j][k] + cal(j, t));
                }
            }
        }

        int ans = 1000000;
        for (int j = 0; j < 26; j++) {
            for (int k = 0; k < 26; k++) {
                ans = Math.min(ans, dp[n][j][k]);
            }
        }

        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
