---
id: "520"
title: "Detect Capital"
slug: "detect-capital"
difficulty: "Easy"
tags: ["String"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829412679"
---

## Problem

We define the usage of capitals in a word to be right when one of the following cases holds:

  * All letters in this word are capitals, like `"USA"`.
  * All letters in this word are not capitals, like `"leetcode"`.
  * Only the first letter in this word is capital, like `"Google"`.



Given a string `word`, return `true` if the usage of capitals in it is right.

 

**Example 1:**
    
    
    **Input:** word = "USA"
    **Output:** true
    

**Example 2:**
    
    
    **Input:** word = "FlaG"
    **Output:** false
    

 

**Constraints:**

  * `1 <= word.length <= 100`
  * `word` consists of lowercase and uppercase English letters.

## Solution

```python
class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        return (
            word.isupper() or
            word.islower() or
            (word[0].isupper() and word[1:].islower())
        )
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
