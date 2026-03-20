---
id: "114"
title: "Flatten Binary Tree to Linked List"
slug: "flatten-binary-tree-to-linked-list"
difficulty: "Medium"
tags: ["Linked List", "Stack", "Tree", "Depth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825948152"
---

## Problem

Given the `root` of a binary tree, flatten the tree into a "linked list":

  * The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.
  * The "linked list" should be in the same order as a [**pre-order****traversal**](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR) of the binary tree.



 

**Example 1:**
    
    
    **Input:** root = [1,2,5,3,4,null,6]
    **Output:** [1,null,2,null,3,null,4,null,5,null,6]
    

**Example 2:**
    
    
    **Input:** root = []
    **Output:** []
    

**Example 3:**
    
    
    **Input:** root = [0]
    **Output:** [0]
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 2000]`.
  * `-100 <= Node.val <= 100`



 

**Follow up:** Can you flatten the tree in-place (with `O(1)` extra space)?

## Solution

```python
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        self.q = []
        
        def preorder(node):
            if not node:
                return
            self.q.append(node)
            preorder(node.left)
            preorder(node.right)

        preorder(root)
        if self.q:
            self.q.pop(0)  # root will be reused
        while self.q:
            root.right = self.q.pop(0)
            root.left = None
            root = root.right
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
