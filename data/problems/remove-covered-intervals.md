---
id: "1222"
title: "Remove Covered Intervals"
slug: "remove-covered-intervals"
difficulty: "Medium"
tags: ["Array", "Sorting"]
language: "java"
date_solved: "2026-07-06"
status: "solved"
submission_id: "2057650712"
---

## Problem

Given an array `intervals` where `intervals[i] = [li, ri]` represent the interval `[li, ri)`, remove all intervals that are covered by another interval in the list.

The interval `[a, b)` is covered by the interval `[c, d)` if and only if `c <= a` and `b <= d`.

Return _the number of remaining intervals_.

 

**Example 1:**
    
    
    **Input:** intervals = [[1,4],[3,6],[2,8]]
    **Output:** 2
    **Explanation:** Interval [3,6] is covered by [2,8], therefore it is removed.
    

**Example 2:**
    
    
    **Input:** intervals = [[1,4],[2,3]]
    **Output:** 1
    

 

**Constraints:**

  * `1 <= intervals.length <= 1000`
  * `intervals[i].length == 2`
  * `0 <= li < ri <= 105`
  * All the given intervals are **unique**.

## Solution

```java
class Solution {
    public int removeCoveredIntervals(int[][] A) {
        Arrays.sort(A, (a, b) -> a[0] != b[0] ? a[0] - b[0] : b[1] - a[1]);

        int res = 0, r = 0;

        for (int[] x : A) {
            if (x[1] > r) {
                r = x[1];
                res++;
            }
        }

        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
