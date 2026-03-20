---
id: "1500"
title: "Count Largest Group"
slug: "count-largest-group"
difficulty: "Easy"
tags: ["Hash Table", "Math", "Counting"]
language: "python3"
date_solved: "2025-04-23"
status: "solved"
submission_id: "1615587264"
---

## Problem

You are given an integer `n`.

We need to group the numbers from `1` to `n` according to the sum of its digits. For example, the numbers 14 and 5 belong to the **same** group, whereas 13 and 3 belong to **different** groups.

Return the number of groups that have the largest size, i.e. the **maximum** number of elements.

 

**Example 1:**
    
    
    **Input:** n = 13
    **Output:** 4
    **Explanation:** There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
    [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
    There are 4 groups with largest size.
    

**Example 2:**
    
    
    **Input:** n = 2
    **Output:** 2
    **Explanation:** There are 2 groups [1], [2] of size 1.
    

 

**Constraints:**

  * `1 <= n <= 104`

## Solution

```python
class Solution:
    def countLargestGroup(self, n):
        categorii=[0]*37
        tablouSumaCifrelor=[0]*(n+1)
        for i in range(1,n+1):
            sc=i%10+tablouSumaCifrelor[i//10]
            tablouSumaCifrelor[i]=sc
            categorii[sc] += 1
        valMax=max(categorii)
        nrGrupuri=categorii.count(valMax)
        return nrGrupuri
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
