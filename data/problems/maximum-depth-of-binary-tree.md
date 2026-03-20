---
id: "104"
title: "Maximum Depth of Binary Tree"
slug: "maximum-depth-of-binary-tree"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823967442"
---

## Problem

Given the `root` of a binary tree, return _its maximum depth_.

A binary tree's **maximum depth**  is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

**Example 1:**
    
    
    **Input:** root = [3,9,20,null,null,15,7]
    **Output:** 3
    

**Example 2:**
    
    
    **Input:** root = [1,null,2]
    **Output:** 2
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 104]`.
  * `-100 <= Node.val <= 100`

## Solution

```python
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
