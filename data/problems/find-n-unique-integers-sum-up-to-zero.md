---
id: "1426"
title: "Find N Unique Integers Sum up to Zero"
slug: "find-n-unique-integers-sum-up-to-zero"
difficulty: "Easy"
tags: ["Array", "Math"]
language: "cpp"
date_solved: "2025-09-20"
status: "solved"
submission_id: "1776780717"
---

## Problem

Given an integer `n`, return **any** array containing `n` **unique** integers such that they add up to `0`.

 

**Example 1:**
    
    
    **Input:** n = 5
    **Output:** [-7,-1,1,3,4]
    **Explanation:** These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
    

**Example 2:**
    
    
    **Input:** n = 3
    **Output:** [-1,0,1]
    

**Example 3:**
    
    
    **Input:** n = 1
    **Output:** [0]
    

 

**Constraints:**

  * `1 <= n <= 1000`

## Solution

```cpp
class Solution {
public:
    vector<int> sumZero(int n) {
        vector<int> a(n);
        for (int i = 0; i < n; i++) {
            a[i] = ((n & 1) && i == n/2) ? 0 : (i < n/2 ? i + 1 : -(n - i));
        }
        return a;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
