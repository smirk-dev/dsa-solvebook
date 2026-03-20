---
id: "949"
title: "Cat and Mouse"
slug: "cat-and-mouse"
difficulty: "Hard"
tags: ["Math", "Dynamic Programming", "Graph Theory", "Topological Sort", "Memoization", "Game Theory"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830362565"
---

## Problem

A game on an **undirected** graph is played by two players, Mouse and Cat, who alternate turns.

The graph is given as follows: `graph[a]` is a list of all nodes `b` such that `ab` is an edge of the graph.

The mouse starts at node `1` and goes first, the cat starts at node `2` and goes second, and there is a hole at node `0`.

During each player's turn, they **must** travel along one edge of the graph that meets where they are.  For example, if the Mouse is at node 1, it **must** travel to any node in `graph[1]`.

Additionally, it is not allowed for the Cat to travel to the Hole (node `0`).

Then, the game can end in three ways:

  * If ever the Cat occupies the same node as the Mouse, the Cat wins.
  * If ever the Mouse reaches the Hole, the Mouse wins.
  * If ever a position is repeated (i.e., the players are in the same position as a previous turn, and it is the same player's turn to move), the game is a draw.



Given a `graph`, and assuming both players play optimally, return

  * `1` if the mouse wins the game,
  * `2` if the cat wins the game, or
  * `0` if the game is a draw.



 

**Example 1:**
    
    
    **Input:** graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]
    **Output:** 0
    

**Example 2:**
    
    
    **Input:** graph = [[1,3],[0],[3],[0,2]]
    **Output:** 1
    

 

**Constraints:**

  * `3 <= graph.length <= 50`
  * `1 <= graph[i].length < graph.length`
  * `0 <= graph[i][j] < graph.length`
  * `graph[i][j] != i`
  * `graph[i]` is unique.
  * The mouse and the cat can always move.

## Solution

```python
from collections import deque

class Solution:
    def catMouseGame(self, graph: list[list[int]]) -> int:
        n = len(graph)
        deg = [[[0]*2 for _ in range(n)] for __ in range(n)]
        result = [[[0]*2 for _ in range(n)] for __ in range(n)]
        for m in range(n):
            for c in range(n):
                deg[m][c][0] = len(graph[m])
                deg[m][c][1] = sum(1 for v in graph[c] if v != 0)
        q = deque()
        for c in range(n):
            for t in range(2):
                result[0][c][t] = 1
                q.append((0, c, t, 1))
        for i in range(1, n):
            for t in range(2):
                result[i][i][t] = 2
                q.append((i, i, t, 2))
        while q:
            m, c, t, win = q.popleft()
            pt = 1 - t
            if pt == 0:
                for pm in graph[m]:
                    if result[pm][c][pt] != 0:
                        continue
                    if win == 1:
                        result[pm][c][pt] = 1
                        q.append((pm, c, pt, 1))
                    else:
                        deg[pm][c][pt] -= 1
                        if deg[pm][c][pt] == 0:
                            result[pm][c][pt] = 2
                            q.append((pm, c, pt, 2))
            else:
                for pc in graph[c]:
                    if pc == 0:
                        continue
                    if result[m][pc][pt] != 0:
                        continue
                    if win == 2:
                        result[m][pc][pt] = 2
                        q.append((m, pc, pt, 2))
                    else:
                        deg[m][pc][pt] -= 1
                        if deg[m][pc][pt] == 0:
                            result[m][pc][pt] = 1
                            q.append((m, pc, pt, 1))
        return result[1][2][0]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
