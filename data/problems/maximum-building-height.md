---
id: "1968"
title: "Maximum Building Height"
slug: "maximum-building-height"
difficulty: "Hard"
tags: ["Array", "Math", "Sorting"]
language: "java"
date_solved: "2026-06-20"
status: "solved"
submission_id: "2039799130"
---

## Problem

You want to build `n` new buildings in a city. The new buildings will be built in a line and are labeled from `1` to `n`.

However, there are city restrictions on the heights of the new buildings:

  * The height of each building must be a non-negative integer.
  * The height of the first building **must** be `0`.
  * The height difference between any two adjacent buildings **cannot exceed** `1`.



Additionally, there are city restrictions on the maximum height of specific buildings. These restrictions are given as a 2D integer array `restrictions` where `restrictions[i] = [idi, maxHeighti]` indicates that building `idi` must have a height **less than or equal to** `maxHeighti`.

It is guaranteed that each building will appear **at most once** in `restrictions`, and building `1` will **not** be in `restrictions`.

Return _the**maximum possible height** of the **tallest** building_.

 

**Example 1:**
    
    
    **Input:** n = 5, restrictions = [[2,1],[4,1]]
    **Output:** 2
    **Explanation:** The green area in the image indicates the maximum allowed height for each building.
    We can build the buildings with heights [0,1,2,1,2], and the tallest building has a height of 2.

**Example 2:**
    
    
    **Input:** n = 6, restrictions = []
    **Output:** 5
    **Explanation:** The green area in the image indicates the maximum allowed height for each building.
    We can build the buildings with heights [0,1,2,3,4,5], and the tallest building has a height of 5.
    

**Example 3:**
    
    
    **Input:** n = 10, restrictions = [[5,3],[2,5],[7,4],[10,3]]
    **Output:** 5
    **Explanation:** The green area in the image indicates the maximum allowed height for each building.
    We can build the buildings with heights [0,1,2,3,3,4,4,5,4,3], and the tallest building has a height of 5.
    

 

**Constraints:**

  * `2 <= n <= 109`
  * `0 <= restrictions.length <= min(n - 1, 105)`
  * `2 <= idi <= n`
  * `idi` is **unique**.
  * `0 <= maxHeighti <= 109`

## Solution

```java
class Solution {
    public int maxBuilding(int num, int[][] restrictions) {
        List<int[]> r = new ArrayList<>(Arrays.asList(restrictions));
        r.add(new int[]{1, 0});
        r.sort((a, b) -> Integer.compare(a[0], b[0]));
        int n = r.size();

        for (int i = 1; i < n; i++)
            r.get(i)[1] = yCap(r.get(i - 1), r.get(i));

        for (int i = n - 2; i >= 0; i--)
            r.get(i)[1] = yCap(r.get(i + 1), r.get(i));

        int res = 0;
        for (int i = 1; i < n; i++)
            res = Math.max(res, yPeak(r.get(i - 1), r.get(i)));

        return Math.max(res, r.get(n - 1)[1] + num - r.get(n - 1)[0]);
    }

    int yCap(int[] l, int[] b) {
        return Math.min(b[1], l[1] + Math.abs(b[0] - l[0]));
    }

    int yPeak(int[] l, int[] b) {
        return (l[1] + b[1] + b[0] - l[0]) >> 1;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
