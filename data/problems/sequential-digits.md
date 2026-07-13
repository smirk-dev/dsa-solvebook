---
id: "1212"
title: "Sequential Digits"
slug: "sequential-digits"
difficulty: "Medium"
tags: ["Enumeration"]
language: "java"
date_solved: "2026-07-13"
status: "solved"
submission_id: "2066212221"
---

## Problem

An integer has _sequential digits_ if and only if each digit in the number is one more than the previous digit.

Return a **sorted** list of all the integers in the range `[low, high]` inclusive that have sequential digits.

 

**Example 1:**
    
    
    **Input:** low = 100, high = 300
    **Output:** [123,234]
    

**Example 2:**
    
    
    **Input:** low = 1000, high = 13000
    **Output:** [1234,2345,3456,4567,5678,6789,12345]
    

 

**Constraints:**

  * `10 <= low <= high <= 10^9`

## Solution

```java
class Solution {
    static final int[] q = new int[45];

    static {
        int n = 0;

        for (int i = 1; i < 10; i++)
            q[n++] = i;

        for (int i = 0; i < n; i++) {
            int d = q[i] % 10;

            if (d < 9) 
                q[n++] = q[i] * 10 + d + 1;
        }
    }

    public List<Integer> sequentialDigits(int low, int high) {
        List<Integer> res = new ArrayList<>();

        for (int x : q)
            if (x >= low && x <= high)
                res.add(x);

        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
