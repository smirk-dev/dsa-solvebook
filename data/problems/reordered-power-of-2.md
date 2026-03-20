---
id: "900"
title: "Reordered Power of 2"
slug: "reordered-power-of-2"
difficulty: "Medium"
tags: ["Hash Table", "Math", "Sorting", "Counting", "Enumeration"]
language: "cpp"
date_solved: "2025-08-10"
status: "solved"
submission_id: "1730072676"
---

## Problem

You are given an integer `n`. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return `true` _if and only if we can do this so that the resulting number is a power of two_.

 

**Example 1:**
    
    
    **Input:** n = 1
    **Output:** true
    

**Example 2:**
    
    
    **Input:** n = 10
    **Output:** false
    

 

**Constraints:**

  * `1 <= n <= 109`

## Solution

```cpp
class Solution {
public:
    bool reorderedPowerOf2(int n) {
        auto countDigits = [](int x) {
            string s = to_string(x);
            sort(s.begin(), s.end());
            return s;
        };
        string target = countDigits(n);
        for (int i = 0; i < 31; i++) {
            if (countDigits(1 << i) == target) return true;
        }
        return false;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
