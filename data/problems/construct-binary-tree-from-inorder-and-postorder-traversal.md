---
id: "106"
title: "Construct Binary Tree from Inorder and Postorder Traversal"
slug: "construct-binary-tree-from-inorder-and-postorder-traversal"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Divide and Conquer", "Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830328184"
---

## Problem

Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return _the binary tree_.

 

**Example 1:**
    
    
    **Input:** inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
    **Output:** [3,9,20,null,null,15,7]
    

**Example 2:**
    
    
    **Input:** inorder = [-1], postorder = [-1]
    **Output:** [-1]
    

 

**Constraints:**

  * `1 <= inorder.length <= 3000`
  * `postorder.length == inorder.length`
  * `-3000 <= inorder[i], postorder[i] <= 3000`
  * `inorder` and `postorder` consist of **unique** values.
  * Each value of `postorder` also appears in `inorder`.
  * `inorder` is **guaranteed** to be the inorder traversal of the tree.
  * `postorder` is **guaranteed** to be the postorder traversal of the tree.

## Solution

```python
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not inorder or not postorder:
            return None
        root_val = postorder.pop()
        root = TreeNode(root_val)
        idx = inorder.index(root_val)
        root.right = self.buildTree(inorder[idx+1:], postorder)
        root.left = self.buildTree(inorder[:idx], postorder)
        return root
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
