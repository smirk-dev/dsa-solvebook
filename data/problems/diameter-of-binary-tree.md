---
id: "543"
title: "Diameter of Binary Tree"
slug: "diameter-of-binary-tree"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830353701"
---

## Problem

Given the `root` of a binary tree, return _the length of the**diameter** of the tree_.

The **diameter** of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

The **length** of a path between two nodes is represented by the number of edges between them.

 

**Example 1:**
    
    
    **Input:** root = [1,2,3,4,5]
    **Output:** 3
    **Explanation:** 3 is the length of the path [4,2,1,3] or [5,2,1,3].
    

**Example 2:**
    
    
    **Input:** root = [1,2]
    **Output:** 1
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 104]`.
  * `-100 <= Node.val <= 100`

## Solution

```python
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.diameter = 0

        def depth(node):
            if not node:
                return 0
            left = depth(node.left)
            right = depth(node.right)
            # Update diameter at each node
            self.diameter = max(self.diameter, left + right)
            # Return max depth to parent
            return max(left, right) + 1

        depth(root)
        return self.diameter
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
