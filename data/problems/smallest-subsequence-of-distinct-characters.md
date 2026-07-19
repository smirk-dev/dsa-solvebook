---
id: "1159"
title: "Smallest Subsequence of Distinct Characters"
slug: "smallest-subsequence-of-distinct-characters"
difficulty: "Medium"
tags: ["String", "Stack", "Greedy", "Monotonic Stack"]
language: "java"
date_solved: "2026-07-19"
status: "solved"
submission_id: "2073210478"
---

## Problem

Given a string `s`, return _the_ _lexicographically smallest_ _subsequence_ _of_ `s` _that contains all the distinct characters of_ `s` _exactly once_.

 

**Example 1:**
    
    
    **Input:** s = "bcabc"
    **Output:** "abc"
    

**Example 2:**
    
    
    **Input:** s = "cbacdcbc"
    **Output:** "acdb"
    

 

**Constraints:**

  * `1 <= s.length <= 1000`
  * `s` consists of lowercase English letters.



 

**Note:** This question is the same as 316: <https://leetcode.com/problems/remove-duplicate-letters/>

## Solution

```java
class Solution {
    public String smallestSubsequence(String s) {
        int[] freq = new int[27];
        boolean[] seen = new boolean[27];
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++)
            freq[s.charAt(i) & 31]++;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            int x = c & 31;
            freq[x]--;

            if (seen[x])
                continue;

            while (!stack.isEmpty()) {
                if (stack.peek() <= c)
                    break;

                if (freq[stack.peek() & 31] == 0)
                    break;

                seen[stack.peek() & 31] = false;
                stack.pop();
            }

            stack.push(c);
            seen[x] = true;
        }

        StringBuilder res = new StringBuilder();

        for (char c : stack)
            res.append(c);

        return res.toString();
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
