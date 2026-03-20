---
id: "3945"
title: "Minimum Sensors to Cover Grid"
slug: "minimum-sensors-to-cover-grid"
difficulty: "Medium"
tags: ["Math"]
language: "cpp"
date_solved: "2025-08-16"
status: "solved"
submission_id: "1737377515"
---

## Problem

You are given `n × m` grid and an integer `k`.

A sensor placed on cell `(r, c)` covers all cells whose **Chebyshev distance** from `(r, c)` is **at most** `k`.

The **Chebyshev distance** between two cells `(r1, c1)` and `(r2, c2)` is `max(|r1 − r2|,|c1 − c2|)`.

Your task is to return the **minimum** number of sensors required to cover every cell of the grid.

 

**Example 1:**

**Input:** n = 5, m = 5, k = 1

**Output:** 4

**Explanation:**

Placing sensors at positions `(0, 3)`, `(1, 0)`, `(3, 3)`, and `(4, 1)` ensures every cell in the grid is covered. Thus, the answer is 4.

**Example 2:**

**Input:** n = 2, m = 2, k = 2

**Output:** 1

**Explanation:**

With `k = 2`, a single sensor can cover the entire `2 * 2` grid regardless of its position. Thus, the answer is 1.

 

**Constraints:**

  * `1 <= n <= 103`
  * `1 <= m <= 103`
  * `0 <= k <= 103`

## Solution

```cpp
class Solution {
public:
    int minSensors(int n, int m, int k) {
        long long sensor_range = 2LL * k + 1;
        long long sensors_rows = (n + sensor_range -1) / sensor_range;
        long long sensors_cols = (m + sensor_range - 1)/ sensor_range;
        return (int)(sensors_rows * sensors_cols);
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
