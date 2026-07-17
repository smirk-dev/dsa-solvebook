---
id: "501"
title: "Find Mode in Binary Search Tree"
slug: "find-mode-in-binary-search-tree"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071540627"
---

## Problem

Given the `root` of a binary search tree (BST) with duplicates, return _all the[mode(s)](https://en.wikipedia.org/wiki/Mode_\(statistics\)) (i.e., the most frequently occurred element) in it_.

If the tree has more than one mode, return them in **any order**.

Assume a BST is defined as follows:

  * The left subtree of a node contains only nodes with keys **less than or equal to** the node's key.
  * The right subtree of a node contains only nodes with keys **greater than or equal to** the node's key.
  * Both the left and right subtrees must also be binary search trees.



 

**Example 1:**
    
    
    **Input:** root = [1,null,2,2]
    **Output:** [2]
    

**Example 2:**
    
    
    **Input:** root = [0]
    **Output:** [0]
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 104]`.
  * `-105 <= Node.val <= 105`



 

**Follow up:** Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

## Solution

```java
class Solution {
    public int[] findMode(TreeNode root) {
        Map<Integer, Integer> counts = new HashMap<>();
        int[] maxCount = {0}; // Using an array to simulate nonlocal
        List<Integer> modes = new ArrayList<>();

        inorder(root, counts, maxCount, modes);

        int[] result = new int[modes.size()];
        for (int i = 0; i < modes.size(); i++) {
            result[i] = modes.get(i);
        }

        return result;        
    }

    private void inorder(TreeNode node, Map<Integer, Integer> counts, int[] maxCount, List<Integer> modes) {
        if (node == null) {
            return;
        }

        inorder(node.left, counts, maxCount, modes);

        int count = counts.getOrDefault(node.val, 0) + 1;
        counts.put(node.val, count);

        if (count > maxCount[0]) {
            maxCount[0] = count;
            modes.clear();
            modes.add(node.val);
        } else if (count == maxCount[0]) {
            modes.add(node.val);
        }

        inorder(node.right, counts, maxCount, modes);
    }    
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
