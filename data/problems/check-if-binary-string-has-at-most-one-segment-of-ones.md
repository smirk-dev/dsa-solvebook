---
id: "1910"
title: "Check if Binary String Has at Most One Segment of Ones"
slug: "check-if-binary-string-has-at-most-one-segment-of-ones"
difficulty: "Easy"
tags: ["String"]
language: "java"
date_solved: "2026-03-06"
status: "solved"
submission_id: "1939526494"
---

## Problem

Given a binary string `s` **​​​​​without leading zeros** , return `true`​​​ _if_`s` _contains**at most one contiguous segment of ones**_. Otherwise, return `false`.

 

**Example 1:**
    
    
    **Input:** s = "1001"
    **Output:** false
    **Explanation:** The string has two segments of size 1.
    

**Example 2:**
    
    
    **Input:** s = "110"
    **Output:** true

 

**Constraints:**

  * `1 <= s.length <= 100`
  * `s[i]`​​​​ is either `'0'` or `'1'`.
  * `s[0]` is `'1'`.

## Solution

```java
class Solution {
    public boolean checkOnesSegment(String s) {
        return !s.contains("01");
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
