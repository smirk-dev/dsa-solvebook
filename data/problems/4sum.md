---
id: "18"
title: "4Sum"
slug: "4sum"
difficulty: "Medium"
tags: ["Array", "Two Pointers", "Sorting"]
language: "java"
date_solved: "2025-02-17"
status: "solved"
submission_id: "1546190474"
---

## Problem

Given an array `nums` of `n` integers, return _an array of all the**unique** quadruplets_ `[nums[a], nums[b], nums[c], nums[d]]` such that:

  * `0 <= a, b, c, d < n`
  * `a`, `b`, `c`, and `d` are **distinct**.
  * `nums[a] + nums[b] + nums[c] + nums[d] == target`



You may return the answer in **any order**.

 

**Example 1:**
    
    
    **Input:** nums = [1,0,-1,0,-2,2], target = 0
    **Output:** [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
    

**Example 2:**
    
    
    **Input:** nums = [2,2,2,2,2], target = 8
    **Output:** [[2,2,2,2]]
    

 

**Constraints:**

  * `1 <= nums.length <= 200`
  * `-109 <= nums[i] <= 109`
  * `-109 <= target <= 109`

## Solution

```java
class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> ans = new ArrayList<>();
        int len = nums.length;

        Arrays.sort(nums);

        for (int i = 0; i < len - 3; i++) {
            if (i > 0 && nums[i - 1] == nums[i]) 
                continue;

            for (int j = i + 1; j < len - 2; j++) {
                if (j > i + 1 && nums[j - 1] == nums[j])
                    continue;
                
                int k = j + 1;
                int l = len - 1;

                while (k < l) {
                    long sum = nums[i] + nums[j];
                    sum += nums[k] + nums[l];

                    if (sum == target) {
                        ans.add(Arrays.asList(nums[i], nums[j], nums[k], nums[l]));
                        k++;
                        l--;

                        while (k < l && nums[k - 1] == nums[k]) k++;
                        
                        while (k < l && nums[l + 1] == nums[l]) l--;
                    } else if (sum < target)
                        k++;
                    else 
                        l--;
                }
            }
        }

        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
