---
id: "1138"
title: "Grumpy Bookstore Owner"
slug: "grumpy-bookstore-owner"
difficulty: "Medium"
tags: ["Array", "Sliding Window"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830334919"
---

## Problem

There is a bookstore owner that has a store open for `n` minutes. You are given an integer array `customers` of length `n` where `customers[i]` is the number of the customers that enter the store at the start of the `ith` minute and all those customers leave after the end of that minute.

During certain minutes, the bookstore owner is grumpy. You are given a binary array grumpy where `grumpy[i]` is `1` if the bookstore owner is grumpy during the `ith` minute, and is `0` otherwise.

When the bookstore owner is grumpy, the customers entering during that minute are not **satisfied**. Otherwise, they are satisfied.

The bookstore owner knows a secret technique to remain **not grumpy** for `minutes` consecutive minutes, but this technique can only be used **once**.

Return the **maximum** number of customers that can be _satisfied_ throughout the day.

 

**Example 1:**

**Input:** customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3

**Output:** 16

**Explanation:**

The bookstore owner keeps themselves not grumpy for the last 3 minutes.

The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

**Example 2:**

**Input:** customers = [1], grumpy = [0], minutes = 1

**Output:** 1

 

**Constraints:**

  * `n == customers.length == grumpy.length`
  * `1 <= minutes <= n <= 2 * 104`
  * `0 <= customers[i] <= 1000`
  * `grumpy[i]` is either `0` or `1`.

## Solution

```python
class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        base = sum(customers[i] for i in range(len(customers)) if grumpy[i] == 0)
        # Sliding window for grumpy minutes
        extra = 0
        max_extra = 0
        for i in range(len(customers)):
            if grumpy[i] == 1:
                extra += customers[i]
            if i >= minutes and grumpy[i-minutes] == 1:
                extra -= customers[i-minutes]
            max_extra = max(max_extra, extra)
        return base + max_extra
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
