---
id: "687"
title: "Longest Univalue Path"
slug: "longest-univalue-path"
difficulty: "Medium"
tags: ["Tree", "Depth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830345162"
---

## Problem

Given the `root` of a binary tree, return _the length of the longest path, where each node in the path has the same value_. This path may or may not pass through the root.

**The length of the path** between two nodes is represented by the number of edges between them.

 

**Example 1:**
    
    
    **Input:** root = [5,4,5,1,1,null,5]
    **Output:** 2
    **Explanation:** The shown image shows that the longest path of the same value (i.e. 5).
    

**Example 2:**
    
    
    **Input:** root = [1,4,5,4,4,null,5]
    **Output:** 2
    **Explanation:** The shown image shows that the longest path of the same value (i.e. 4).
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 104]`.
  * `-1000 <= Node.val <= 1000`
  * The depth of the tree will not exceed `1000`.

## Solution

```python
class Solution:
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        self.maxlen = 0
        def dfs(node):
            if not node:
                return 0
            left = dfs(node.left)
            right = dfs(node.right)
            left_path = right_path = 0
            if node.left and node.left.val == node.val:
                left_path = left + 1
            if node.right and node.right.val == node.val:
                right_path = right + 1
            self.maxlen = max(self.maxlen, left_path + right_path)
            return max(left_path, right_path)
        dfs(root)
        return self.maxlen
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
