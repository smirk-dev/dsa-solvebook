---
id: "105"
title: "Construct Binary Tree from Preorder and Inorder Traversal"
slug: "construct-binary-tree-from-preorder-and-inorder-traversal"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Divide and Conquer", "Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825947317"
---

## Problem

Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return _the binary tree_.

 

**Example 1:**
    
    
    **Input:** preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
    **Output:** [3,9,20,null,null,15,7]
    

**Example 2:**
    
    
    **Input:** preorder = [-1], inorder = [-1]
    **Output:** [-1]
    

 

**Constraints:**

  * `1 <= preorder.length <= 3000`
  * `inorder.length == preorder.length`
  * `-3000 <= preorder[i], inorder[i] <= 3000`
  * `preorder` and `inorder` consist of **unique** values.
  * Each value of `inorder` also appears in `preorder`.
  * `preorder` is **guaranteed** to be the preorder traversal of the tree.
  * `inorder` is **guaranteed** to be the inorder traversal of the tree.

## Solution

```python
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:

        preorder = deque(preorder)

        def build(preorder, inorder):
            if inorder:
                idx = inorder.index(preorder.popleft())
                root = TreeNode(inorder[idx])

                root.left = build(preorder, inorder[:idx])
                root.right = build(preorder, inorder[idx+1:])

                return root

        return build(preorder, inorder)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
