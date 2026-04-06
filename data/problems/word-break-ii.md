---
id: "140"
title: "Word Break II"
slug: "word-break-ii"
difficulty: "Hard"
tags: ["Array", "Hash Table", "String", "Dynamic Programming", "Backtracking", "Trie", "Memoization"]
language: "java"
date_solved: "2026-04-06"
status: "solved"
submission_id: "1970234009"
---

## Problem

Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s` to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in **any order**.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

 

**Example 1:**
    
    
    **Input:** s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
    **Output:** ["cats and dog","cat sand dog"]
    

**Example 2:**
    
    
    **Input:** s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
    **Output:** ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
    **Explanation:** Note that you are allowed to reuse a dictionary word.
    

**Example 3:**
    
    
    **Input:** s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
    **Output:** []
    

 

**Constraints:**

  * `1 <= s.length <= 20`
  * `1 <= wordDict.length <= 1000`
  * `1 <= wordDict[i].length <= 10`
  * `s` and `wordDict[i]` consist of only lowercase English letters.
  * All the strings of `wordDict` are **unique**.
  * Input is generated in a way that the length of the answer doesn't exceed 105.

## Solution

```java
class Solution {
    static void generate(String s,List<String> wordDict,List<String> res,StringBuilder curr,int i){
        if(i>=s.length()){
            res.add(curr.toString().trim());
            return;
        }
        for(String word:wordDict){
            if(s.startsWith(word,i)){
                int l=curr.length();
                curr.append(word).append(" ");
                generate(s,wordDict,res,curr,i+word.length());
                curr.setLength(l);
            }
        }
    }
    public List<String> wordBreak(String s, List<String> wordDict) {
        List<String> res=new ArrayList<>();
        generate(s,wordDict,res,new StringBuilder(),0);
        return res;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
