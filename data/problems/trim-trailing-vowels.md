---
id: "4229"
title: "Trim Trailing Vowels"
slug: "trim-trailing-vowels"
difficulty: "Easy"
tags: ["String"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965511695"
---

## Problem

You are given a string `s` that consists of lowercase English letters.

Return the string obtained by removing **all** trailing **vowels** from `s`.

The **vowels** consist of the characters `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.

 

**Example 1:**

**Input:** s = "idea"

**Output:** "id"

**Explanation:**

Removing `"id _**ea**_ "`, we obtain the string `"id"`.

**Example 2:**

**Input:** s = "day"

**Output:** "day"

**Explanation:**

There are no trailing vowels in the string `"day"`.

**Example 3:**

**Input:** s = "aeiou"

**Output:** ""

**Explanation:**

Removing `"_**aeiou**_ "`, we obtain the string `""`.

 

**Constraints:**

  * `1 <= s.length <= 100`
  * `s` consists of only lowercase English letters.

## Solution

```java
class Solution {
    public String trimTrailingVowels(String s) {
        int i = s.length() - 1;
        
        while (i >= 0 && 
              (s.charAt(i) == 'a' || 
               s.charAt(i) == 'e' || 
               s.charAt(i) == 'i' || 
               s.charAt(i) == 'o' || 
               s.charAt(i) == 'u')) {
            i--;
        }
        
        return s.substring(0, i + 1);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
