---
id: "3405"
title: "Count the Number of Special Characters II"
slug: "count-the-number-of-special-characters-ii"
difficulty: "Medium"
tags: ["Hash Table", "String"]
language: "java"
date_solved: "2026-05-27"
status: "solved"
submission_id: "2014173910"
---

## Problem

You are given a string `word`. A letter `c` is called **special** if it appears **both** in lowercase and uppercase in `word`, and **every** lowercase occurrence of `c` appears before the **first** uppercase occurrence of `c`.

Return the number of __**special** letters __ in __`word`.

 

**Example 1:**

**Input:** word = "aaAbcBC"

**Output:** 3

**Explanation:**

The special characters are `'a'`, `'b'`, and `'c'`.

**Example 2:**

**Input:** word = "abc"

**Output:** 0

**Explanation:**

There are no special characters in `word`.

**Example 3:**

**Input:** word = "AbBCab"

**Output:** 0

**Explanation:**

There are no special characters in `word`.

 

**Constraints:**

  * `1 <= word.length <= 2 * 105`
  * `word` consists of only lowercase and uppercase English letters.

## Solution

```java
class Solution {
    public int numberOfSpecialChars(String word) {
        boolean[][] A = new boolean[2][27];

        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            int idx = ch & 31;
            int Case = (ch >> 5) & 1;

            A[Case][idx] = Case == 0 || !A[0][idx];
        }

        int res = 0;
        for (int i = 1; i < 27; i++)
            if (A[0][i] && A[1][i])
                res++;

        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
