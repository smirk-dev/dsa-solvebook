---
id: "504"
title: "Base 7"
slug: "base-7"
difficulty: "Easy"
tags: ["Math", "String"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071540892"
---

## Problem

Given an integer `num`, return _a string of its**base 7** representation_.

 

**Example 1:**
    
    
    **Input:** num = 100
    **Output:** "202"
    

**Example 2:**
    
    
    **Input:** num = -7
    **Output:** "-10"
    

 

**Constraints:**

  * `-107 <= num <= 107`

## Solution

```java
class Solution {
    public String convertToBase7(int num) {
        if(num==0)
        {
            return "0";
        }
        boolean negative=false;
        if(num<0)
        {
            negative=true;
            num=Math.abs(num);
        }
        StringBuilder ans=new StringBuilder();
        while(num>0)
        {
            ans.append(num%7);
            num=num/7;
        }
        if(negative)
        {
            ans.append("-");
        }
        return ans.reverse().toString();
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
