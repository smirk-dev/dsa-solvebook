---
id: "443"
title: "String Compression"
slug: "string-compression"
difficulty: "Medium"
tags: ["Two Pointers", "String"]
language: "python3"
date_solved: "2025-11-08"
status: "solved"
submission_id: "1823884420"
---

## Problem

Given an array of characters `chars`, compress it using the following algorithm:

Begin with an empty string `s`. For each group of **consecutive repeating characters** in `chars`:

  * If the group's length is `1`, append the character to `s`.
  * Otherwise, append the character followed by the group's length.



The compressed string `s` **should not be returned separately** , but instead, be stored **in the input character array`chars`**. Note that group lengths that are `10` or longer will be split into multiple characters in `chars`.

After you are done **modifying the input array,** return _the new length of the array_.

You must write an algorithm that uses only constant extra space.

**Note:** The characters in the array beyond the returned length do not matter and should be ignored.

 

**Example 1:**
    
    
    **Input:** chars = ["a","a","b","b","c","c","c"]
    **Output:** 6
    **Explanation:** The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
    

**Example 2:**
    
    
    **Input:** chars = ["a"]
    **Output:** 1
    **Explanation:** The only group is "a", which remains uncompressed since it's a single character.
    

**Example 3:**
    
    
    **Input:** chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
    **Output:** 4
    **Explanation:** The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

 

**Constraints:**

  * `1 <= chars.length <= 2000`
  * `chars[i]` is a lowercase English letter, uppercase English letter, digit, or symbol.

## Solution

```python
class Solution:
    def compress(self, chars: List[str]) -> int:
        write = 0
        i = 0
        while i < len(chars):
            char = chars[i]
            count = 0
            while i < len(chars) and chars[i] == char:
                i += 1
                count += 1
            chars[write] = char
            write += 1
            if count > 1:
                for digit in str(count):
                    chars[write] = digit
                    write += 1
        return write
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
