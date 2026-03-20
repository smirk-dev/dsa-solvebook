---
id: "211"
title: "Design Add and Search Words Data Structure"
slug: "design-add-and-search-words-data-structure"
difficulty: "Medium"
tags: ["String", "Depth-First Search", "Design", "Trie"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1826050124"
---

## Problem

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the `WordDictionary` class:

  * `WordDictionary()` Initializes the object.
  * `void addWord(word)` Adds `word` to the data structure, it can be matched later.
  * `bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.



 

**Example:**
    
    
    **Input**
    ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
    [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
    **Output**
    [null,null,null,null,false,true,true,true]
    
    **Explanation**
    WordDictionary wordDictionary = new WordDictionary();
    wordDictionary.addWord("bad");
    wordDictionary.addWord("dad");
    wordDictionary.addWord("mad");
    wordDictionary.search("pad"); // return False
    wordDictionary.search("bad"); // return True
    wordDictionary.search(".ad"); // return True
    wordDictionary.search("b.."); // return True
    

 

**Constraints:**

  * `1 <= word.length <= 25`
  * `word` in `addWord` consists of lowercase English letters.
  * `word` in `search` consist of `'.'` or lowercase English letters.
  * There will be at most `2` dots in `word` for `search` queries.
  * At most `104` calls will be made to `addWord` and `search`.

## Solution

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        def dfs(node, i):
            if i == len(word):
                return node.is_end_of_word
            char = word[i]
            if char == '.':
                return any(dfs(child, i + 1) for child in node.children.values())
            if char not in node.children:
                return False
            return dfs(node.children[char], i + 1)
        return dfs(self.root, 0)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
