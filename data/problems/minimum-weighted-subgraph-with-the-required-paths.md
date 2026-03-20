---
id: "2321"
title: "Minimum Weighted Subgraph With the Required Paths"
slug: "minimum-weighted-subgraph-with-the-required-paths"
difficulty: "Hard"
tags: ["Graph Theory", "Heap (Priority Queue)", "Shortest Path"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830340813"
---

## Problem

You are given an integer `n` denoting the number of nodes of a **weighted directed** graph. The nodes are numbered from `0` to `n - 1`.

You are also given a 2D integer array `edges` where `edges[i] = [fromi, toi, weighti]` denotes that there exists a **directed** edge from `fromi` to `toi` with weight `weighti`.

Lastly, you are given three **distinct** integers `src1`, `src2`, and `dest` denoting three distinct nodes of the graph.

Return _the**minimum weight** of a subgraph of the graph such that it is **possible** to reach_ `dest` _from both_ `src1` _and_ `src2` _via a set of edges of this subgraph_. In case such a subgraph does not exist, return `-1`.

A **subgraph** is a graph whose vertices and edges are subsets of the original graph. The **weight** of a subgraph is the sum of weights of its constituent edges.

 

**Example 1:**
    
    
    **Input:** n = 6, edges = [[0,2,2],[0,5,6],[1,0,3],[1,4,5],[2,1,1],[2,3,3],[2,3,4],[3,4,2],[4,5,1]], src1 = 0, src2 = 1, dest = 5
    **Output:** 9
    **Explanation:**
    The above figure represents the input graph.
    The blue edges represent one of the subgraphs that yield the optimal answer.
    Note that the subgraph [[1,0,3],[0,5,6]] also yields the optimal answer. It is not possible to get a subgraph with less weight satisfying all the constraints.
    

**Example 2:**
    
    
    **Input:** n = 3, edges = [[0,1,1],[2,1,1]], src1 = 0, src2 = 1, dest = 2
    **Output:** -1
    **Explanation:**
    The above figure represents the input graph.
    It can be seen that there does not exist any path from node 1 to node 2, hence there are no subgraphs satisfying all the constraints.
    

 

**Constraints:**

  * `3 <= n <= 105`
  * `0 <= edges.length <= 105`
  * `edges[i].length == 3`
  * `0 <= fromi, toi, src1, src2, dest <= n - 1`
  * `fromi != toi`
  * `src1`, `src2`, and `dest` are pairwise distinct.
  * `1 <= weight[i] <= 105`

## Solution

```python
import heapq
from collections import defaultdict

class Solution:
    def minimumWeight(self, n: int, edges: List[List[int]], src1: int, src2: int, dest: int) -> int:
        def dijkstra(start, graph):
            dist = [float('inf')] * n
            dist[start] = 0
            pq = [(0, start)]
            while pq:
                d, u = heapq.heappop(pq)
                if d > dist[u]:
                    continue
                for v, w in graph[u]:
                    if dist[v] > d + w:
                        dist[v] = d + w
                        heapq.heappush(pq, (dist[v], v))
            return dist

        graph = defaultdict(list)
        rev_graph = defaultdict(list)
        for u, v, w in edges:
            graph[u].append((v, w))
            rev_graph[v].append((u, w))

        dist1 = dijkstra(src1, graph)
        dist2 = dijkstra(src2, graph)
        distd = dijkstra(dest, rev_graph)
        min_total = float('inf')
        for mid in range(n):
            total = dist1[mid] + dist2[mid] + distd[mid]
            if total < min_total:
                min_total = total
        return min_total if min_total != float('inf') else -1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
