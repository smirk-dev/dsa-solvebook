---
id: "1387"
title: "Find Elements in a Contaminated Binary Tree"
slug: "find-elements-in-a-contaminated-binary-tree"
difficulty: "Medium"
tags: ["Hash Table", "Tree", "Depth-First Search", "Breadth-First Search", "Design", "Binary Tree"]
language: "python3"
date_solved: "2025-02-21"
status: "solved"
submission_id: "1550602796"
---

## Problem

Given a binary tree with the following rules:

  1. `root.val == 0`
  2. For any `treeNode`: 
    1. If `treeNode.val` has a value `x` and `treeNode.left != null`, then `treeNode.left.val == 2 * x + 1`
    2. If `treeNode.val` has a value `x` and `treeNode.right != null`, then `treeNode.right.val == 2 * x + 2`



Now the binary tree is contaminated, which means all `treeNode.val` have been changed to `-1`.

Implement the `FindElements` class:

  * `FindElements(TreeNode* root)` Initializes the object with a contaminated binary tree and recovers it.
  * `bool find(int target)` Returns `true` if the `target` value exists in the recovered binary tree.



 

**Example 1:**
    
    
    **Input**
    ["FindElements","find","find"]
    [[[-1,null,-1]],[1],[2]]
    **Output**
    [null,false,true]
    **Explanation**
    FindElements findElements = new FindElements([-1,null,-1]); 
    findElements.find(1); // return False 
    findElements.find(2); // return True 

**Example 2:**
    
    
    **Input**
    ["FindElements","find","find","find"]
    [[[-1,-1,-1,-1,-1]],[1],[3],[5]]
    **Output**
    [null,true,true,false]
    **Explanation**
    FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
    findElements.find(1); // return True
    findElements.find(3); // return True
    findElements.find(5); // return False

**Example 3:**
    
    
    **Input**
    ["FindElements","find","find","find","find"]
    [[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
    **Output**
    [null,true,false,false,true]
    **Explanation**
    FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
    findElements.find(2); // return True
    findElements.find(3); // return False
    findElements.find(4); // return False
    findElements.find(5); // return True
    

 

**Constraints:**

  * `TreeNode.val == -1`
  * The height of the binary tree is less than or equal to `20`
  * The total number of nodes is between `[1, 104]`
  * Total calls of `find()` is between `[1, 104]`
  * `0 <= target <= 106`

## Solution

```python
class FindElements(object):

    def __init__(self, root):
        self.recoveredValues = set()
        root.val = 0
        self.recoverTree(root)
    def recoverTree(self, root):
        if not root:
            return
        self.recoveredValues.add(root.val)
        if root.left:
            root.left.val = 2 * root.val + 1
            self.recoverTree(root.left)
        if root.right:
            root.right.val = 2 * root.val + 2
            self.recoverTree(root.right)
    
    def find(self, target):
        return target in self.recoveredValues
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
