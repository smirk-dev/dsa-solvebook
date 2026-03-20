---
id: "530"
title: "Minimum Absolute Difference in BST"
slug: "minimum-absolute-difference-in-bst"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Search Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825839339"
---

## Problem

Given the `root` of a Binary Search Tree (BST), return _the minimum absolute difference between the values of any two different nodes in the tree_.

 

**Example 1:**
    
    
    **Input:** root = [4,2,6,1,3]
    **Output:** 1
    

**Example 2:**
    
    
    **Input:** root = [1,0,48,null,null,12,49]
    **Output:** 1
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[2, 104]`.
  * `0 <= Node.val <= 105`



 

**Note:** This question is the same as 783: <https://leetcode.com/problems/minimum-distance-between-bst-nodes/>

## Solution

```python
class Solution(object):
    def getMinimumDifference(self, root):
        self.prev = None
        self.ans = float('inf')

        def dfs(node):
            if node:
                dfs(node.left)
                if self.prev is not None:
                    self.ans = min(self.ans, node.val - self.prev)
                self.prev = node.val
                dfs(node.right)

        dfs(root)
        return self.ans
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
