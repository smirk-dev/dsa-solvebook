---
id: "1448"
title: "Maximum 69 Number"
slug: "maximum-69-number"
difficulty: "Easy"
tags: ["Math", "Greedy"]
language: "cpp"
date_solved: "2025-08-16"
status: "solved"
submission_id: "1737151770"
---

## Problem

You are given a positive integer `num` consisting only of digits `6` and `9`.

Return _the maximum number you can get by changing**at most** one digit (_`6` _becomes_`9` _, and_`9` _becomes_`6` _)_.

 

**Example 1:**
    
    
    **Input:** num = 9669
    **Output:** 9969
    **Explanation:** 
    Changing the first digit results in 6669.
    Changing the second digit results in 9969.
    Changing the third digit results in 9699.
    Changing the fourth digit results in 9666.
    The maximum number is 9969.
    

**Example 2:**
    
    
    **Input:** num = 9996
    **Output:** 9999
    **Explanation:** Changing the last digit 6 to 9 results in the maximum number.
    

**Example 3:**
    
    
    **Input:** num = 9999
    **Output:** 9999
    **Explanation:** It is better not to apply any change.
    

 

**Constraints:**

  * `1 <= num <= 104`
  * `num` consists of only `6` and `9` digits.

## Solution

```cpp
class Solution {
public:
    int maximum69Number (int num) {
        int a=-1;
        for(int n=num, d=0; n>0; n/=10, d++) {
            int r=n%10;
            if (r==6) a=d;
        }
        return (a==-1)?num:int(num+3*pow(10,a));     
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
