---
id: "102"
title: "Binary Tree Level Order Traversal"
slug: "binary-tree-level-order-traversal"
difficulty: "Medium"
tags: ["Tree", "Breadth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-04-02"
status: "solved"
submission_id: "1594169288"
---

## Problem

Given the `root` of a binary tree, return _the level order traversal of its nodes ' values_. (i.e., from left to right, level by level).

 

**Example 1:**
    
    
    **Input:** root = [3,9,20,null,null,15,7]
    **Output:** [[3],[9,20],[15,7]]
    

**Example 2:**
    
    
    **Input:** root = [1]
    **Output:** [[1]]
    

**Example 3:**
    
    
    **Input:** root = []
    **Output:** []
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 2000]`.
  * `-1000 <= Node.val <= 1000`

## Solution

```python
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        if not root:
            return res
        q = collections.deque()
        q.append(root)
        while q:
            same_level = []
            for _ in range(len(q)):
                node = q.popleft()
                same_level.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res.append(same_level)
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
