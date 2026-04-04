---
id: "349"
title: "Intersection of Two Arrays"
slug: "intersection-of-two-arrays"
difficulty: "Easy"
tags: ["Array", "Hash Table", "Two Pointers", "Binary Search", "Sorting"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965505311"
---

## Problem

Given two integer arrays `nums1` and `nums2`, return _an array of their intersection_. Each element in the result must be **unique** and you may return the result in **any order**.

 

**Example 1:**
    
    
    **Input:** nums1 = [1,2,2,1], nums2 = [2,2]
    **Output:** [2]
    

**Example 2:**
    
    
    **Input:** nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    **Output:** [9,4]
    **Explanation:** [4,9] is also accepted.
    

 

**Constraints:**

  * `1 <= nums1.length, nums2.length <= 1000`
  * `0 <= nums1[i], nums2[i] <= 1000`

## Solution

```java
class Solution {
    
    void addList(ArrayList<Integer> list, int x) {
        if(list.isEmpty() || list.get(list.size() - 1) != x) {
            list.add(x);
        }
    }

    public int[] intersection(int[] arr1, int[] arr2) {
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        ArrayList<Integer> list = new ArrayList<>();
        int i = 0, j = 0;
        
        while(i < arr1.length && j < arr2.length) {
            if(arr1[i] == arr2[j]) {
                addList(list, arr1[i]);
                i++;
                j++;
            } else if(arr1[i] < arr2[j]) {
                i++;
            } else {
                j++;
            }
        }
        
        int[] result = new int[list.size()];
        for(int k = 0; k < result.length; k++) {
            result[k] = list.get(k);
        }
        
        return result;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
