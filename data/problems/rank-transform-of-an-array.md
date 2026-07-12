---
id: "1256"
title: "Rank Transform of an Array"
slug: "rank-transform-of-an-array"
difficulty: "Easy"
tags: ["Array", "Hash Table", "Sorting"]
language: "java"
date_solved: "2026-07-12"
status: "solved"
submission_id: "2064947639"
---

## Problem

Given an array of integers `arr`, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

  * Rank is an integer starting from 1.
  * The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
  * Rank should be as small as possible.



 

**Example 1:**
    
    
    **Input:** arr = [40,10,20,30]
    **Output:** [4,1,2,3]
    **Explanation** : 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

**Example 2:**
    
    
    **Input:** arr = [100,100,100]
    **Output:** [1,1,1]
    **Explanation** : Same elements share the same rank.
    

**Example 3:**
    
    
    **Input:** arr = [37,12,28,9,100,56,80,5,12]
    **Output:** [5,3,4,2,8,6,7,1,3]
    

 

**Constraints:**

  * `0 <= arr.length <= 105`
  * `-109 <= arr[i] <= 109`

## Solution

```java
class Solution {
    public int[] arrayRankTransform(int[] arr) {
        int[] sorted = arr.clone();
        Arrays.sort(sorted);

        int m = 0;
        for (int x : sorted) {
            if (m == 0 || sorted[m - 1] != x) {
                sorted[m++] = x;
            }
        }

        int[] unique = Arrays.copyOf(sorted, m);
        for (int i = 0; i < arr.length; i++) {
            arr[i] = Arrays.binarySearch(unique, arr[i]) + 1;
        }

        return arr;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
