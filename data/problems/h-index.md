---
id: "274"
title: "H-Index"
slug: "h-index"
difficulty: "Medium"
tags: ["Array", "Sorting", "Counting Sort"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825851196"
---

## Problem

Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their `ith` paper, return _the researcher 's h-index_.

According to the [definition of h-index on Wikipedia](https://en.wikipedia.org/wiki/H-index): The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times.

 

**Example 1:**
    
    
    **Input:** citations = [3,0,6,1,5]
    **Output:** 3
    **Explanation:** [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
    Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
    

**Example 2:**
    
    
    **Input:** citations = [1,3,1]
    **Output:** 1
    

 

**Constraints:**

  * `n == citations.length`
  * `1 <= n <= 5000`
  * `0 <= citations[i] <= 1000`

## Solution

```python
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        papers = len(citations)
        citation_buckets = [0] * (papers + 1)

        for citation in citations:
            citation_buckets[min(citation, papers)] += 1

        cumulative_papers = 0
        for h_index in range(papers, -1, -1):
            cumulative_papers += citation_buckets[h_index]
            if cumulative_papers >= h_index:
                return h_index
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
