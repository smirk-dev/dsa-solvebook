---
id: "101"
title: "Symmetric Tree"
slug: "symmetric-tree"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-04-02"
status: "solved"
submission_id: "1594168405"
---

## Problem

Given the `root` of a binary tree, _check whether it is a mirror of itself_ (i.e., symmetric around its center).

 

**Example 1:**
    
    
    **Input:** root = [1,2,2,3,4,4,3]
    **Output:** true
    

**Example 2:**
    
    
    **Input:** root = [1,2,2,null,3,null,3]
    **Output:** false
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 1000]`.
  * `-100 <= Node.val <= 100`



 

**Follow up:** Could you solve it both recursively and iteratively?

## Solution

```python
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        
        def is_mirror(n1, n2): # n1:left, n2:right
            if not n1 and not n2:
                return True
            
            if not n1 or not n2:
                return False
            
            return n1.val == n2.val and is_mirror(n1.left, n2.right) and is_mirror(n1.right, n2.left)
        
        return is_mirror(root.left, root.right)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
