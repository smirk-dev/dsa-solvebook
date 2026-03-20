---
id: "516"
title: "Longest Palindromic Subsequence"
slug: "longest-palindromic-subsequence"
difficulty: "Medium"
tags: ["String", "Dynamic Programming"]
language: "python3"
date_solved: "2025-11-16"
status: "solved"
submission_id: "1831476737"
---

## Problem

Given a string `s`, find _the longest palindromic**subsequence** 's length in_ `s`.

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 

**Example 1:**
    
    
    **Input:** s = "bbbab"
    **Output:** 4
    **Explanation:** One possible longest palindromic subsequence is "bbbb".
    

**Example 2:**
    
    
    **Input:** s = "cbbd"
    **Output:** 2
    **Explanation:** One possible longest palindromic subsequence is "bb".
    

 

**Constraints:**

  * `1 <= s.length <= 1000`
  * `s` consists only of lowercase English letters.

## Solution

```python
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        t=s[::-1]  #idea is reverse t and compare t with s
        
        dp=[[0 for _ in range(len(s)+1)] for __ in range(len(s)+1)] #create dp array
        
        for i in range(1,len(s)+1):  #start from1 to match dp size, but compare s[i-1] and t [j-1]
            for j in range(1,len(s)+1):
                if s[i-1]!=t[j-1]:  #if not equal what do we want to do ? the question is asking to
				#find the longest palindromic subsequence and char @ S !=char @T, 
                    dp[i][j]=max(dp[i][j-1],dp[i-1][j]) #so we just take the max previous value we found before
                else:                                     #now they are equal so our palindrome can be bigger
                    dp[i][j]=1+dp[i-1][j-1]   #take previous + 1 
        return dp[-1][-1]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
