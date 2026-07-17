---
id: "409"
title: "Longest Palindrome"
slug: "longest-palindrome"
difficulty: "Easy"
tags: ["Hash Table", "String", "Greedy"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071537400"
---

## Problem

Given a string `s` which consists of lowercase or uppercase letters, return the length of the **longest palindrome** that can be built with those letters.

Letters are **case sensitive** , for example, `"Aa"` is not considered a palindrome.

 

**Example 1:**
    
    
    **Input:** s = "abccccdd"
    **Output:** 7
    **Explanation:** One longest palindrome that can be built is "dccaccd", whose length is 7.
    

**Example 2:**
    
    
    **Input:** s = "a"
    **Output:** 1
    **Explanation:** The longest palindrome that can be built is "a", whose length is 1.
    

 

**Constraints:**

  * `1 <= s.length <= 2000`
  * `s` consists of lowercase **and/or** uppercase English letters only.

## Solution

```java
public class Solution {
    public int longestPalindrome(String s) {
        HashMap<Character, Integer> charFrequency = new HashMap<>();
        int oddFrequencyCount = 0;
        for (char ch : s.toCharArray()) {
            charFrequency.put(ch, charFrequency.getOrDefault(ch, 0) + 1);
            if (charFrequency.get(ch) % 2 == 1)
                oddFrequencyCount++;
            else
                oddFrequencyCount--;
        }
        if (oddFrequencyCount > 1)
            return s.length() - oddFrequencyCount + 1;
        return s.length();
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
