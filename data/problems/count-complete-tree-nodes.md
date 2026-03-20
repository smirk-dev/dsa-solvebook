---
id: "222"
title: "Count Complete Tree Nodes"
slug: "count-complete-tree-nodes"
difficulty: "Easy"
tags: ["Binary Search", "Bit Manipulation", "Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825946990"
---

## Problem

Given the `root` of a **complete** binary tree, return the number of the nodes in the tree.

According to **[Wikipedia](http://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees)** , every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between `1` and `2h` nodes inclusive at the last level `h`.

Design an algorithm that runs in less than `O(n)` time complexity.

 

**Example 1:**
    
    
    **Input:** root = [1,2,3,4,5,6]
    **Output:** 6
    

**Example 2:**
    
    
    **Input:** root = []
    **Output:** 0
    

**Example 3:**
    
    
    **Input:** root = [1]
    **Output:** 1
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 5 * 104]`.
  * `0 <= Node.val <= 5 * 104`
  * The tree is guaranteed to be **complete**.

## Solution

```python
class Solution(object):
    def countNodes(self, root):
        if not root:
            return 0
        
        left_depth = self.getDepth(root.left)
        right_depth = self.getDepth(root.right)
        
        if left_depth == right_depth:
            return (1 << left_depth) + self.countNodes(root.right)
        else:
            return (1 << right_depth) + self.countNodes(root.left)
    
    def getDepth(self, node):
        depth = 0
        while node:
            depth += 1
            node = node.left
        return depth
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
