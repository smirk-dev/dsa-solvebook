---
id: "242"
title: "Valid Anagram"
slug: "valid-anagram"
difficulty: "Easy"
tags: ["Hash Table", "String", "Sorting"]
language: "java"
date_solved: "2026-03-09"
status: "solved"
submission_id: "1942563541"
---

## Problem

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

 

**Example 1:**

**Input:** s = "anagram", t = "nagaram"

**Output:** true

**Example 2:**

**Input:** s = "rat", t = "car"

**Output:** false

 

**Constraints:**

  * `1 <= s.length, t.length <= 5 * 104`
  * `s` and `t` consist of lowercase English letters.



 

**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## Solution

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        Map<Character, Integer> counter = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            counter.put(ch, counter.getOrDefault(ch, 0) + 1);
        }

        for (int i = 0; i < t.length(); i++) {
            char ch = t.charAt(i);
            if (!counter.containsKey(ch) || counter.get(ch) == 0) {
                return false;
            }
            counter.put(ch, counter.get(ch) - 1);
        }

        return true;        
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
