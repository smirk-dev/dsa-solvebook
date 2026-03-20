---
id: "22"
title: "Generate Parentheses"
slug: "generate-parentheses"
difficulty: "Medium"
tags: ["String", "Dynamic Programming", "Backtracking"]
language: "java"
date_solved: "2026-03-09"
status: "solved"
submission_id: "1942556278"
---

## Problem

Given `n` pairs of parentheses, write a function to _generate all combinations of well-formed parentheses_.

 

**Example 1:**
    
    
    **Input:** n = 3
    **Output:** ["((()))","(()())","(())()","()(())","()()()"]
    

**Example 2:**
    
    
    **Input:** n = 1
    **Output:** ["()"]
    

 

**Constraints:**

  * `1 <= n <= 8`

## Solution

```java
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();

        dfs(0, 0, "", n, res);

        return res;        
    }

    private void dfs(int openP, int closeP, String s, int n, List<String> res) {
        if (openP == closeP && openP + closeP == n * 2) {
            res.add(s);
            return;
        }

        if (openP < n) {
            dfs(openP + 1, closeP, s + "(", n, res);
        }

        if (closeP < openP) {
            dfs(openP, closeP + 1, s + ")", n, res);
        }
    }    
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
