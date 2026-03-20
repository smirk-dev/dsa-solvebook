---
id: "2882"
title: "Ways to Express an Integer as Sum of Powers"
slug: "ways-to-express-an-integer-as-sum-of-powers"
difficulty: "Medium"
tags: ["Dynamic Programming"]
language: "cpp"
date_solved: "2025-08-12"
status: "solved"
submission_id: "1732742747"
---

## Problem

Given two **positive** integers `n` and `x`.

Return _the number of ways_`n` _can be expressed as the sum of the_`xth` _power of**unique** positive integers, in other words, the number of sets of unique integers _`[n1, n2, ..., nk]`_where_`n = n1x + n2x + ... + nkx` _._

Since the result can be very large, return it modulo `109 + 7`.

For example, if `n = 160` and `x = 3`, one way to express `n` is `n = 23 + 33 + 53`.

 

**Example 1:**
    
    
    **Input:** n = 10, x = 2
    **Output:** 1
    **Explanation:** We can express n as the following: n = 32 + 12 = 10.
    It can be shown that it is the only way to express 10 as the sum of the 2nd power of unique integers.
    

**Example 2:**
    
    
    **Input:** n = 4, x = 1
    **Output:** 2
    **Explanation:** We can express n in the following ways:
    - n = 41 = 4.
    - n = 31 + 11 = 4.
    

 

**Constraints:**

  * `1 <= n <= 300`
  * `1 <= x <= 5`

## Solution

```cpp
#include <vector>
using namespace std;
static const int MOD = 1'000'000'007;
class Solution {
public:
    int numberOfWays(int n, int x) {
        // collect powers i^x <= n
        vector<int> powers;
        for (int i = 1; ; ++i) {
            long long p = 1;
            for (int k = 0; k < x; ++k) p *= i;
            if (p > n) break;
            powers.push_back((int)p);
        }

        vector<long long> dp(n + 1, 0);
        dp[0] = 1;
        for (int p : powers) {
            for (int s = n; s >= p; --s) {
                dp[s] = (dp[s] + dp[s - p]) % MOD;
            }
        }
        return (int)dp[n];
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
