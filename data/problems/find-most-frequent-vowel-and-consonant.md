---
id: "3872"
title: "Find Most Frequent Vowel and Consonant"
slug: "find-most-frequent-vowel-and-consonant"
difficulty: "Easy"
tags: ["Hash Table", "String", "Counting"]
language: "cpp"
date_solved: "2025-09-13"
status: "solved"
submission_id: "1769234945"
---

## Problem

You are given a string `s` consisting of lowercase English letters (`'a'` to `'z'`). 

Your task is to:

  * Find the vowel (one of `'a'`, `'e'`, `'i'`, `'o'`, or `'u'`) with the **maximum** frequency.
  * Find the consonant (all other letters excluding vowels) with the **maximum** frequency.



Return the sum of the two frequencies.

**Note** : If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

The **frequency** of a letter `x` is the number of times it occurs in the string. 

 

**Example 1:**

**Input:** s = "successes"

**Output:** 6

**Explanation:**

  * The vowels are: `'u'` (frequency 1), `'e'` (frequency 2). The maximum frequency is 2.
  * The consonants are: `'s'` (frequency 4), `'c'` (frequency 2). The maximum frequency is 4.
  * The output is `2 + 4 = 6`.



**Example 2:**

**Input:** s = "aeiaeia"

**Output:** 3

**Explanation:**

  * The vowels are: `'a'` (frequency 3), `'e'` ( frequency 2), `'i'` (frequency 2). The maximum frequency is 3.
  * There are no consonants in `s`. Hence, maximum consonant frequency = 0.
  * The output is `3 + 0 = 3`.



 

**Constraints:**

  * `1 <= s.length <= 100`
  * `s` consists of lowercase English letters only.

## Solution

```cpp
class Solution {
public:
    int maxFreqSum(string s) {
        int freq[26], maxVowel = 0, maxConso = 0;
        for (char c : s) {
            int i = c - 'a';
            freq[i]++;
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                maxVowel = max(maxVowel, freq[i]);
            }
            else {
                maxConso = max(maxConso, freq[i]);
            }
        }
        return maxVowel + maxConso;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
