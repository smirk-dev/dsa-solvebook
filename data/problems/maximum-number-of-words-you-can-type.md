---
id: "1264"
title: "Maximum Number of Words You Can Type"
slug: "maximum-number-of-words-you-can-type"
difficulty: "Easy"
tags: ["Hash Table", "String"]
language: "cpp"
date_solved: "2025-09-15"
status: "solved"
submission_id: "1771620497"
---

## Problem

There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string `text` of words separated by a single space (no leading or trailing spaces) and a string `brokenLetters` of all **distinct** letter keys that are broken, return _the**number of words** in_ `text` _you can fully type using this keyboard_.

 

**Example 1:**
    
    
    **Input:** text = "hello world", brokenLetters = "ad"
    **Output:** 1
    **Explanation:** We cannot type "world" because the 'd' key is broken.
    

**Example 2:**
    
    
    **Input:** text = "leet code", brokenLetters = "lt"
    **Output:** 1
    **Explanation:** We cannot type "leet" because the 'l' and 't' keys are broken.
    

**Example 3:**
    
    
    **Input:** text = "leet code", brokenLetters = "e"
    **Output:** 0
    **Explanation:** We cannot type either word because the 'e' key is broken.
    

 

**Constraints:**

  * `1 <= text.length <= 104`
  * `0 <= brokenLetters.length <= 26`
  * `text` consists of words separated by a single space without any leading or trailing spaces.
  * Each word only consists of lowercase English letters.
  * `brokenLetters` consists of **distinct** lowercase English letters.

## Solution

```cpp
class Solution {
public:
  int canBeTypedWords(const std::string& t, const std::string& bl) const {
    int blm = 0;
    for(const char c : bl) blm |= 1 << (c - 'a');
    int ans = 0;
    for(int i = 0, n = t.size(); i < n; ++i) {
      const char c = t[i];
      if(c == ' ') { ++ans; continue; }
      if((1 << (c - 'a')) & blm) {
        while(i < n && t[i] != ' ') ++i;
        continue;
      }
      if(i == n - 1) ++ans;
    }
    return ans;
  }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
