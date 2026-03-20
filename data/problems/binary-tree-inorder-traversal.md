---
id: "94"
title: "Binary Tree Inorder Traversal"
slug: "binary-tree-inorder-traversal"
difficulty: "Easy"
tags: ["Stack", "Tree", "Depth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-03-27"
status: "solved"
submission_id: "1587879452"
---

## Problem

Given the `root` of a binary tree, return _the inorder traversal of its nodes ' values_.

 

**Example 1:**

**Input:** root = [1,null,2,3]

**Output:** [1,3,2]

**Explanation:**

**Example 2:**

**Input:** root = [1,2,3,4,5,null,8,null,null,6,7,9]

**Output:** [4,2,6,5,7,1,3,9,8]

**Explanation:**

**Example 3:**

**Input:** root = []

**Output:** []

**Example 4:**

**Input:** root = [1]

**Output:** [1]

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 100]`.
  * `-100 <= Node.val <= 100`



 

**Follow up:** Recursive solution is trivial, could you do it iteratively?

## Solution

```python
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def inorder(root):
            if not root:
                return
            inorder(root.left)
            res.append(root.val)
            inorder(root.right)
        inorder(root)
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
