---
id: "79"
title: "Word Search"
slug: "word-search"
difficulty: "Medium"
tags: ["Array", "String", "Backtracking", "Depth-First Search", "Matrix"]
language: "python3"
date_solved: "2025-03-27"
status: "solved"
submission_id: "1587874309"
---

## Problem

Given an `m x n` grid of characters `board` and a string `word`, return `true` _if_ `word` _exists in the grid_.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

**Example 1:**
    
    
    **Input:** board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
    **Output:** true
    

**Example 2:**
    
    
    **Input:** board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
    **Output:** true
    

**Example 3:**
    
    
    **Input:** board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
    **Output:** false
    

 

**Constraints:**

  * `m == board.length`
  * `n = board[i].length`
  * `1 <= m, n <= 6`
  * `1 <= word.length <= 15`
  * `board` and `word` consists of only lowercase and uppercase English letters.



 

**Follow up:** Could you use search pruning to make your solution faster with a larger `board`?

## Solution

```python
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m, n, k = len(board[0]), len(board), len(word)
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        freq1 = defaultdict(int)
        freq2 = defaultdict(int)
        for i in range(n):
            for j in range(m):
                freq1[board[i][j]] += 1
        for ch in word:
            freq2[ch] += 1
        for key, val in freq2.items():
            if freq1[key] < val:
                return False
        if freq2[word[0]] > freq2[word[-1]]:
            word = word[::-1]
        def dfs(i, j, pos):
            if pos == k - 1:
                return True
            temp = board[i][j]
            board[i][j] = ""
            for d in directions:
                i_, j_ = i + d[0], j + d[1]
                if 0 <= i_ < n and 0 <= j_ < m and board[i_][j_] == word[pos+1]:
                    if dfs(i_, j_, pos + 1): return True
            board[i][j] = temp
            return False
        for i in range(n):
            for j in range(m):
                if board[i][j] == word[0] and dfs(i, j, 0): return True
        return False
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
