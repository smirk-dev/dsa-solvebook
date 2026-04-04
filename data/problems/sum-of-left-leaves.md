---
id: "404"
title: "Sum of Left Leaves"
slug: "sum-of-left-leaves"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965507802"
---

## Problem

Given the `root` of a binary tree, return _the sum of all left leaves._

A **leaf** is a node with no children. A **left leaf** is a leaf that is the left child of another node.

 

**Example 1:**
    
    
    **Input:** root = [3,9,20,null,null,15,7]
    **Output:** 24
    **Explanation:** There are two left leaves in the binary tree, with values 9 and 15 respectively.
    

**Example 2:**
    
    
    **Input:** root = [1]
    **Output:** 0
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[1, 1000]`.
  * `-1000 <= Node.val <= 1000`

## Solution

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    
    public int sumOfLeftLeaves(TreeNode root) {
       return func(root,false);
    }
    public  int func(TreeNode root,boolean found){
         if(root==null){
            return 0;

        }
       
        if(root.left==null && root.right==null && found){
           return root.val;
         
        }
       int l= func(root.left,true);
       int r= func(root.right,false);
        return l+r;
       
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
