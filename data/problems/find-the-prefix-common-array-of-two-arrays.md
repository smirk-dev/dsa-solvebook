---
id: "2766"
title: "Find the Prefix Common Array of Two Arrays"
slug: "find-the-prefix-common-array-of-two-arrays"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Bit Manipulation"]
language: "java"
date_solved: "2026-05-20"
status: "solved"
submission_id: "2007845348"
---

## Problem

You are given two **0-indexed** integer**** permutations `A` and `B` of length `n`.

A **prefix common array** of `A` and `B` is an array `C` such that `C[i]` is equal to the count of numbers that are present at or before the index `i` in both `A` and `B`.

Return _the**prefix common array** of _`A` _and_`B`.

A sequence of `n` integers is called a **permutation** if it contains all integers from `1` to `n` exactly once.

 

**Example 1:**
    
    
    **Input:** A = [1,3,2,4], B = [3,1,2,4]
    **Output:** [0,2,3,4]
    **Explanation:** At i = 0: no number is common, so C[0] = 0.
    At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
    At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
    At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.
    

**Example 2:**
    
    
    **Input:** A = [2,3,1], B = [3,1,2]
    **Output:** [0,1,3]
    **Explanation:** At i = 0: no number is common, so C[0] = 0.
    At i = 1: only 3 is common in A and B, so C[1] = 1.
    At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
    

 

**Constraints:**

  * `1 <= A.length == B.length == n <= 50`
  * `1 <= A[i], B[i] <= n`
  * `It is guaranteed that A and B are both a permutation of n integers.`

## Solution

```java
class Solution {
    public int[] findThePrefixCommonArray(int[] A, int[] B) {
        int n = A.length, count = 0;
        int[] res = new int[n];
        boolean[] seen = new boolean[n];

        for (int i = 0; i < n; i++) {
            if (seen[A[i] - 1]) count++;
            else seen[A[i] - 1] = true;

            if (seen[B[i] - 1]) count++;
            else seen[B[i] - 1] = true;

            res[i] = count;
        }

        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
