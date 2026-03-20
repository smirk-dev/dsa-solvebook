---
id: "989"
title: "Largest Component Size by Common Factor"
slug: "largest-component-size-by-common-factor"
difficulty: "Hard"
tags: ["Array", "Hash Table", "Math", "Union-Find", "Number Theory"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830336129"
---

## Problem

You are given an integer array of unique positive integers `nums`. Consider the following graph:

  * There are `nums.length` nodes, labeled `nums[0]` to `nums[nums.length - 1]`,
  * There is an undirected edge between `nums[i]` and `nums[j]` if `nums[i]` and `nums[j]` share a common factor greater than `1`.



Return _the size of the largest connected component in the graph_.

 

**Example 1:**
    
    
    **Input:** nums = [4,6,15,35]
    **Output:** 4
    

**Example 2:**
    
    
    **Input:** nums = [20,50,9,63]
    **Output:** 2
    

**Example 3:**
    
    
    **Input:** nums = [2,3,6,7,4,12,21,39]
    **Output:** 8
    

 

**Constraints:**

  * `1 <= nums.length <= 2 * 104`
  * `1 <= nums[i] <= 105`
  * All the values of `nums` are **unique**.

## Solution

```python
class Solution:
    def largestComponentSize(self, nums: List[int]) -> int:
        import collections

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x, y):
            parent[find(x)] = find(y)

        max_num = max(nums)
        parent = {i: i for i in nums}
        for num in nums:
            for factor in range(2, int(num**0.5) + 1):
                if num % factor == 0:
                    if factor not in parent:
                        parent[factor] = factor
                    union(num, factor)
                    other = num // factor
                    if other not in parent:
                        parent[other] = other
                    union(num, other)
        counts = collections.Counter(find(num) for num in nums)
        return max(counts.values())
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
