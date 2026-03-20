---
id: "124"
title: "Binary Tree Maximum Path Sum"
slug: "binary-tree-maximum-path-sum"
difficulty: "Hard"
tags: ["Dynamic Programming", "Tree", "Depth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825948638"
---

## Problem

A **path** in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence **at most once**. Note that the path does not need to pass through the root.

The **path sum** of a path is the sum of the node's values in the path.

Given the `root` of a binary tree, return _the maximum**path sum** of any **non-empty** path_.

 

**Example 1:**
    
    
    **Input:** root = [1,2,3]
    **Output:** 6
    **Explanation:** The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
    

**Example 2:**
    
    
    **Input:** root = [-10,9,20,null,null,15,7]
    **Output:** 42
    **Explanation:** The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 3 * 104]`.
  * `-1000 <= Node.val <= 1000`

## Solution

```python
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        res = root.val

        def dfs(node):
            nonlocal res

            if not node:
                return 0
            
            # recursively compute the maximum sum of the left and right subtree paths
            left_sum = max(0, dfs(node.left))
            right_sum = max(0, dfs(node.right))

            # update the maximum path sum encountered so far(with split)
            res = max(res, left_sum + right_sum + node.val)

            # return the maximum sum of the path(without split)
            return max(left_sum, right_sum) + node.val

        dfs(root)
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
