---
id: "669"
title: "Trim a Binary Search Tree"
slug: "trim-a-binary-search-tree"
difficulty: "Medium"
tags: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830353943"
---

## Problem

Given the `root` of a binary search tree and the lowest and highest boundaries as `low` and `high`, trim the tree so that all its elements lies in `[low, high]`. Trimming the tree should **not** change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a **unique answer**.

Return _the root of the trimmed binary search tree_. Note that the root may change depending on the given bounds.

 

**Example 1:**
    
    
    **Input:** root = [1,0,2], low = 1, high = 2
    **Output:** [1,null,2]
    

**Example 2:**
    
    
    **Input:** root = [3,0,4,null,2,null,null,1], low = 1, high = 3
    **Output:** [3,2,null,1]
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 104]`.
  * `0 <= Node.val <= 104`
  * The value of each node in the tree is **unique**.
  * `root` is guaranteed to be a valid binary search tree.
  * `0 <= low <= high <= 104`

## Solution

```python
class Solution:
    def trimBST(self, root: Optional[TreeNode], low: int, high: int) -> Optional[TreeNode]:
        if not root:
            return None
        if root.val < low:
            # Discard left subtree
            return self.trimBST(root.right, low, high)
        if root.val > high:
            # Discard right subtree
            return self.trimBST(root.left, low, high)
        # Node is within range, trim both sides
        root.left = self.trimBST(root.left, low, high)
        root.right = self.trimBST(root.right, low, high)
        return root
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
