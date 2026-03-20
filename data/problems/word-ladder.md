---
id: "127"
title: "Word Ladder"
slug: "word-ladder"
difficulty: "Hard"
tags: ["Hash Table", "String", "Breadth-First Search"]
language: "python3"
date_solved: "2026-03-14"
status: "solved"
submission_id: "1947701187"
---

## Problem

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:

  * Every adjacent pair of words differs by a single letter.
  * Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.
  * `sk == endWord`



Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return _the**number of words** in the **shortest transformation sequence** from_ `beginWord` _to_ `endWord` _, or_`0` _if no such sequence exists._

 

**Example 1:**
    
    
    **Input:** beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
    **Output:** 5
    **Explanation:** One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
    

**Example 2:**
    
    
    **Input:** beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
    **Output:** 0
    **Explanation:** The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
    

 

**Constraints:**

  * `1 <= beginWord.length <= 10`
  * `endWord.length == beginWord.length`
  * `1 <= wordList.length <= 5000`
  * `wordList[i].length == beginWord.length`
  * `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.
  * `beginWord != endWord`
  * All the words in `wordList` are **unique**.

## Solution

```python
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        wordSet = set(wordList)
        if endWord not in wordSet:
            return 0
        
        begin_set = {beginWord}
        end_set = {endWord}
        visited = set()
        steps = 1
        
        while begin_set and end_set:
            if len(begin_set) > len(end_set):
                begin_set, end_set = end_set, begin_set
            
            next_set = set()
            
            for word in begin_set:
                for i in range(len(word)):
                    for c in string.ascii_lowercase:
                        if c == word[i]:
                            continue
                        
                        new_word = word[:i] + c + word[i+1:]
                        
                        if new_word in end_set:
                            return steps + 1
                        
                        if new_word in wordSet and new_word not in visited:
                            visited.add(new_word)
                            next_set.add(new_word)
            
            begin_set = next_set
            steps += 1
        
        return 0
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
