---
id: "135"
title: "Candy"
slug: "candy"
difficulty: "Hard"
tags: ["Array", "Greedy"]
language: "python3"
date_solved: "2026-03-14"
status: "solved"
submission_id: "1947702592"
---

## Problem

There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`.

You are giving candies to these children subjected to the following requirements:

  * Each child must have at least one candy.
  * Children with a higher rating get more candies than their neighbors.



Return _the minimum number of candies you need to have to distribute the candies to the children_.

 

**Example 1:**
    
    
    **Input:** ratings = [1,0,2]
    **Output:** 5
    **Explanation:** You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
    

**Example 2:**
    
    
    **Input:** ratings = [1,2,2]
    **Output:** 4
    **Explanation:** You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
    The third child gets 1 candy because it satisfies the above two conditions.
    

 

**Constraints:**

  * `n == ratings.length`
  * `1 <= n <= 2 * 104`
  * `0 <= ratings[i] <= 2 * 104`

## Solution

```python
class Solution:
    def candy(self, ratings: List[int]) -> int:
        n = len(ratings)
        candies = [1] * n
        
        # Left to right: if next child has higher rating, give more candies
        for i in range(1, n):
            if ratings[i] > ratings[i - 1]:
                candies[i] = candies[i - 1] + 1
        
        # Right to left: if previous child has higher rating, ensure more candies
        for i in range(n - 2, -1, -1):
            if ratings[i] > ratings[i + 1]:
                candies[i] = max(candies[i], candies[i + 1] + 1)
        
        return sum(candies)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
