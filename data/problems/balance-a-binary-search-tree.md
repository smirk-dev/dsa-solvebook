---
id: "1285"
title: "Balance a Binary Search Tree"
slug: "balance-a-binary-search-tree"
difficulty: "Medium"
tags: ["Divide and Conquer", "Greedy", "Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"]
language: "java"
date_solved: "2026-02-09"
status: "solved"
submission_id: "1913360973"
---

## Problem

Given the `root` of a binary search tree, return _a**balanced** binary search tree with the same node values_. If there is more than one answer, return **any of them**.

A binary search tree is **balanced** if the depth of the two subtrees of every node never differs by more than `1`.

 

**Example 1:**
    
    
    **Input:** root = [1,null,2,null,3,null,4,null,null]
    **Output:** [2,1,3,null,null,null,4]
    **Explanation:** This is not the only correct answer, [3,1,4,null,2] is also correct.
    

**Example 2:**
    
    
    **Input:** root = [2,1,3]
    **Output:** [2,1,3]
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 104]`.
  * `1 <= Node.val <= 105`

## Solution

```java
class Solution {
    public void inorder(TreeNode node, List<Integer> vals) {
        if (node == null) return;
        inorder(node.left, vals);
        vals.add(node.val);
        inorder(node.right, vals);
    }
    public TreeNode build(List<Integer> vals, int l, int r) {
        if (l > r) return null;
        int mid = (l + r) / 2;
        TreeNode node = new TreeNode(vals.get(mid));
        node.left  = build(vals, l, mid - 1);
        node.right = build(vals, mid + 1, r);
        return node;
    }
    public TreeNode balanceBST(TreeNode root) {
        List<Integer> vals = new ArrayList<>();
        inorder(root, vals);
        return build(vals, 0, vals.size() - 1);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
