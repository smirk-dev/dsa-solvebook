---
id: "1756"
title: "Minimum Deletions to Make String Balanced"
slug: "minimum-deletions-to-make-string-balanced"
difficulty: "Medium"
tags: ["String", "Dynamic Programming", "Stack"]
language: "java"
date_solved: "2026-02-07"
status: "solved"
submission_id: "1910853235"
---

## Problem

You are given a string `s` consisting only of characters `'a'` and `'b'`​​​​.

You can delete any number of characters in `s` to make `s` **balanced**. `s` is **balanced** if there is no pair of indices `(i,j)` such that `i < j` and `s[i] = 'b'` and `s[j]= 'a'`.

Return _the**minimum** number of deletions needed to make _`s` _**balanced**_.

 

**Example 1:**
    
    
    **Input:** s = "aababbab"
    **Output:** 2
    **Explanation:** You can either:
    Delete the characters at 0-indexed positions 2 and 6 ("aa _b_ abb _a_ b" -> "aaabbb"), or
    Delete the characters at 0-indexed positions 3 and 6 ("aab _a_ bb _a_ b" -> "aabbbb").
    

**Example 2:**
    
    
    **Input:** s = "bbaaaaabb"
    **Output:** 2
    **Explanation:** The only solution is to delete the first two characters.
    

 

**Constraints:**

  * `1 <= s.length <= 105`
  * `s[i]` is `'a'` or `'b'`​​.

## Solution

```java
class Solution {
    public int minimumDeletions(String s) {
        int n = s.length(), res = n;
        int a = 0, b = 0;

        for (int i = 0; i < n; i++)
            a += s.charAt(i) & 1;

        for (int i = 0; i < n; i++) {
            int c = s.charAt(i);
            a -= c & 1;
            res = Math.min(res, a + b);
            b += (c & 1) ^ 1;
        }

        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
