---
id: "2999"
title: "Check if Strings Can be Made Equal With Operations I"
slug: "check-if-strings-can-be-made-equal-with-operations-i"
difficulty: "Easy"
tags: ["String"]
language: "java"
date_solved: "2026-03-29"
status: "solved"
submission_id: "1962652314"
---

## Problem

You are given two strings `s1` and `s2`, both of length `4`, consisting of **lowercase** English letters.

You can apply the following operation on any of the two strings **any** number of times:

  * Choose any two indices `i` and `j` such that `j - i = 2`, then **swap** the two characters at those indices in the string.



Return `true` _if you can make the strings_`s1` _and_`s2` _equal, and_`false` _otherwise_.

 

**Example 1:**
    
    
    **Input:** s1 = "abcd", s2 = "cdab"
    **Output:** true
    **Explanation:** We can do the following operations on s1:
    - Choose the indices i = 0, j = 2. The resulting string is s1 = "cbad".
    - Choose the indices i = 1, j = 3. The resulting string is s1 = "cdab" = s2.
    

**Example 2:**
    
    
    **Input:** s1 = "abcd", s2 = "dacb"
    **Output:** false
    **Explanation:** It is not possible to make the two strings equal.
    

 

**Constraints:**

  * `s1.length == s2.length == 4`
  * `s1` and `s2` consist only of lowercase English letters.

## Solution

```java
class Solution {
    public boolean canBeEqual(String s1, String s2) {
        return ((s1.charAt(0) == s2.charAt(0) && s1.charAt(2) == s2.charAt(2)) ||
                (s1.charAt(0) == s2.charAt(2) && s1.charAt(2) == s2.charAt(0))) &&
               ((s1.charAt(1) == s2.charAt(1) && s1.charAt(3) == s2.charAt(3)) ||
                (s1.charAt(1) == s2.charAt(3) && s1.charAt(3) == s2.charAt(1)));
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
