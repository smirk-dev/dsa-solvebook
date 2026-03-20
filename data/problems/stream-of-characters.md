---
id: "1097"
title: "Stream of Characters"
slug: "stream-of-characters"
difficulty: "Hard"
tags: ["Array", "String", "Design", "Trie", "Data Stream"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830273412"
---

## Problem

Design an algorithm that accepts a stream of characters and checks if a suffix of these characters is a string of a given array of strings `words`.

For example, if `words = ["abc", "xyz"]` and the stream added the four characters (one by one) `'a'`, `'x'`, `'y'`, and `'z'`, your algorithm should detect that the suffix `"xyz"` of the characters `"axyz"` matches `"xyz"` from `words`.

Implement the `StreamChecker` class:

  * `StreamChecker(String[] words)` Initializes the object with the strings array `words`.
  * `boolean query(char letter)` Accepts a new character from the stream and returns `true` if any non-empty suffix from the stream forms a word that is in `words`.



 

**Example 1:**
    
    
    **Input**
    ["StreamChecker", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query"]
    [[["cd", "f", "kl"]], ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"]]
    **Output**
    [null, false, false, false, true, false, true, false, false, false, false, false, true]
    
    **Explanation**
    StreamChecker streamChecker = new StreamChecker(["cd", "f", "kl"]);
    streamChecker.query("a"); // return False
    streamChecker.query("b"); // return False
    streamChecker.query("c"); // return False
    streamChecker.query("d"); // return True, because 'cd' is in the wordlist
    streamChecker.query("e"); // return False
    streamChecker.query("f"); // return True, because 'f' is in the wordlist
    streamChecker.query("g"); // return False
    streamChecker.query("h"); // return False
    streamChecker.query("i"); // return False
    streamChecker.query("j"); // return False
    streamChecker.query("k"); // return False
    streamChecker.query("l"); // return True, because 'kl' is in the wordlist
    

 

**Constraints:**

  * `1 <= words.length <= 2000`
  * `1 <= words[i].length <= 200`
  * `words[i]` consists of lowercase English letters.
  * `letter` is a lowercase English letter.
  * At most `4 * 104` calls will be made to query.

## Solution

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class StreamChecker:
    def __init__(self, words: List[str]):
        # Build Trie with reversed words
        self.root = TrieNode()
        self.stream = []  # Store incoming characters
        self.max_len = 0
        
        # Insert all words reversed into Trie
        for word in words:
            self.max_len = max(self.max_len, len(word))
            node = self.root
            for char in reversed(word):
                if char not in node.children:
                    node.children[char] = TrieNode()
                node = node.children[char]
            node.is_end = True
    
    def query(self, letter: str) -> bool:
        # Add new character to stream
        self.stream.append(letter)
        
        # Keep only last max_len characters for efficiency
        if len(self.stream) > self.max_len:
            self.stream.pop(0)
        
        # Search in Trie from newest to oldest character
        node = self.root
        for i in range(len(self.stream) - 1, -1, -1):
            char = self.stream[i]
            if char not in node.children:
                return False
            node = node.children[char]
            if node.is_end:
                return True
        
        return False


# Your StreamChecker object will be instantiated and called as such:
# obj = StreamChecker(words)
# param_1 = obj.query(letter)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
