---
id: "2639"
title: "Separate the Digits in an Array"
slug: "separate-the-digits-in-an-array"
difficulty: "Easy"
tags: ["Array", "Simulation"]
language: "java"
date_solved: "2026-05-11"
status: "solved"
submission_id: "2000392058"
---

## Problem

Given an array of positive integers `nums`, return _an array_`answer` _that consists of the digits of each integer in_`nums` _after separating them in**the same order** they appear in _`nums`.

To separate the digits of an integer is to get all the digits it has in the same order.

  * For example, for the integer `10921`, the separation of its digits is `[1,0,9,2,1]`.



 

**Example 1:**
    
    
    **Input:** nums = [13,25,83,77]
    **Output:** [1,3,2,5,8,3,7,7]
    **Explanation:** 
    - The separation of 13 is [1,3].
    - The separation of 25 is [2,5].
    - The separation of 83 is [8,3].
    - The separation of 77 is [7,7].
    answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.
    

**Example 2:**
    
    
    **Input:** nums = [7,1,3,9]
    **Output:** [7,1,3,9]
    **Explanation:** The separation of each integer in nums is itself.
    answer = [7,1,3,9].
    

 

**Constraints:**

  * `1 <= nums.length <= 1000`
  * `1 <= nums[i] <= 105`

## Solution

```java
class Solution {
    public int[] separateDigits(int[] nums) {
        
        List<Integer> list = new ArrayList<>();

        for (int num : nums) {

            String s = String.valueOf(num);

            for (char ch : s.toCharArray()) {

                list.add(ch - '0');
            }
        }

        int[] result = new int[list.size()];

        for (int i = 0; i < list.size(); i++) {
            result[i] = list.get(i);
        }

        return result;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
