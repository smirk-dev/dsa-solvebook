---
id: "1320"
title: "Remove All Adjacent Duplicates in String II"
slug: "remove-all-adjacent-duplicates-in-string-ii"
difficulty: "Medium"
tags: ["String", "Stack"]
language: "java"
date_solved: "2026-03-14"
status: "solved"
submission_id: "1947699984"
---

## Problem

You are given a string `s` and an integer `k`, a `k` **duplicate removal** consists of choosing `k` adjacent and equal letters from `s` and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make `k` **duplicate removals** on `s` until we no longer can.

Return _the final string after all such duplicate removals have been made_. It is guaranteed that the answer is **unique**.

 

**Example 1:**
    
    
    **Input:** s = "abcd", k = 2
    **Output:** "abcd"
    **Explanation:** There's nothing to delete.

**Example 2:**
    
    
    **Input:** s = "deeedbbcccbdaa", k = 3
    **Output:** "aa"
    **Explanation:** First delete "eee" and "ccc", get "ddbbbdaa"
    Then delete "bbb", get "dddaa"
    Finally delete "ddd", get "aa"

**Example 3:**
    
    
    **Input:** s = "pbbcggttciiippooaais", k = 2
    **Output:** "ps"
    

 

**Constraints:**

  * `1 <= s.length <= 105`
  * `2 <= k <= 104`
  * `s` only contains lowercase English letters.

## Solution

```java
class Solution {
    public String removeDuplicates(String s, int k) {
        // ArrayDeque has better performance than Stack and LinkedList
        ArrayDeque<Adjacent> st = new ArrayDeque<>(s.length());
        for (char c : s.toCharArray()) {
            if (!st.isEmpty() && st.peekLast().ch == c) {
                st.peekLast().freq++; // Increase the frequency
            } else {
                st.addLast(new Adjacent(c, 1));
            }
            if (st.peekLast().freq == k) // If reach enough k duplicate letters -> then remove
                st.removeLast();
        }
        StringBuilder sb = new StringBuilder();
        for (Adjacent a : st) {
            sb.append(String.valueOf(a.ch).repeat(a.freq));
        }
        return sb.toString();
    }
    class Adjacent {
        char ch;
        int freq;
        public Adjacent(char ch, int freq) {
            this.ch = ch;
            this.freq = freq;
        }
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
