---
id: "1818"
title: "Maximum Score From Removing Substrings"
slug: "maximum-score-from-removing-substrings"
difficulty: "Medium"
tags: ["String", "Stack", "Greedy"]
language: "c"
date_solved: "2025-07-23"
status: "solved"
submission_id: "1707965473"
---

## Problem

You are given a string `s` and two integers `x` and `y`. You can perform two types of operations any number of times.

  * Remove substring `"ab"` and gain `x` points. 
    * For example, when removing `"ab"` from `"c _ab_ xbae"` it becomes `"cxbae"`.
  * Remove substring `"ba"` and gain `y` points. 
    * For example, when removing `"ba"` from `"cabx _ba_ e"` it becomes `"cabxe"`.



Return _the maximum points you can gain after applying the above operations on_ `s`.

 

**Example 1:**
    
    
    **Input:** s = "cdbcbbaaabab", x = 4, y = 5
    **Output:** 19
    **Explanation:**
    - Remove the "ba" underlined in "cdbcbbaaa _ba_ b". Now, s = "cdbcbbaaab" and 5 points are added to the score.
    - Remove the "ab" underlined in "cdbcbbaa _ab_ ". Now, s = "cdbcbbaa" and 4 points are added to the score.
    - Remove the "ba" underlined in "cdbcb _ba_ a". Now, s = "cdbcba" and 5 points are added to the score.
    - Remove the "ba" underlined in "cdbc _ba_ ". Now, s = "cdbc" and 5 points are added to the score.
    Total score = 5 + 4 + 5 + 5 = 19.

**Example 2:**
    
    
    **Input:** s = "aabbaaxybbaabb", x = 5, y = 4
    **Output:** 20
    

 

**Constraints:**

  * `1 <= s.length <= 105`
  * `1 <= x, y <= 104`
  * `s` consists of lowercase English letters.

## Solution

```c
int min(int a, int b) {
    return (a < b) ? a : b;
}
int maximumGain(char* s, int x, int y) {
    int aCount = 0;
    int bCount = 0;
    int lesser = min(x, y);
    int result = 0;

    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];
        if (c > 'b') {
            result += min(aCount, bCount) * lesser;
            aCount = 0;
            bCount = 0;
        } else if (c == 'a') {
            if (x < y && bCount > 0) {
                bCount--;
                result += y;
            } else {
                aCount++;
            }
        } else if (c == 'b') {
            if (x > y && aCount > 0) {
                aCount--;
                result += x;
            } else {
                bCount++;
            }
        }
    }

    result += min(aCount, bCount) * lesser;
    return result;
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
