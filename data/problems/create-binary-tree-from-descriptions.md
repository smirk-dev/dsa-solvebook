---
id: "2306"
title: "Create Binary Tree From Descriptions"
slug: "create-binary-tree-from-descriptions"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Tree", "Binary Tree"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830344881"
---

## Problem

You are given a 2D integer array `descriptions` where `descriptions[i] = [parenti, childi, isLefti]` indicates that `parenti` is the **parent** of `childi` in a **binary** tree of **unique** values. Furthermore,

  * If `isLefti == 1`, then `childi` is the left child of `parenti`.
  * If `isLefti == 0`, then `childi` is the right child of `parenti`.



Construct the binary tree described by `descriptions` and return _its**root**_.

The test cases will be generated such that the binary tree is **valid**.

 

**Example 1:**
    
    
    **Input:** descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
    **Output:** [50,20,80,15,17,19]
    **Explanation:** The root node is the node with value 50 since it has no parent.
    The resulting binary tree is shown in the diagram.
    

**Example 2:**
    
    
    **Input:** descriptions = [[1,2,1],[2,3,0],[3,4,1]]
    **Output:** [1,2,null,null,3,4]
    **Explanation:** The root node is the node with value 1 since it has no parent.
    The resulting binary tree is shown in the diagram.
    

 

**Constraints:**

  * `1 <= descriptions.length <= 104`
  * `descriptions[i].length == 3`
  * `1 <= parenti, childi <= 105`
  * `0 <= isLefti <= 1`
  * The binary tree described by `descriptions` is valid.

## Solution

```python
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        nodes = {}
        children = set()
        for parent, child, isLeft in descriptions:
            if parent not in nodes:
                nodes[parent] = TreeNode(parent)
            if child not in nodes:
                nodes[child] = TreeNode(child)
            if isLeft:
                nodes[parent].left = nodes[child]
            else:
                nodes[parent].right = nodes[child]
            children.add(child)
        # root is a node that is not anyone's child
        for val in nodes:
            if val not in children:
                return nodes[val]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
