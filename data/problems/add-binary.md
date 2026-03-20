---
id: "67"
title: "Add Binary"
slug: "add-binary"
difficulty: "Easy"
tags: ["Math", "String", "Bit Manipulation", "Simulation"]
language: "java"
date_solved: "2026-02-15"
status: "solved"
submission_id: "1919733473"
---

## Problem

Given two binary strings `a` and `b`, return _their sum as a binary string_.

 

**Example 1:**
    
    
    **Input:** a = "11", b = "1"
    **Output:** "100"
    

**Example 2:**
    
    
    **Input:** a = "1010", b = "1011"
    **Output:** "10101"
    

 

**Constraints:**

  * `1 <= a.length, b.length <= 104`
  * `a` and `b` consist only of `'0'` or `'1'` characters.
  * Each string does not contain leading zeros except for the zero itself.

## Solution

```java
class Solution {
    public String addBinary(String a, String b) {
        int n1 = a.length(), n2 = b.length();
        int max = Math.max(n1, n2);
        int C_in = 0, i = 0;
        String res = "";

        while (i < max || C_in > 0) {
            int A = 0;
            int B = 0;

            if (i < n1)
                A = a.charAt(n1 - 1 - i) - '0';

            if (i < n2)
                B = b.charAt(n2 - 1 - i) - '0';

            int S = (A ^ B) ^ C_in;
            int C_out = ((A ^ B) & C_in) | (A & B);

            res = (char)(S + '0') + res;
            C_in = C_out;

            i++;
        }

        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
