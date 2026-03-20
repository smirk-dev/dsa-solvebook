---
id: "763"
title: "Special Binary String"
slug: "special-binary-string"
difficulty: "Hard"
tags: ["String", "Divide and Conquer", "Sorting"]
language: "java"
date_solved: "2026-03-14"
status: "solved"
submission_id: "1947703017"
---

## Problem

**Special binary strings** are binary strings with the following two properties:

  * The number of `0`'s is equal to the number of `1`'s.
  * Every prefix of the binary string has at least as many `1`'s as `0`'s.



You are given a **special binary** string `s`.

A move consists of choosing two consecutive, non-empty, special substrings of `s`, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.

Return _the lexicographically largest resulting string possible after applying the mentioned operations on the string_.

 

**Example 1:**
    
    
    **Input:** s = "11011000"
    **Output:** "11100100"
    **Explanation:** The strings "10" [occuring at s[1]] and "1100" [at s[3]] are swapped.
    This is the lexicographically largest string possible after some number of swaps.
    

**Example 2:**
    
    
    **Input:** s = "10"
    **Output:** "10"
    

 

**Constraints:**

  * `1 <= s.length <= 50`
  * `s[i]` is either `'0'` or `'1'`.
  * `s` is a special binary string.

## Solution

```java
class Solution {
    public String makeLargestSpecial(String s) {
        int cnt =0;
        List<String> list = new LinkedList<>();
        int j=0;
        for(int i=0;i<s.length();i++)
        {
            if(s.charAt(i)=='1')
                cnt++;
            else cnt--;
            if(cnt==0)
            {
                list.add('1'+makeLargestSpecial(s.substring(j+1,i))+'0');
                j= i+1;
            }
        }
        Collections.sort(list,Collections.reverseOrder());
        return String.join("",list);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
