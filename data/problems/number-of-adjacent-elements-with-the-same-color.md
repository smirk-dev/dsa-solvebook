---
id: "2779"
title: "Number of Adjacent Elements With the Same Color"
slug: "number-of-adjacent-elements-with-the-same-color"
difficulty: "Medium"
tags: ["Array"]
language: "java"
date_solved: "2026-03-09"
status: "solved"
submission_id: "1942565380"
---

## Problem

You are given an integer `n` representing an array `colors` of length `n` where all elements are set to 0's meaning **uncolored**. You are also given a 2D integer array `queries` where `queries[i] = [indexi, colori]`. For the `ith` **query** :

  * Set `colors[indexi]` to `colori`.
  * Count the number of adjacent pairs in `colors` which have the same color (regardless of `colori`).



Return an array `answer` of the same length as `queries` where `answer[i]` is the answer to the `ith` query.

 

**Example 1:**

**Input:** n = 4, queries = [[0,2],[1,2],[3,1],[1,1],[2,1]]

**Output:** [0,1,1,0,2]

**Explanation:**

  * Initially array colors = [0,0,0,0], where 0 denotes uncolored elements of the array.
  * After the 1st query colors = [2,0,0,0]. The count of adjacent pairs with the same color is 0.
  * After the 2nd query colors = [2,2,0,0]. The count of adjacent pairs with the same color is 1.
  * After the 3rd query colors = [2,2,0,1]. The count of adjacent pairs with the same color is 1.
  * After the 4th query colors = [2,1,0,1]. The count of adjacent pairs with the same color is 0.
  * After the 5th query colors = [2,1,1,1]. The count of adjacent pairs with the same color is 2.



**Example 2:**

**Input:** n = 1, queries = [[0,100000]]

**Output:** [0]

**Explanation:**

After the 1st query colors = [100000]. The count of adjacent pairs with the same color is 0.

 

**Constraints:**

  * `1 <= n <= 105`
  * `1 <= queries.length <= 105`
  * `queries[i].length == 2`
  * `0 <= indexi <= n - 1`
  * `1 <=  colori <= 105`

## Solution

```java
class Solution {
    public int[] colorTheArray(int n, int[][] queries) {
        int[] colors = new int[n];
        int m = queries.length;
        int[] res = new int[m];
        int count = 0;
        for(int i = 0; i < m; i++){
            int idx = queries[i][0];
            int color = queries[i][1];
            count -= check(colors, idx, n);
            colors[idx] = color;
            count += check(colors, idx, n);
            res[i] = count;
        }
        return res;
    }

    public int check(int[] colors, int i, int n){
        if(colors[i] == 0){
            return 0;
        }
        int count = 0;
        if(i > 0 && colors[i] == colors[i - 1]){
            count++;
        }
        if(i < n - 1 && colors[i] == colors[i + 1]){
            count++;
        }
        return count;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
