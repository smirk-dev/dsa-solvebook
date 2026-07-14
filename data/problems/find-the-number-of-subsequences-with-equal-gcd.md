---
id: "3608"
title: "Find the Number of Subsequences With Equal GCD"
slug: "find-the-number-of-subsequences-with-equal-gcd"
difficulty: "Hard"
tags: ["Array", "Math", "Dynamic Programming", "Number Theory"]
language: "java"
date_solved: "2026-07-14"
status: "solved"
submission_id: "2067268228"
---

## Problem

You are given an integer array `nums`.

Your task is to find the number of pairs of **non-empty** subsequences `(seq1, seq2)` of `nums` that satisfy the following conditions:

  * The subsequences `seq1` and `seq2` are **disjoint** , meaning **no index** of `nums` is common between them.
  * The GCD of the elements of `seq1` is equal to the GCD of the elements of `seq2`.



Return the total number of such pairs.

Since the answer may be very large, return it **modulo** `109 + 7`.

 

**Example 1:**

**Input:** nums = [1,2,3,4]

**Output:** 10

**Explanation:**

The subsequence pairs which have the GCD of their elements equal to 1 are:

  * `([**_1_** , 2, 3, 4], [1, **_2_** , **_3_** , 4])`
  * `([**_1_** , 2, 3, 4], [1, **_2_** , **_3_** , **_4_**])`
  * `([**_1_** , 2, 3, 4], [1, 2, **_3_** , **_4_**])`
  * `([**_1_** , **_2_** , 3, 4], [1, 2, **_3_** , **_4_**])`
  * `([**_1_** , 2, 3, **_4_**], [1, **_2_** , **_3_** , 4])`
  * `([1, **_2_** , **_3_** , 4], [**_1_** , 2, 3, 4])`
  * `([1, **_2_** , **_3_** , 4], [**_1_** , 2, 3, **_4_**])`
  * `([1, **_2_** , **_3_** , **_4_**], [**_1_** , 2, 3, 4])`
  * `([1, 2, **_3_** , **_4_**], [**_1_** , 2, 3, 4])`
  * `([1, 2, **_3_** , **_4_**], [**_1_** , **_2_** , 3, 4])`



**Example 2:**

**Input:** nums = [10,20,30]

**Output:** 2

**Explanation:**

The subsequence pairs which have the GCD of their elements equal to 10 are:

  * `([**_10_** , 20, 30], [10, **_20_** , **_30_**])`
  * `([10, **_20_** , **_30_**], [**_10_** , 20, 30])`



**Example 3:**

**Input:** nums = [1,1,1,1]

**Output:** 50

 

**Constraints:**

  * `1 <= nums.length <= 200`
  * `1 <= nums[i] <= 200`

## Solution

```java
class Solution {
    private static final int MOD = 1_000_000_007;
    private int n;
    private int[][][] dp;

    private int solve(int idx, int g1, int g2, int[] nums) {
        if (idx == n) {
            return (g1 != 0 && g1 == g2) ? 1 : 0;
        }

        if (dp[idx][g1][g2] != -1)
            return dp[idx][g1][g2];

        long ans = 0;

        // Ignore current element
        ans = solve(idx + 1, g1, g2, nums);

        // Put in seq1
        int ng1 = (g1 == 0) ? nums[idx] : gcd(g1, nums[idx]);
        ans = (ans + solve(idx + 1, ng1, g2, nums)) % MOD;

        // Put in seq2
        int ng2 = (g2 == 0) ? nums[idx] : gcd(g2, nums[idx]);
        ans = (ans + solve(idx + 1, g1, ng2, nums)) % MOD;

        return dp[idx][g1][g2] = (int) ans;
    }

    public int subsequencePairCount(int[] nums) {
        n = nums.length;
        dp = new int[n + 1][201][201];

        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= 200; j++) {
                Arrays.fill(dp[i][j], -1);
            }
        }

        return solve(0, 0, 0, nums);
    }

    private int gcd(int a, int b) {
        while (b != 0) {
            int t = a % b;
            a = b;
            b = t;
        }
        return a;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
