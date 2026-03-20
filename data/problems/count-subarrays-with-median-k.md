---
id: "2574"
title: "Count Subarrays With Median K"
slug: "count-subarrays-with-median-k"
difficulty: "Hard"
tags: ["Array", "Hash Table", "Prefix Sum"]
language: "java"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951120169"
---

## Problem

You are given an array `nums` of size `n` consisting of **distinct** integers from `1` to `n` and a positive integer `k`.

Return _the number of non-empty subarrays in_`nums` _that have a**median** equal to _`k`.

**Note** :

  * The median of an array is the **middle** element after sorting the array in **ascending** order. If the array is of even length, the median is the **left** middle element. 
    * For example, the median of `[2,3,1,4]` is `2`, and the median of `[8,4,3,5,1]` is `4`.
  * A subarray is a contiguous part of an array.



 

**Example 1:**
    
    
    **Input:** nums = [3,2,1,4,5], k = 4
    **Output:** 3
    **Explanation:** The subarrays that have a median equal to 4 are: [4], [4,5] and [1,4,5].
    

**Example 2:**
    
    
    **Input:** nums = [2,3,1], k = 3
    **Output:** 1
    **Explanation:** [3] is the only subarray that has a median equal to 3.
    

 

**Constraints:**

  * `n == nums.length`
  * `1 <= n <= 105`
  * `1 <= nums[i], k <= n`
  * The integers in `nums` are distinct.

## Solution

```java
class Solution {
    public int countSubarrays(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        int n = nums.length;
        int less = 0, great = 0;
        int pivot = -1;
        for(int i=0; i<n; ++i) {
            if(nums[i] == k) {
                pivot = i;
                break;
            }
        }
        
        for(int i=pivot; i<n; ++i) {
            if(nums[i] > k) great++;
            else if(nums[i] < k) less++;
            map.put(great-less, map.getOrDefault(great-less, 0)+1);
        }
        
        int count = 0;
        less=great=0;
        for(int i=pivot; i>=0; --i) {
            if(nums[i] > k) great++;
            else if(nums[i] < k) less++;
            int key = less-great;
            count += map.getOrDefault(key, 0) + map.getOrDefault(key+1, 0);
        }
        
        return count;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
