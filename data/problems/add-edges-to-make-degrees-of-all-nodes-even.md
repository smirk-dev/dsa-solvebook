---
id: "2596"
title: "Add Edges to Make Degrees of All Nodes Even"
slug: "add-edges-to-make-degrees-of-all-nodes-even"
difficulty: "Hard"
tags: ["Hash Table", "Graph Theory"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830337105"
---

## Problem

There is an **undirected** graph consisting of `n` nodes numbered from `1` to `n`. You are given the integer `n` and a **2D** array `edges` where `edges[i] = [ai, bi]` indicates that there is an edge between nodes `ai` and `bi`. The graph can be disconnected.

You can add **at most** two additional edges (possibly none) to this graph so that there are no repeated edges and no self-loops.

Return `true` _if it is possible to make the degree of each node in the graph even, otherwise return_`false` _._

The degree of a node is the number of edges connected to it.

 

**Example 1:**
    
    
    **Input:** n = 5, edges = [[1,2],[2,3],[3,4],[4,2],[1,4],[2,5]]
    **Output:** true
    **Explanation:** The above diagram shows a valid way of adding an edge.
    Every node in the resulting graph is connected to an even number of edges.
    

**Example 2:**
    
    
    **Input:** n = 4, edges = [[1,2],[3,4]]
    **Output:** true
    **Explanation:** The above diagram shows a valid way of adding two edges.

**Example 3:**
    
    
    **Input:** n = 4, edges = [[1,2],[1,3],[1,4]]
    **Output:** false
    **Explanation:** It is not possible to obtain a valid graph with adding at most 2 edges.

 

**Constraints:**

  * `3 <= n <= 105`
  * `2 <= edges.length <= 105`
  * `edges[i].length == 2`
  * `1 <= ai, bi <= n`
  * `ai != bi`
  * There are no repeated edges.

## Solution

```python
class Solution:
    def isPossible(self, n: int, edges: List[List[int]]) -> bool:
        from collections import defaultdict
        deg = [0] * (n + 1)
        adj = [set() for _ in range(n + 1)]
        for u, v in edges:
            deg[u] += 1
            deg[v] += 1
            adj[u].add(v)
            adj[v].add(u)
        odds = [i for i in range(1, n + 1) if deg[i] % 2]
        if len(odds) == 0: return True
        if len(odds) == 2:
            a, b = odds
            if b not in adj[a]:
                return True
            for i in range(1, n+1):
                if i != a and i != b and (i not in adj[a]) and (i not in adj[b]):
                    return True
            return False
        if len(odds) == 4:
            a, b, c, d = odds
            pairs = [(a, b, c, d), (a, c, b, d), (a, d, b, c)]
            for x, y, p, q in pairs:
                if (y not in adj[x]) and (q not in adj[p]):
                    return True
            return False
        return False
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
