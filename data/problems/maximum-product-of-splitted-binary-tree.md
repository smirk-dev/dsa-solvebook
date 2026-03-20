---
id: "1465"
title: "Maximum Product of Splitted Binary Tree"
slug: "maximum-product-of-splitted-binary-tree"
difficulty: "Medium"
tags: ["Tree", "Depth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2026-03-14"
status: "solved"
submission_id: "1947700166"
---

## Problem

Given the `root` of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.

Return _the maximum product of the sums of the two subtrees_. Since the answer may be too large, return it **modulo** `109 + 7`.

**Note** that you need to maximize the answer before taking the mod and not after taking it.

 

**Example 1:**
    
    
    **Input:** root = [1,2,3,4,5,6]
    **Output:** 110
    **Explanation:** Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)
    

**Example 2:**
    
    
    **Input:** root = [1,null,2,3,4,null,null,5,6]
    **Output:** 90
    **Explanation:** Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[2, 5 * 104]`.
  * `1 <= Node.val <= 104`

## Solution

```python
class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        MOD = 10**9 + 7
        def dfs(node):
            if not node:
                return 0
            node.val += dfs(node.left) + dfs(node.right)
            return node.val
        total = dfs(root)
        ans = 0
        q = deque([root])
        while q:
            node = q.popleft()
            if not node:
                continue
            current_product = (total - node.val) * node.val
            ans = max(ans, current_product)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        return ans % MOD
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
