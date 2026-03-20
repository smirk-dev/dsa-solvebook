---
id: "199"
title: "Binary Tree Right Side View"
slug: "binary-tree-right-side-view"
difficulty: "Medium"
tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823988254"
---

## Problem

Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return _the values of the nodes you can see ordered from top to bottom_.

 

**Example 1:**

**Input:** root = [1,2,3,null,5,null,4]

**Output:** [1,3,4]

**Explanation:**

**Example 2:**

**Input:** root = [1,2,3,4,null,null,null,5]

**Output:** [1,3,4,5]

**Explanation:**

**Example 3:**

**Input:** root = [1,null,3]

**Output:** [1,3]

**Example 4:**

**Input:** root = []

**Output:** []

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 100]`.
  * `-100 <= Node.val <= 100`

## Solution

```python
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        result = []
        queue = [root]
        while queue:
            level_size = len(queue)
            for i in range(level_size):
                node = queue.pop(0)
                if i == level_size - 1:
                    result.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
