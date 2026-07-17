---
id: "434"
title: "Number of Segments in a String"
slug: "number-of-segments-in-a-string"
difficulty: "Easy"
tags: ["String"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071538461"
---

## Problem

Given a string `s`, return _the number of segments in the string_.

A **segment** is defined to be a contiguous sequence of **non-space characters**.

 

**Example 1:**
    
    
    **Input:** s = "Hello, my name is John"
    **Output:** 5
    **Explanation:** The five segments are ["Hello,", "my", "name", "is", "John"]
    

**Example 2:**
    
    
    **Input:** s = "Hello"
    **Output:** 1
    

 

**Constraints:**

  * `0 <= s.length <= 300`
  * `s` consists of lowercase and uppercase English letters, digits, or one of the following characters `"!@#$%^&*()_+-=',.:"`.
  * The only space character in `s` is `' '`.

## Solution

```java
class Solution {
    public int countSegments(String s) {
    int t=0;
    int c=0;
    int n=s.length();
    for(int i=0;i<n;i++){
        if(s.charAt(i)!=' '&&t==0){
            c++;
            t=1;
        }
        if(s.charAt(i)==' ') t=0;
    
    }
    return c;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
