---
id: "745"
title: "Find Smallest Letter Greater Than Target"
slug: "find-smallest-letter-greater-than-target"
difficulty: "Easy"
tags: ["Array", "Binary Search"]
language: "java"
date_solved: "2026-01-31"
status: "solved"
submission_id: "1902651075"
---

## Problem

You are given an array of characters `letters` that is sorted in **non-decreasing order** , and a character `target`. There are **at least two different** characters in `letters`.

Return _the smallest character in_`letters` _that is lexicographically greater than_`target`. If such a character does not exist, return the first character in `letters`.

 

**Example 1:**
    
    
    **Input:** letters = ["c","f","j"], target = "a"
    **Output:** "c"
    **Explanation:** The smallest character that is lexicographically greater than 'a' in letters is 'c'.
    

**Example 2:**
    
    
    **Input:** letters = ["c","f","j"], target = "c"
    **Output:** "f"
    **Explanation:** The smallest character that is lexicographically greater than 'c' in letters is 'f'.
    

**Example 3:**
    
    
    **Input:** letters = ["x","x","y","y"], target = "z"
    **Output:** "x"
    **Explanation:** There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
    

 

**Constraints:**

  * `2 <= letters.length <= 104`
  * `letters[i]` is a lowercase English letter.
  * `letters` is sorted in **non-decreasing** order.
  * `letters` contains at least two different characters.
  * `target` is a lowercase English letter.

## Solution

```java
class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        char res = letters[0];
        boolean flag = false;

        for(char ch : letters){
            if(!flag){
                if(ch > target){
                    res = ch;
                    flag = !flag;
                }
            } else {
                if(ch > target && ch < res)res = ch;
            }
        }

        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
