---
id: "3250"
title: "Maximum Square Area by Removing Fences From a Field"
slug: "maximum-square-area-by-removing-fences-from-a-field"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Enumeration"]
language: "java"
date_solved: "2026-01-16"
status: "solved"
submission_id: "1886470996"
---

## Problem

There is a large `(m - 1) x (n - 1)` rectangular field with corners at `(1, 1)` and `(m, n)` containing some horizontal and vertical fences given in arrays `hFences` and `vFences` respectively.

Horizontal fences are from the coordinates `(hFences[i], 1)` to `(hFences[i], n)` and vertical fences are from the coordinates `(1, vFences[i])` to `(m, vFences[i])`.

Return _the**maximum** area of a **square** field that can be formed by **removing** some fences (**possibly none**) or _`-1` _if it is impossible to make a square field_.

Since the answer may be large, return it **modulo** `109 + 7`.

**Note:** The field is surrounded by two horizontal fences from the coordinates `(1, 1)` to `(1, n)` and `(m, 1)` to `(m, n)` and two vertical fences from the coordinates `(1, 1)` to `(m, 1)` and `(1, n)` to `(m, n)`. These fences **cannot** be removed.

 

**Example 1:**
    
    
    **Input:** m = 4, n = 3, hFences = [2,3], vFences = [2]
    **Output:** 4
    **Explanation:** Removing the horizontal fence at 2 and the vertical fence at 2 will give a square field of area 4.
    

**Example 2:**
    
    
    **Input:** m = 6, n = 7, hFences = [2], vFences = [4]
    **Output:** -1
    **Explanation:** It can be proved that there is no way to create a square field by removing fences.
    

 

**Constraints:**

  * `3 <= m, n <= 109`
  * `1 <= hFences.length, vFences.length <= 600`
  * `1 < hFences[i] < m`
  * `1 < vFences[i] < n`
  * `hFences` and `vFences` are unique.

## Solution

```java
class Solution {
    public int maximizeSquareArea(int m, int n, int[] hFences, int[] vFences) {
        int[] h = Arrays.copyOf(hFences, hFences.length + 2);
        h[hFences.length] = 1;
        h[hFences.length + 1] = m;
        int[] v = Arrays.copyOf(vFences, vFences.length + 2);
        v[vFences.length] = 1;
        v[vFences.length + 1] = n;
        Arrays.sort(h);
        Arrays.sort(v);
        Set<Integer> hGaps = new HashSet<>();
        for (int i = 0; i < h.length; i++) {
            for (int j = i + 1; j < h.length; j++) {
                hGaps.add(h[j] - h[i]);
            }
        }
        long maxSide = -1;
        for (int i = 0; i < v.length; i++) {
            for (int j = i + 1; j < v.length; j++) {
                int currentGap = v[j] - v[i];
                if (hGaps.contains(currentGap)) {
                    maxSide = Math.max(maxSide, currentGap);
                }
            }
        }
        if (maxSide == -1) return -1;
        long MOD = 1_000_000_007;
        return (int) ((maxSide * maxSide) % MOD);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
