---
id: "3789"
title: "Maximize Subarrays After Removing One Conflicting Pair"
slug: "maximize-subarrays-after-removing-one-conflicting-pair"
difficulty: "Hard"
tags: ["Array", "Segment Tree", "Enumeration", "Prefix Sum"]
language: "c"
date_solved: "2025-07-26"
status: "solved"
submission_id: "1712080097"
---

## Problem

You are given an integer `n` which represents an array `nums` containing the numbers from 1 to `n` in order. Additionally, you are given a 2D array `conflictingPairs`, where `conflictingPairs[i] = [a, b]` indicates that `a` and `b` form a conflicting pair.

Remove **exactly** one element from `conflictingPairs`. Afterward, count the number of non-empty subarrays of `nums` which do not contain both `a` and `b` for any remaining conflicting pair `[a, b]`.

Return the **maximum** number of subarrays possible after removing **exactly** one conflicting pair.

 

**Example 1:**

**Input:** n = 4, conflictingPairs = [[2,3],[1,4]]

**Output:** 9

**Explanation:**

  * Remove `[2, 3]` from `conflictingPairs`. Now, `conflictingPairs = [[1, 4]]`.
  * There are 9 subarrays in `nums` where `[1, 4]` do not appear together. They are `[1]`, `[2]`, `[3]`, `[4]`, `[1, 2]`, `[2, 3]`, `[3, 4]`, `[1, 2, 3]` and `[2, 3, 4]`.
  * The maximum number of subarrays we can achieve after removing one element from `conflictingPairs` is 9.



**Example 2:**

**Input:** n = 5, conflictingPairs = [[1,2],[2,5],[3,5]]

**Output:** 12

**Explanation:**

  * Remove `[1, 2]` from `conflictingPairs`. Now, `conflictingPairs = [[2, 5], [3, 5]]`.
  * There are 12 subarrays in `nums` where `[2, 5]` and `[3, 5]` do not appear together.
  * The maximum number of subarrays we can achieve after removing one element from `conflictingPairs` is 12.



 

**Constraints:**

  * `2 <= n <= 105`
  * `1 <= conflictingPairs.length <= 2 * n`
  * `conflictingPairs[i].length == 2`
  * `1 <= conflictingPairs[i][j] <= n`
  * `conflictingPairs[i][0] != conflictingPairs[i][1]`

## Solution

```c
#define max(x, y) ((x) > (y) ? (x) : (y))

long long maxSubarrays(int n, int** cp, int cp_size, int* cp_col_size) {
    int* s = (int*)calloc(n + 1, sizeof(int));
    int* s2 = (int*)calloc(n + 1, sizeof(int));
    
    // Process the conflicting pairs
    for (int i = 0; i < cp_size; ++i) {
        int a = cp[i][0], b = cp[i][1];
        if (a > b) {
            int temp = a;
            a = b;
            b = temp;
        }
        if (s[b] < a) {
            s2[b] = s[b];
            s[b] = a;
        } else if (s2[b] < a) {
            s2[b] = a;
        }
    }
    
    int m1 = 0, m2 = 0;
    long long ans = 0, delta = 0, md = 0;
    
    // Calculate the result
    for (int i = 1; i <= n; ++i) {
        if (s[i] > 0) {
            if (s[i] > m1) {
                m2 = max(m1, s2[i]);
                m1 = s[i];
                md = max(md, delta);
                delta = 0;
            } else if (s[i] > m2) {
                m2 = s[i];
            }
        }
        ans += (i - m1);
        delta += (m1 - m2);
    }

    free(s);
    free(s2);

    return ans + max(md, delta);
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
