---
id: "904"
title: "Leaf-Similar Trees"
slug: "leaf-similar-trees"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823982990"
---

## Problem

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a **leaf value sequence** _._

For example, in the given tree above, the leaf value sequence is `(6, 7, 4, 9, 8)`.

Two binary trees are considered _leaf-similar_  if their leaf value sequence is the same.

Return `true` if and only if the two given trees with head nodes `root1` and `root2` are leaf-similar.

 

**Example 1:**
    
    
    **Input:** root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
    **Output:** true
    

**Example 2:**
    
    
    **Input:** root1 = [1,2,3], root2 = [1,3,2]
    **Output:** false
    

 

**Constraints:**

  * The number of nodes in each tree will be in the range `[1, 200]`.
  * Both of the given trees will have values in the range `[0, 200]`.

## Solution

```python
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def get_leaves(root):
            if not root:
                return []
            if not root.left and not root.right:
                return [root.val]
            return get_leaves(root.left) + get_leaves(root.right)
        return get_leaves(root1) == get_leaves(root2)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
