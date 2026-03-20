---
id: "129"
title: "Sum Root to Leaf Numbers"
slug: "sum-root-to-leaf-numbers"
difficulty: "Medium"
tags: ["Tree", "Depth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825948374"
---

## Problem

You are given the `root` of a binary tree containing digits from `0` to `9` only.

Each root-to-leaf path in the tree represents a number.

  * For example, the root-to-leaf path `1 -> 2 -> 3` represents the number `123`.



Return _the total sum of all root-to-leaf numbers_. Test cases are generated so that the answer will fit in a **32-bit** integer.

A **leaf** node is a node with no children.

 

**Example 1:**
    
    
    **Input:** root = [1,2,3]
    **Output:** 25
    **Explanation:**
    The root-to-leaf path 1->2 represents the number 12.
    The root-to-leaf path 1->3 represents the number 13.
    Therefore, sum = 12 + 13 = 25.
    

**Example 2:**
    
    
    **Input:** root = [4,9,0,5,1]
    **Output:** 1026
    **Explanation:**
    The root-to-leaf path 4->9->5 represents the number 495.
    The root-to-leaf path 4->9->1 represents the number 491.
    The root-to-leaf path 4->0 represents the number 40.
    Therefore, sum = 495 + 491 + 40 = 1026.
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 1000]`.
  * `0 <= Node.val <= 9`
  * The depth of the tree will not exceed `10`.

## Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def sumNumbers(self, root: TreeNode | None) -> int:
    ans = 0

    def dfs(root: TreeNode | None, path: int) -> None:
      nonlocal ans
      if not root:
        return
      if not root.left and not root.right:
        ans += path * 10 + root.val
        return

      dfs(root.left, path * 10 + root.val)
      dfs(root.right, path * 10 + root.val)

    dfs(root, 0)
    return ans
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
