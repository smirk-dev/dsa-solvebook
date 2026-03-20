---
id: "103"
title: "Binary Tree Zigzag Level Order Traversal"
slug: "binary-tree-zigzag-level-order-traversal"
difficulty: "Medium"
tags: ["Tree", "Breadth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-04-05"
status: "solved"
submission_id: "1597266389"
---

## Problem

Given the `root` of a binary tree, return _the zigzag level order traversal of its nodes ' values_. (i.e., from left to right, then right to left for the next level and alternate between).

 

**Example 1:**
    
    
    **Input:** root = [3,9,20,null,null,15,7]
    **Output:** [[3],[20,9],[15,7]]
    

**Example 2:**
    
    
    **Input:** root = [1]
    **Output:** [[1]]
    

**Example 3:**
    
    
    **Input:** root = []
    **Output:** []
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 2000]`.
  * `-100 <= Node.val <= 100`

## Solution

```python
from collections import deque
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        result = []
        queue = deque([root])
        is_left_to_right = True
        while queue:
            level_size = len(queue)
            current_level = [0] * level_size
            for i in range(level_size):
                node = queue.popleft()
                index = i if is_left_to_right else level_size - 1 - i
                current_level[index] = node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(current_level)
            is_left_to_right = not is_left_to_right
        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
