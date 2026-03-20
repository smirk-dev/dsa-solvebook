---
id: "99"
title: "Recover Binary Search Tree"
slug: "recover-binary-search-tree"
difficulty: "Medium"
tags: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-03-30"
status: "solved"
submission_id: "1591299861"
---

## Problem

You are given the `root` of a binary search tree (BST), where the values of **exactly** two nodes of the tree were swapped by mistake. _Recover the tree without changing its structure_.

 

**Example 1:**
    
    
    **Input:** root = [1,3,null,null,2]
    **Output:** [3,1,null,null,2]
    **Explanation:** 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
    

**Example 2:**
    
    
    **Input:** root = [3,1,4,null,null,2]
    **Output:** [2,1,4,null,null,3]
    **Explanation:** 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[2, 1000]`.
  * `-231 <= Node.val <= 231 - 1`



 

**Follow up:** A solution using `O(n)` space is pretty straight-forward. Could you devise a constant `O(1)` space solution?

## Solution

```python
class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        def inOrder(curr) -> List[ListNode]:
            if not curr: 
                return []
            return inOrder(curr.left) + [curr] + inOrder(curr.right)
        nums = inOrder(root)
        node1, node2 = None, None
        for i in range(len(nums)-1):
            if nums[i].val > nums[i+1].val:
                node2 = nums[i+1]
                if node1 is None:
                    node1 = nums[i]
                else:
                    break
        node1.val, node2.val = node2.val, node1.val
        return None
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
