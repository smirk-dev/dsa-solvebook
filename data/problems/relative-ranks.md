---
id: "506"
title: "Relative Ranks"
slug: "relative-ranks"
difficulty: "Easy"
tags: ["Array", "Sorting", "Heap (Priority Queue)"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071541108"
---

## Problem

You are given an integer array `score` of size `n`, where `score[i]` is the score of the `ith` athlete in a competition. All the scores are guaranteed to be **unique**.

The athletes are **placed** based on their scores, where the `1st` place athlete has the highest score, the `2nd` place athlete has the `2nd` highest score, and so on. The placement of each athlete determines their rank:

  * The `1st` place athlete's rank is `"Gold Medal"`.
  * The `2nd` place athlete's rank is `"Silver Medal"`.
  * The `3rd` place athlete's rank is `"Bronze Medal"`.
  * For the `4th` place to the `nth` place athlete, their rank is their placement number (i.e., the `xth` place athlete's rank is `"x"`).



Return an array `answer` of size `n` where `answer[i]` is the **rank** of the `ith` athlete.

 

**Example 1:**
    
    
    **Input:** score = [5,4,3,2,1]
    **Output:** ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
    **Explanation:** The placements are [1st, 2nd, 3rd, 4th, 5th].

**Example 2:**
    
    
    **Input:** score = [10,3,8,9,4]
    **Output:** ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
    **Explanation:** The placements are [1st, 5th, 3rd, 2nd, 4th].
    
    

 

**Constraints:**

  * `n == score.length`
  * `1 <= n <= 104`
  * `0 <= score[i] <= 106`
  * All the values in `score` are **unique**.

## Solution

```java
class Solution {
    public String[] findRelativeRanks(int[] score) {
        
        int n = score.length;
        
        int[][] sortedPairs = new int[n][2];
        for (int i = 0 ; i < n ; i++) sortedPairs[i] = new int[] {i, score[i]};
        
        Arrays.sort(sortedPairs, (x, y) -> (y[1] - x[1]));
        
        String[] ans = new String[n];
        
        for (int i = 0 ; i < n ; i++) {
            
            if (i == 0) {
                ans[sortedPairs[i][0]] = "Gold Medal";
            } else if (i == 1) {
                ans[sortedPairs[i][0]] = "Silver Medal";
            } else if (i == 2) {
                ans[sortedPairs[i][0]] = "Bronze Medal";
            } else {
                ans[sortedPairs[i][0]] = String.valueOf(i+1);
            }
        }
        
        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
