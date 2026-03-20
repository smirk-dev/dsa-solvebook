---
id: "1306"
title: "Minimum Absolute Difference"
slug: "minimum-absolute-difference"
difficulty: "Easy"
tags: ["Array", "Sorting"]
language: "java"
date_solved: "2026-01-26"
status: "solved"
submission_id: "1897442256"
---

## Problem

Given an array of **distinct** integers `arr`, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair `[a, b]` follows

  * `a, b` are from `arr`
  * `a < b`
  * `b - a` equals to the minimum absolute difference of any two elements in `arr`



 

**Example 1:**
    
    
    **Input:** arr = [4,2,1,3]
    **Output:** [[1,2],[2,3],[3,4]]
    **Explanation:** The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

**Example 2:**
    
    
    **Input:** arr = [1,3,6,10,15]
    **Output:** [[1,3]]
    

**Example 3:**
    
    
    **Input:** arr = [3,8,-10,23,19,-4,-14,27]
    **Output:** [[-14,-10],[19,23],[23,27]]
    

 

**Constraints:**

  * `2 <= arr.length <= 105`
  * `-106 <= arr[i] <= 106`

## Solution

```java
class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] A) {
        Arrays.sort(A);
        int n = A.length;
        int minDiff = Integer.MAX_VALUE;
        List<List<Integer>> res = new ArrayList<>();

        for (int i = 1; i < n; i++) {
            int diff = A[i] - A[i - 1];
            if (diff < minDiff) {
                minDiff = diff;
                res = new ArrayList<>();
                res.add(Arrays.asList(A[i - 1], A[i]));
            } else if (diff == minDiff) {
                res.add(Arrays.asList(A[i - 1], A[i]));
            }
        }

        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
