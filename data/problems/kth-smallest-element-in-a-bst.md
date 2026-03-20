---
id: "230"
title: "Kth Smallest Element in a BST"
slug: "kth-smallest-element-in-a-bst"
difficulty: "Medium"
tags: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825838333"
---

## Problem

Given the `root` of a binary search tree, and an integer `k`, return _the_ `kth` _smallest value (**1-indexed**) of all the values of the nodes in the tree_.

 

**Example 1:**
    
    
    **Input:** root = [3,1,4,null,2], k = 1
    **Output:** 1
    

**Example 2:**
    
    
    **Input:** root = [5,3,6,2,4,null,null,1], k = 3
    **Output:** 3
    

 

**Constraints:**

  * The number of nodes in the tree is `n`.
  * `1 <= k <= n <= 104`
  * `0 <= Node.val <= 104`



 

**Follow up:** If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

## Solution

```python
class Solution(object):
    def kthSmallest(self, root, k):
        def inorder_traversal(node):
            if not node:
                return []
            return inorder_traversal(node.left) + [node.val] + inorder_traversal(node.right)

        sorted_elements = inorder_traversal(root)
        return sorted_elements[k - 1]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
