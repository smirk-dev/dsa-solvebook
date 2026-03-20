---
id: "96"
title: "Unique Binary Search Trees"
slug: "unique-binary-search-trees"
difficulty: "Medium"
tags: ["Math", "Dynamic Programming", "Tree", "Binary Search Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-03-30"
status: "solved"
submission_id: "1591293196"
---

## Problem

Given an integer `n`, return _the number of structurally unique**BST '**s (binary search trees) which has exactly _`n` _nodes of unique values from_ `1` _to_ `n`.

 

**Example 1:**
    
    
    **Input:** n = 3
    **Output:** 5
    

**Example 2:**
    
    
    **Input:** n = 1
    **Output:** 1
    

 

**Constraints:**

  * `1 <= n <= 19`

## Solution

```python
class Solution:
    def numTrees(self, n: int) -> int:
        uniq_tree = [1] * (n + 1)
        
        for nodes in range(2, n + 1):
            total = 0
            for root in range(1, nodes + 1):
                total += uniq_tree[root - 1] * uniq_tree[nodes - root]
            uniq_tree[nodes] = total
        
        return uniq_tree[n]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
