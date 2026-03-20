---
id: "108"
title: "Convert Sorted Array to Binary Search Tree"
slug: "convert-sorted-array-to-binary-search-tree"
difficulty: "Easy"
tags: ["Array", "Divide and Conquer", "Tree", "Binary Search Tree", "Binary Tree"]
language: "cpp"
date_solved: "2025-08-21"
status: "solved"
submission_id: "1743426473"
---

## Problem

Given an integer array `nums` where the elements are sorted in **ascending order** , convert _it to a_** _height-balanced_** _binary search tree_.

 

**Example 1:**
    
    
    **Input:** nums = [-10,-3,0,5,9]
    **Output:** [0,-3,9,-10,null,5]
    **Explanation:** [0,-10,5,null,-3,null,9] is also accepted:
    
    

**Example 2:**
    
    
    **Input:** nums = [1,3]
    **Output:** [3,1]
    **Explanation:** [1,null,3] and [3,1] are both height-balanced BSTs.
    

 

**Constraints:**

  * `1 <= nums.length <= 104`
  * `-104 <= nums[i] <= 104`
  * `nums` is sorted in a **strictly increasing** order.

## Solution

```cpp
class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return convert(nums, 0, nums.size() - 1);        
    }

private:
    TreeNode* convert(vector<int>& nums, int left, int right) {
        if (left > right) {
            return nullptr;
        }
        
        int mid = left + (right - left) / 2;
        
        TreeNode* node = new TreeNode(nums[mid]);
        
        node->left = convert(nums, left, mid - 1);
        node->right = convert(nums, mid + 1, right);
        
        return node;
    }    
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
