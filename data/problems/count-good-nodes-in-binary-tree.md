---
id: "1544"
title: "Count Good Nodes in Binary Tree"
slug: "count-good-nodes-in-binary-tree"
difficulty: "Medium"
tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823984502"
---

## Problem

Given a binary tree `root`, a node _X_ in the tree is named **good** if in the path from root to _X_ there are no nodes with a value _greater than_ X.

Return the number of **good** nodes in the binary tree.

 

**Example 1:**

****
    
    
    **Input:** root = [3,1,4,3,null,1,5]
    **Output:** 4
    **Explanation:** Nodes in blue are **good**.
    Root Node (3) is always a good node.
    Node 4 -> (3,4) is the maximum value in the path starting from the root.
    Node 5 -> (3,4,5) is the maximum value in the path
    Node 3 -> (3,1,3) is the maximum value in the path.

**Example 2:**

****
    
    
    **Input:** root = [3,3,null,4,2]
    **Output:** 3
    **Explanation:** Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.

**Example 3:**
    
    
    **Input:** root = [1]
    **Output:** 1
    **Explanation:** Root is considered as **good**.

 

**Constraints:**

  * The number of nodes in the binary tree is in the range `[1, 10^5]`.
  * Each node's value is between `[-10^4, 10^4]`.

## Solution

```python
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node, max_val):
            if not node:
                return 0
            count = 1 if node.val >= max_val else 0
            max_val = max(max_val, node.val)
            count += dfs(node.left, max_val)
            count += dfs(node.right, max_val)
            return count
        return dfs(root, float('-inf'))
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
