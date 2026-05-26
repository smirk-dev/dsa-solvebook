---
id: "3408"
title: "Count the Number of Special Characters I"
slug: "count-the-number-of-special-characters-i"
difficulty: "Easy"
tags: ["Hash Table", "String"]
language: "java"
date_solved: "2026-05-26"
status: "solved"
submission_id: "2013201861"
---

## Problem

You are given a string `word`. A letter is called **special** if it appears **both** in lowercase and uppercase in `word`.

Return the number of __**special** letters in __`word`.

 

**Example 1:**

**Input:** word = "aaAbcBC"

**Output:** 3

**Explanation:**

The special characters in `word` are `'a'`, `'b'`, and `'c'`.

**Example 2:**

**Input:** word = "abc"

**Output:** 0

**Explanation:**

No character in `word` appears in uppercase.

**Example 3:**

**Input:** word = "abBCab"

**Output:** 1

**Explanation:**

The only special character in `word` is `'b'`.

 

**Constraints:**

  * `1 <= word.length <= 50`
  * `word` consists of only lowercase and uppercase English letters.

## Solution

```java
class Solution {
    public int numberOfSpecialChars(String word) {
        int lower = 0;
        int upper = 0;

        for(char ch : word.toCharArray()) {
            if(Character.isLowerCase(ch)) {
                lower |= (1 << (ch - 'a'));
            }
            else {
                upper |= (1 << (ch - 'A'));
            }
        }

        int common = lower & upper;

        // counting number of set bits
        return Integer.bitCount(common);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
