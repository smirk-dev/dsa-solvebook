---
id: "43"
title: "Multiply Strings"
slug: "multiply-strings"
difficulty: "Medium"
tags: ["Math", "String", "Simulation"]
language: "python3"
date_solved: "2025-02-18"
status: "solved"
submission_id: "1547690003"
---

## Problem

Given two non-negative integers `num1` and `num2` represented as strings, return the product of `num1` and `num2`, also represented as a string.

**Note:**  You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

**Example 1:**
    
    
    **Input:** num1 = "2", num2 = "3"
    **Output:** "6"
    

**Example 2:**
    
    
    **Input:** num1 = "123", num2 = "456"
    **Output:** "56088"
    

 

**Constraints:**

  * `1 <= num1.length, num2.length <= 200`
  * `num1` and `num2` consist of digits only.
  * Both `num1` and `num2` do not contain any leading zero, except the number `0` itself.

## Solution

```python
class Solution(object):
    def multiply(self, num1, num2):
        if num1 == "0" or num2 == "0":
            return "0"

        len1 = len(num1)
        len2 = len(num2)
        arr = [0] * (len1 + len2)
        
        for i in range(len1-1, -1, -1):
            for j in range(len2-1, -1, -1):
                sum_val = (ord(num1[i]) - ord('0')) * (ord(num2[j]) - ord('0')) + arr[i + j + 1]
                arr[i + j + 1] = sum_val % 10
                arr[i + j] += sum_val // 10

        result=""
        lz=True
        for k in arr:
            if k==0 and lz:
                continue
            lz=False
            result+=str(k)

        return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
