---
id: "2550"
title: "Words Within Two Edits of Dictionary"
slug: "words-within-two-edits-of-dictionary"
difficulty: "Medium"
tags: ["Array", "String", "Trie"]
language: "java"
date_solved: "2026-04-22"
status: "solved"
submission_id: "1984920601"
---

## Problem

You are given two string arrays, `queries` and `dictionary`. All words in each array comprise of lowercase English letters and have the same length.

In one **edit** you can take a word from `queries`, and change any letter in it to any other letter. Find all words from `queries` that, after a **maximum** of two edits, equal some word from `dictionary`.

Return _a list of all words from_`queries` _,__that match with some word from_`dictionary` _after a maximum of**two edits**_. Return the words in the **same order** they appear in `queries`.

 

**Example 1:**
    
    
    **Input:** queries = ["word","note","ants","wood"], dictionary = ["wood","joke","moat"]
    **Output:** ["word","note","wood"]
    **Explanation:**
    - Changing the 'r' in "word" to 'o' allows it to equal the dictionary word "wood".
    - Changing the 'n' to 'j' and the 't' to 'k' in "note" changes it to "joke".
    - It would take more than 2 edits for "ants" to equal a dictionary word.
    - "wood" can remain unchanged (0 edits) and match the corresponding dictionary word.
    Thus, we return ["word","note","wood"].
    

**Example 2:**
    
    
    **Input:** queries = ["yes"], dictionary = ["not"]
    **Output:** []
    **Explanation:**
    Applying any two edits to "yes" cannot make it equal to "not". Thus, we return an empty array.
    

 

**Constraints:**

  * `1 <= queries.length, dictionary.length <= 100`
  * `n == queries[i].length == dictionary[j].length`
  * `1 <= n <= 100`
  * All `queries[i]` and `dictionary[j]` are composed of lowercase English letters.

## Solution

```java
class Solution {
    public List<String> twoEditWords(String[] queries, String[] dictionary) {
        List<String> ans = new ArrayList<>();

        for(String q : queries){
            for(String d : dictionary){
                int diff = 0;

                for(int i = 0; i < q.length(); i++){
                    if(q.charAt(i) != d.charAt(i)) diff++;
                    if(diff > 2) break;
                }

                if(diff <= 2){
                    ans.add(q);
                    break;
                }
            }
        }

        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
