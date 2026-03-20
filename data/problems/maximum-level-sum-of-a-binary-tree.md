---
id: "1116"
title: "Maximum Level Sum of a Binary Tree"
slug: "maximum-level-sum-of-a-binary-tree"
difficulty: "Medium"
tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2026-01-06"
status: "solved"
submission_id: "1876375093"
---

## Problem

Given the `root` of a binary tree, the level of its root is `1`, the level of its children is `2`, and so on.

Return the **smallest** level `x` such that the sum of all the values of nodes at level `x` is **maximal**.

 

**Example 1:**
    
    
    **Input:** root = [1,7,0,7,-8,null,null]
    **Output:** 2
    **Explanation:**
    Level 1 sum = 1.
    Level 2 sum = 7 + 0 = 7.
    Level 3 sum = 7 + -8 = -1.
    So we return the level with the maximum sum which is level 2.
    

**Example 2:**
    
    
    **Input:** root = [989,null,10250,98693,-89388,null,null,null,-32127]
    **Output:** 2
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 104]`.
  * `-105 <= Node.val <= 105`

## Solution

```python
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        max_sum = float('-inf')
        max_level = 1
        current_level = 1
        queue = [root]
        while queue:
            level_sum = 0
            level_size = len(queue)
            for _ in range(level_size):
                node = queue.pop(0)
                level_sum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            if level_sum > max_sum:
                max_sum = level_sum
                max_level = current_level
            current_level += 1
        return max_level
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
