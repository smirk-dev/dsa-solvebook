---
id: "3242"
title: "Count Elements With Maximum Frequency"
slug: "count-elements-with-maximum-frequency"
difficulty: "Easy"
tags: ["Array", "Hash Table", "Counting"]
language: "cpp"
date_solved: "2025-09-22"
status: "solved"
submission_id: "1778543133"
---

## Problem

You are given an array `nums` consisting of **positive** integers.

Return _the**total frequencies** of elements in_ __`nums` _such that those elements all have the**maximum** frequency_.

The **frequency** of an element is the number of occurrences of that element in the array.

 

**Example 1:**
    
    
    **Input:** nums = [1,2,2,3,1,4]
    **Output:** 4
    **Explanation:** The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
    So the number of elements in the array with maximum frequency is 4.
    

**Example 2:**
    
    
    **Input:** nums = [1,2,3,4,5]
    **Output:** 5
    **Explanation:** All elements of the array have a frequency of 1 which is the maximum.
    So the number of elements in the array with maximum frequency is 5.
    

 

**Constraints:**

  * `1 <= nums.length <= 100`
  * `1 <= nums[i] <= 100`

## Solution

```cpp
class Solution {
public:
    int maxFrequencyElements(vector<int>& nums) {
        vector<int>count(101);
        int maxfreq=0;
        int c=0;
        int ans=0;
        for(int num:nums)
        {
            count[num]++;
            maxfreq=max(maxfreq,count[num]);
        }
        for(int i=0;i<101;i++)
        {
            if(count[i]==maxfreq)
            {
                c++;
            }
           ans=maxfreq*c;
        }
        return ans;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
