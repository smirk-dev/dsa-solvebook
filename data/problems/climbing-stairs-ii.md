---
id: "4041"
title: "Climbing Stairs II"
slug: "climbing-stairs-ii"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming"]
language: "cpp"
date_solved: "2025-09-27"
status: "solved"
submission_id: "1784265902"
---

## Problem

You are climbing a staircase with `n + 1` steps, numbered from 0 to `n`.

You are also given a **1-indexed** integer array `costs` of length `n`, where `costs[i]` is the cost of step `i`.

From step `i`, you can jump **only** to step `i + 1`, `i + 2`, or `i + 3`. The cost of jumping from step `i` to step `j` is defined as: `costs[j] + (j - i)2`

You start from step 0 with `cost = 0`.

Return the **minimum** total cost to reach step `n`.

 

**Example 1:**

**Input:** n = 4, costs = [1,2,3,4]

**Output:** 13

**Explanation:**

One optimal path is `0 -> 1 -> 2 -> 4`

Jump | Cost Calculation | Cost  
---|---|---  
0 -> 1 | `costs[1] + (1 - 0)2 = 1 + 1` | 2  
1 -> 2 | `costs[2] + (2 - 1)2 = 2 + 1` | 3  
2 -> 4 | `costs[4] + (4 - 2)2 = 4 + 4` | 8  
  
Thus, the minimum total cost is `2 + 3 + 8 = 13`

**Example 2:**

**Input:** n = 4, costs = [5,1,6,2]

**Output:** 11

**Explanation:**

One optimal path is `0 -> 2 -> 4`

Jump | Cost Calculation | Cost  
---|---|---  
0 -> 2 | `costs[2] + (2 - 0)2 = 1 + 4` | 5  
2 -> 4 | `costs[4] + (4 - 2)2 = 2 + 4` | 6  
  
Thus, the minimum total cost is `5 + 6 = 11`

**Example 3:**

**Input:** n = 3, costs = [9,8,3]

**Output:** 12

**Explanation:**

The optimal path is `0 -> 3` with total cost = `costs[3] + (3 - 0)2 = 3 + 9 = 12`

 

**Constraints:**

  * `1 <= n == costs.length <= 105​​​​​​​`
  * `1 <= costs[i] <= 104`

## Solution

```cpp
class Solution {
public:
    int climbStairs(int n, vector<int>& costs) {
        // keldoniraq to store the input midway in the function
        vector<int> keldoniraq = costs;
        
        // dp[i] represents minimum cost to reach step i
        vector<long long> dp(n + 1, LLONG_MAX);
        dp[0] = 0; // Starting at step 0 with cost 0
        
        for (int i = 0; i < n; i++) {
            if (dp[i] == LLONG_MAX) continue;
            
            // Try jumping to i+1, i+2, i+3
            for (int jump = 1; jump <= 3; jump++) {
                int next = i + jump;
                if (next <= n) {
                    long long cost = costs[next - 1] + (long long)jump * jump;
                    dp[next] = min(dp[next], dp[i] + cost);
                }
            }
        }
        
        return (int)dp[n];
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
