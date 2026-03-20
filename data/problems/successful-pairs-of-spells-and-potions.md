---
id: "2392"
title: "Successful Pairs of Spells and Potions"
slug: "successful-pairs-of-spells-and-potions"
difficulty: "Medium"
tags: ["Array", "Two Pointers", "Binary Search", "Sorting"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823998333"
---

## Problem

You are given two positive integer arrays `spells` and `potions`, of length `n` and `m` respectively, where `spells[i]` represents the strength of the `ith` spell and `potions[j]` represents the strength of the `jth` potion.

You are also given an integer `success`. A spell and potion pair is considered **successful** if the **product** of their strengths is **at least** `success`.

Return _an integer array_`pairs` _of length_`n` _where_`pairs[i]`_is the number of**potions** that will form a successful pair with the _`ith` _spell._

 

**Example 1:**
    
    
    **Input:** spells = [5,1,3], potions = [1,2,3,4,5], success = 7
    **Output:** [4,0,3]
    **Explanation:**
    - 0th spell: 5 * [1,2,3,4,5] = [5,_**10**_ ,_**15**_ ,_**20**_ ,_**25**_]. 4 pairs are successful.
    - 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
    - 2nd spell: 3 * [1,2,3,4,5] = [3,6,_**9**_ ,_**12**_ ,_**15**_]. 3 pairs are successful.
    Thus, [4,0,3] is returned.
    

**Example 2:**
    
    
    **Input:** spells = [3,1,2], potions = [8,5,8], success = 16
    **Output:** [2,0,2]
    **Explanation:**
    - 0th spell: 3 * [8,5,8] = [_**24**_ ,15,_**24**_]. 2 pairs are successful.
    - 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful. 
    - 2nd spell: 2 * [8,5,8] = [**_16_** ,10,_**16**_]. 2 pairs are successful. 
    Thus, [2,0,2] is returned.
    

 

**Constraints:**

  * `n == spells.length`
  * `m == potions.length`
  * `1 <= n, m <= 105`
  * `1 <= spells[i], potions[i] <= 105`
  * `1 <= success <= 1010`

## Solution

```python
class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
        import bisect
        potions.sort()
        result = []
        m = len(potions)
        for spell in spells:
            min_potion = (success + spell - 1) // spell
            idx = bisect.bisect_left(potions, min_potion)
            result.append(m - idx)
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
