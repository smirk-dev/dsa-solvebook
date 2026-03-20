---
id: "783"
title: "Search in a Binary Search Tree"
slug: "search-in-a-binary-search-tree"
difficulty: "Easy"
tags: ["Tree", "Binary Search Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830345595"
---

## Problem

You are given the `root` of a binary search tree (BST) and an integer `val`.

Find the node in the BST that the node's value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`.

 

**Example 1:**
    
    
    **Input:** root = [4,2,7,1,3], val = 2
    **Output:** [2,1,3]
    

**Example 2:**
    
    
    **Input:** root = [4,2,7,1,3], val = 5
    **Output:** []
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 5000]`.
  * `1 <= Node.val <= 107`
  * `root` is a binary search tree.
  * `1 <= val <= 107`

## Solution

```python
class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        while root:
            if root.val == val:
                return root
            elif val < root.val:
                root = root.left
            else:
                root = root.right
        return None
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
