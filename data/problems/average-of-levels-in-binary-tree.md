---
id: "637"
title: "Average of Levels in Binary Tree"
slug: "average-of-levels-in-binary-tree"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-09"
status: "solved"
submission_id: "1825178600"
---

## Problem

Given the `root` of a binary tree, return _the average value of the nodes on each level in the form of an array_. Answers within `10-5` of the actual answer will be accepted. 

 

**Example 1:**
    
    
    **Input:** root = [3,9,20,null,null,15,7]
    **Output:** [3.00000,14.50000,11.00000]
    Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
    Hence return [3, 14.5, 11].
    

**Example 2:**
    
    
    **Input:** root = [3,9,20,15,7]
    **Output:** [3.00000,14.50000,11.00000]
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 104]`.
  * `-231 <= Node.val <= 231 - 1`

## Solution

```python
from collections import deque

class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        if not root: return []
        res, queue = [], deque([root])

        while queue:
            level_sum = 0
            count = len(queue)

            for _ in range(count):
                node = queue.popleft()
                level_sum += node.val
                if node.left: queue.append(node.left)
                if node.right: queue.append(node.right)

            res.append(level_sum / count)

        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
