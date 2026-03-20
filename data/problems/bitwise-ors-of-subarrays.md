---
id: "934"
title: "Bitwise ORs of Subarrays"
slug: "bitwise-ors-of-subarrays"
difficulty: "Medium"
tags: ["Array", "Dynamic Programming", "Bit Manipulation"]
language: "cpp"
date_solved: "2025-07-31"
status: "solved"
submission_id: "1718236174"
---

## Problem

Given an integer array `arr`, return _the number of distinct bitwise ORs of all the non-empty subarrays of_ `arr`.

The bitwise OR of a subarray is the bitwise OR of each integer in the subarray. The bitwise OR of a subarray of one integer is that integer.

A **subarray** is a contiguous non-empty sequence of elements within an array.

 

**Example 1:**
    
    
    **Input:** arr = [0]
    **Output:** 1
    **Explanation:** There is only one possible result: 0.
    

**Example 2:**
    
    
    **Input:** arr = [1,1,2]
    **Output:** 3
    **Explanation:** The possible subarrays are [1], [1], [2], [1, 1], [1, 2], [1, 1, 2].
    These yield the results 1, 1, 2, 1, 3, 3.
    There are 3 unique values, so the answer is 3.
    

**Example 3:**
    
    
    **Input:** arr = [1,2,4]
    **Output:** 6
    **Explanation:** The possible results are 1, 2, 3, 4, 6, and 7.
    

 

**Constraints:**

  * `1 <= arr.length <= 5 * 104`
  * `0 <= arr[i] <= 109`

## Solution

```cpp
class Solution {
public:
    int subarrayBitwiseORs(vector<int>& arr) {
        unordered_set<int> s;
        for(int i=0;i<arr.size();i++)
        {
           int j=i-1;
           int x=0, y=arr[i];
           s.insert(y);
           while(j>=0 && x!=y)
           {
               x|=arr[j];
               y|=arr[j];
               s.insert(y);
               j--;
           }
        }
        return s.size();
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
