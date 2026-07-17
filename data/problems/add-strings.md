---
id: "415"
title: "Add Strings"
slug: "add-strings"
difficulty: "Easy"
tags: ["Math", "String", "Simulation"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071538286"
---

## Problem

Given two non-negative integers, `num1` and `num2` represented as string, return _the sum of_ `num1` _and_ `num2` _as a string_.

You must solve the problem without using any built-in library for handling large integers (such as `BigInteger`). You must also not convert the inputs to integers directly.

 

**Example 1:**
    
    
    **Input:** num1 = "11", num2 = "123"
    **Output:** "134"
    

**Example 2:**
    
    
    **Input:** num1 = "456", num2 = "77"
    **Output:** "533"
    

**Example 3:**
    
    
    **Input:** num1 = "0", num2 = "0"
    **Output:** "0"
    

 

**Constraints:**

  * `1 <= num1.length, num2.length <= 104`
  * `num1` and `num2` consist of only digits.
  * `num1` and `num2` don't have any leading zeros except for the zero itself.

## Solution

```java
class Solution {
    public String addStrings(String num1, String num2) {
        int i= num1.length()-1;
        int j = num2.length()-1;
        int carry =0;
        StringBuilder sb = new StringBuilder();
        while(i>=0||j>=0||carry!=0)
        {
            int d1=(i>=0)?num1.charAt(i)-'0':0;
            int d2=(j>=0)?num2.charAt(j)-'0':0;
            int sum = d1+d2+carry;
             carry = sum/10;
            sb.append(sum%10);
            i--;
            j--;
        }
        return sb.reverse().toString();
        
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
