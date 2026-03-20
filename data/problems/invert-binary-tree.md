---
id: "226"
title: "Invert Binary Tree"
slug: "invert-binary-tree"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825947115"
---

## Problem

Given the `root` of a binary tree, invert the tree, and return _its root_.

 

**Example 1:**
    
    
    **Input:** root = [4,2,7,1,3,6,9]
    **Output:** [4,7,2,9,6,3,1]
    

**Example 2:**
    
    
    **Input:** root = [2,1,3]
    **Output:** [2,3,1]
    

**Example 3:**
    
    
    **Input:** root = []
    **Output:** []
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 100]`.
  * `-100 <= Node.val <= 100`

## Solution

```python
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    
        if not root:
            return
        
        temp = root.left
        root.left = root.right
        root.right = temp

        self.invertTree(root.left)
        self.invertTree(root.right)

        return root
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
