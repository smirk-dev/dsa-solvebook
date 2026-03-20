---
id: "2559"
title: "Maximum Number of Non-overlapping Palindrome Substrings"
slug: "maximum-number-of-non-overlapping-palindrome-substrings"
difficulty: "Hard"
tags: ["Two Pointers", "String", "Dynamic Programming", "Greedy"]
language: "java"
date_solved: "2026-03-09"
status: "solved"
submission_id: "1942562511"
---

## Problem

You are given a string `s` and a **positive** integer `k`.

Select a set of **non-overlapping** substrings from the string `s` that satisfy the following conditions:

  * The **length** of each substring is **at least** `k`.
  * Each substring is a **palindrome**.



Return _the**maximum** number of substrings in an optimal selection_.

A **substring** is a contiguous sequence of characters within a string.

 

**Example 1:**
    
    
    **Input:** s = "abaccdbbd", k = 3
    **Output:** 2
    **Explanation:** We can select the substrings underlined in s = "_**aba**_ cc _**dbbd**_ ". Both "aba" and "dbbd" are palindromes and have a length of at least k = 3.
    It can be shown that we cannot find a selection with more than two valid substrings.
    

**Example 2:**
    
    
    **Input:** s = "adbcda", k = 2
    **Output:** 0
    **Explanation:** There is no palindrome substring of length at least 2 in the string.
    

 

**Constraints:**

  * `1 <= k <= s.length <= 2000`
  * `s` consists of lowercase English letters.

## Solution

```java
class Solution {
    public int maxPalindromes(String s, int k) {
        int ans = 0;
        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j < s.length(); j++) {
                int len = (j - i) + 1;
                if (len > k + 1) break; // this is the key 
                if (len >= k && isPalindrome(s, i, j)) {
                    ans++; i = j;  break;
                }
            }
        }
        return ans;
    }

    boolean isPalindrome(String s, int l, int r) {
        while (l < r) {
            if (s.charAt(l++) != s.charAt(r--))  return false;
        }
        return true;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
