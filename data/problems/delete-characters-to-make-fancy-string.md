---
id: "1302"
title: "Delete Characters to Make Fancy String"
slug: "delete-characters-to-make-fancy-string"
difficulty: "Easy"
tags: ["String"]
language: "c"
date_solved: "2025-07-21"
status: "solved"
submission_id: "1705708164"
---

## Problem

A **fancy string** is a string where no **three** **consecutive** characters are equal.

Given a string `s`, delete the **minimum** possible number of characters from `s` to make it **fancy**.

Return _the final string after the deletion_. It can be shown that the answer will always be **unique**.

 

**Example 1:**
    
    
    **Input:** s = "le _e_ etcode"
    **Output:** "leetcode"
    **Explanation:**
    Remove an 'e' from the first group of 'e's to create "leetcode".
    No three consecutive characters are equal, so return "leetcode".
    

**Example 2:**
    
    
    **Input:** s = "_a_ aab _aa_ aa"
    **Output:** "aabaa"
    **Explanation:**
    Remove an 'a' from the first group of 'a's to create "aabaaaa".
    Remove two 'a's from the second group of 'a's to create "aabaa".
    No three consecutive characters are equal, so return "aabaa".
    

**Example 3:**
    
    
    **Input:** s = "aab"
    **Output:** "aab"
    **Explanation:** No three consecutive characters are equal, so return "aab".
    

 

**Constraints:**

  * `1 <= s.length <= 105`
  * `s` consists only of lowercase English letters.

## Solution

```c
char* makeFancyString(char* s) {
    char *c=s, *cc, last; int lastCounter=1;

    for(last=*c, cc=++c; *c!='\0'; c++) {
        if(*c==last){ lastCounter++; }
        else{ last=*c; lastCounter=1; }
        if(lastCounter<=2){ *cc++=*c; }
    } *cc='\0';

    return s;
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
