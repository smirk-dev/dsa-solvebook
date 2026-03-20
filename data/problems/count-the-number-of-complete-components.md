---
id: "2793"
title: "Count the Number of Complete Components"
slug: "count-the-number-of-complete-components"
difficulty: "Medium"
tags: ["Depth-First Search", "Breadth-First Search", "Union-Find", "Graph Theory"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830338709"
---

## Problem

You are given an integer `n`. There is an **undirected** graph with `n` vertices, numbered from `0` to `n - 1`. You are given a 2D integer array `edges` where `edges[i] = [ai, bi]` denotes that there exists an **undirected** edge connecting vertices `ai` and `bi`.

Return _the number of**complete connected components** of the graph_.

A **connected component** is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.

A connected component is said to be **complete** if there exists an edge between every pair of its vertices.

 

**Example 1:**

****
    
    
    **Input:** n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
    **Output:** 3
    **Explanation:** From the picture above, one can see that all of the components of this graph are complete.
    

**Example 2:**

****
    
    
    **Input:** n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]
    **Output:** 1
    **Explanation:** The component containing vertices 0, 1, and 2 is complete since there is an edge between every pair of two vertices. On the other hand, the component containing vertices 3, 4, and 5 is not complete since there is no edge between vertices 4 and 5. Thus, the number of complete components in this graph is 1.
    

 

**Constraints:**

  * `1 <= n <= 50`
  * `0 <= edges.length <= n * (n - 1) / 2`
  * `edges[i].length == 2`
  * `0 <= ai, bi <= n - 1`
  * `ai != bi`
  * There are no repeated edges.

## Solution

```python
class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
        visited = set()
        res = 0
        for i in range(n):
            if i not in visited:
                queue = deque([i])
                comp = []
                while queue:
                    node = queue.popleft()
                    if node in visited:
                        continue
                    visited.add(node)
                    comp.append(node)
                    for nei in graph[node]:
                        if nei not in visited:
                            queue.append(nei)
                # Check completeness
                size = len(comp)
                edge_count = sum(len(graph[node]) for node in comp) // 2
                if edge_count == size * (size - 1) // 2:
                    res += 1
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
