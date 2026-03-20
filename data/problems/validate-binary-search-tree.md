---
id: "98"
title: "Validate Binary Search Tree"
slug: "validate-binary-search-tree"
difficulty: "Medium"
tags: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-03-30"
status: "solved"
submission_id: "1591297333"
---

## Problem

Given the `root` of a binary tree, _determine if it is a valid binary search tree (BST)_.

A **valid BST** is defined as follows:

  * The left subtree of a node contains only nodes with keys **strictly less than** the node's key.
  * The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.
  * Both the left and right subtrees must also be binary search trees.



 

**Example 1:**
    
    
    **Input:** root = [2,1,3]
    **Output:** true
    

**Example 2:**
    
    
    **Input:** root = [5,1,4,null,null,3,6]
    **Output:** false
    **Explanation:** The root node's value is 5 but its right child's value is 4.
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 104]`.
  * `-231 <= Node.val <= 231 - 1`

## Solution

```python
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def valid(node, minimum, maximum):
            if not node:
                return True
            
            if not (node.val > minimum and node.val < maximum):
                return False
            
            return valid(node.left, minimum, node.val) and valid(node.right, node.val, maximum)
        
        return valid(root, float("-inf"), float("inf"))
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
