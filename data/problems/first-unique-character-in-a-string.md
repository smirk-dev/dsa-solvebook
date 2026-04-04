---
id: "387"
title: "First Unique Character in a String"
slug: "first-unique-character-in-a-string"
difficulty: "Easy"
tags: ["Hash Table", "String", "Queue", "Counting"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965506929"
---

## Problem

Given a string `s`, find the **first** non-repeating character in it and return its index. If it **does not** exist, return `-1`.

 

**Example 1:**

**Input:** s = "leetcode"

**Output:** 0

**Explanation:**

The character `'l'` at index 0 is the first character that does not occur at any other index.

**Example 2:**

**Input:** s = "loveleetcode"

**Output:** 2

**Example 3:**

**Input:** s = "aabb"

**Output:** -1

 

**Constraints:**

  * `1 <= s.length <= 105`
  * `s` consists of only lowercase English letters.

## Solution

```java
class Solution {
    public int firstUniqChar(String s) {
        Map<Character, Integer> freq = new HashMap<>();

        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }

        for (int i = 0; i < s.length(); i++) {
            if (freq.get(s.charAt(i)) == 1) {
                return i;
            }
        }

        return -1;        
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
