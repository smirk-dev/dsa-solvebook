---
id: "117"
title: "Populating Next Right Pointers in Each Node II"
slug: "populating-next-right-pointers-in-each-node-ii"
difficulty: "Medium"
tags: ["Linked List", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825947956"
---

## Problem

Given a binary tree
    
    
    struct Node {
      int val;
      Node *left;
      Node *right;
      Node *next;
    }
    

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

 

**Example 1:**
    
    
    **Input:** root = [1,2,3,4,5,null,7]
    **Output:** [1,#,2,3,#,4,5,7,#]
    **Explanation:** Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
    

**Example 2:**
    
    
    **Input:** root = []
    **Output:** []
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 6000]`.
  * `-100 <= Node.val <= 100`



 

**Follow-up:**

  * You may only use constant extra space.
  * The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.

## Solution

```python
class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root

        from collections import deque
        q = deque([root])

        while q:
            size = len(q)
            for i in range(size):
                node = q.popleft()
                if i < size - 1:
                    node.next = q[0]
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

        return root
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
