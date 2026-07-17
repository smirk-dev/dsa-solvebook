---
id: "500"
title: "Keyboard Row"
slug: "keyboard-row"
difficulty: "Easy"
tags: ["Array", "Hash Table", "String"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071540404"
---

## Problem

Given an array of strings `words`, return _the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below_.

**Note** that the strings are **case-insensitive** , both lowercased and uppercased of the same letter are treated as if they are at the same row.

In the **American keyboard** :

  * the first row consists of the characters `"qwertyuiop"`,
  * the second row consists of the characters `"asdfghjkl"`, and
  * the third row consists of the characters `"zxcvbnm"`.



 

**Example 1:**

**Input:** words = ["Hello","Alaska","Dad","Peace"]

**Output:** ["Alaska","Dad"]

**Explanation:**

Both `"a"` and `"A"` are in the 2nd row of the American keyboard due to case insensitivity.

**Example 2:**

**Input:** words = ["omk"]

**Output:** []

**Example 3:**

**Input:** words = ["adsdf","sfd"]

**Output:** ["adsdf","sfd"]

 

**Constraints:**

  * `1 <= words.length <= 20`
  * `1 <= words[i].length <= 100`
  * `words[i]` consists of English letters (both lowercase and uppercase).

## Solution

```java
class Solution {
    public String[] findWords(String[] words) {
        ArrayList<String> list = new ArrayList<>();
        String first  = "qwertyuiop";
        String second = "asdfghjkl";
        String third  = "zxcvbnm";

        for (String word : words) {
            if (isinrow(word, first) || isinrow(word, second) || isinrow(word, third)) {
                list.add(word);
            }
        }

        return list.toArray(new String[0]); // cleaner than manual array copy
    }

    private boolean isinrow(String s, String row) {
        for (char c : s.toCharArray()) {
            if (row.indexOf(Character.toLowerCase(c)) == -1) return false;
        }
        return true;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
