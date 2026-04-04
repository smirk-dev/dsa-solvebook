---
id: "344"
title: "Reverse String"
slug: "reverse-string"
difficulty: "Easy"
tags: ["Two Pointers", "String"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965504725"
---

## Problem

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with `O(1)` extra memory.

 

**Example 1:**
    
    
    **Input:** s = ["h","e","l","l","o"]
    **Output:** ["o","l","l","e","h"]
    

**Example 2:**
    
    
    **Input:** s = ["H","a","n","n","a","h"]
    **Output:** ["h","a","n","n","a","H"]
    

 

**Constraints:**

  * `1 <= s.length <= 105`
  * `s[i]` is a [printable ascii character](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

## Solution

```java
class Solution {
    public void reverseString(char[] s) {

        int start = 0;
        int end = s.length - 1;

        while(start <= end){

            char temp = s[start];
            s[start] = s[end];
            s[end] = temp;

            start++;
            end--;
        }
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
