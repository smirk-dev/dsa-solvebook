---
id: "1297"
title: "Maximum Number of Balloons"
slug: "maximum-number-of-balloons"
difficulty: "Easy"
tags: ["Hash Table", "String", "Counting"]
language: "java"
date_solved: "2026-06-22"
status: "solved"
submission_id: "2042003596"
---

## Problem

Given a string `text`, you want to use the characters of `text` to form as many instances of the word **" balloon"** as possible.

You can use each character in `text` **at most once**. Return the maximum number of instances that can be formed.

 

**Example 1:**

****
    
    
    **Input:** text = "nlaebolko"
    **Output:** 1
    

**Example 2:**

****
    
    
    **Input:** text = "loonbalxballpoon"
    **Output:** 2
    

**Example 3:**
    
    
    **Input:** text = "leetcode"
    **Output:** 0
    

 

**Constraints:**

  * `1 <= text.length <= 104`
  * `text` consists of lower case English letters only.



 

**Note:** This question is the same as [ 2287: Rearrange Characters to Make Target String.](https://leetcode.com/problems/rearrange-characters-to-make-target-string/description/)

## Solution

```java
class Solution {
    public int maxNumberOfBalloons(String s) {
        int[] f = new int[5];
        String t = "balon";
        for (int i = 0; i < s.length(); i++)
            for (int j = 0; j < 5; j++)
                if (s.charAt(i) == t.charAt(j))
                    f[j]++;
        f[2] >>= 1;
        f[3] >>= 1;
        return Arrays.stream(f).min().getAsInt();
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
