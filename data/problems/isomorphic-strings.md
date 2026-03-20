---
id: "205"
title: "Isomorphic Strings"
slug: "isomorphic-strings"
difficulty: "Easy"
tags: ["Hash Table", "String"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1825946351"
---

## Problem

Given two strings `s` and `t`, _determine if they are isomorphic_.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true

**Explanation:**

The strings `s` and `t` can be made identical by:

  * Mapping `'e'` to `'a'`.
  * Mapping `'g'` to `'d'`.



**Example 2:**

**Input:** s = "f11", t = "b23"

**Output:** false

**Explanation:**

The strings `s` and `t` can not be made identical as `'1'` needs to be mapped to both `'2'` and `'3'`.

**Example 3:**

**Input:** s = "paper", t = "title"

**Output:** true

 

**Constraints:**

  * `1 <= s.length <= 5 * 104`
  * `t.length == s.length`
  * `s` and `t` consist of any valid ascii character.

## Solution

```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        return len(set(s)) == len(set(t)) == len(set(zip(s,t)))
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
