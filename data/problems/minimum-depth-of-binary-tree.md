---
id: "111"
title: "Minimum Depth of Binary Tree"
slug: "minimum-depth-of-binary-tree"
difficulty: "Easy"
tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
language: "cpp"
date_solved: "2025-09-17"
status: "solved"
submission_id: "1773852116"
---

## Problem

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:**  A leaf is a node with no children.

 

**Example 1:**
    
    
    **Input:** root = [3,9,20,null,null,15,7]
    **Output:** 2
    

**Example 2:**
    
    
    **Input:** root = [2,null,3,null,4,null,5,null,6]
    **Output:** 5
    

 

**Constraints:**

  * The number of nodes in the tree is in the range `[0, 105]`.
  * `-1000 <= Node.val <= 1000`

## Solution

```cpp
class Solution {
public:
    int minDepth(TreeNode* root) {
        if (root == nullptr) return 0;

        queue<TreeNode*> q;
        q.push(root);
        int depth = 1;

        while (!q.empty()) {
            int levelSize = q.size();

            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = q.front();
                q.pop();

                if (node->left == nullptr && node->right == nullptr)
                    return depth;

                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }

            depth++;
        }

        return depth;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
