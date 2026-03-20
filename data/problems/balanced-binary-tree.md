---
id: "110"
title: "Balanced Binary Tree"
slug: "balanced-binary-tree"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Binary Tree"]
language: "java"
date_solved: "2026-02-08"
status: "solved"
submission_id: "1912041204"
---

## Problem

Given a binary tree, determine if it is **height-balanced**.

 

**Example 1:**
    
    
    **Input:** root = [3,9,20,null,null,15,7]
    **Output:** true
    

**Example 2:**
    
    
    **Input:** root = [1,2,2,3,3,null,null,4,4]
    **Output:** false
    

**Example 3:**
    
    
    **Input:** root = []
    **Output:** true
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 5000]`.
  * `-104 <= Node.val <= 104`

## Solution

```java
class Solution {
    public boolean isBalanced(TreeNode root) {
        return dfsHeight(root) != -1;
    }

    private int dfsHeight(TreeNode node) {
        if (node == null) return 0;

        int leftHeight = dfsHeight(node.left);
        if (leftHeight == -1) return -1;

        int rightHeight = dfsHeight(node.right);
        if (rightHeight == -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
