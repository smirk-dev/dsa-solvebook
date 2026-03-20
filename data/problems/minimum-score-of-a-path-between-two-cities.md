---
id: "2582"
title: "Minimum Score of a Path Between Two Cities"
slug: "minimum-score-of-a-path-between-two-cities"
difficulty: "Medium"
tags: ["Depth-First Search", "Breadth-First Search", "Union-Find", "Graph Theory"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830338186"
---

## Problem

You are given a positive integer `n` representing `n` cities numbered from `1` to `n`. You are also given a **2D** array `roads` where `roads[i] = [ai, bi, distancei]` indicates that there is a **bidirectional** road between cities `ai` and `bi` with a distance equal to `distancei`. The cities graph is not necessarily connected.

The **score** of a path between two cities is defined as the **minimum** distance of a road in this path.

Return _the**minimum** possible score of a path between cities _`1` _and_`n`.

**Note** :

  * A path is a sequence of roads between two cities.
  * It is allowed for a path to contain the same road **multiple** times, and you can visit cities `1` and `n` multiple times along the path.
  * The test cases are generated such that there is **at least** one path between `1` and `n`.



 

**Example 1:**
    
    
    **Input:** n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
    **Output:** 5
    **Explanation:** The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
    It can be shown that no other path has less score.
    

**Example 2:**
    
    
    **Input:** n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
    **Output:** 2
    **Explanation:** The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 1 -> 3 -> 4. The score of this path is min(2,2,4,7) = 2.
    

 

**Constraints:**

  * `2 <= n <= 105`
  * `1 <= roads.length <= 105`
  * `roads[i].length == 3`
  * `1 <= ai, bi <= n`
  * `ai != bi`
  * `1 <= distancei <= 104`
  * There are no repeated edges.
  * There is at least one path between `1` and `n`.

## Solution

```python
class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        from collections import defaultdict, deque
        graph = defaultdict(list)
        for a, b, dist in roads:
            graph[a].append((b, dist))
            graph[b].append((a, dist))
        visited = set()
        queue = deque([1])
        answer = float('inf')
        while queue:
            node = queue.popleft()
            if node in visited:
                continue
            visited.add(node)
            for nei, cost in graph[node]:
                answer = min(answer, cost)
                if nei not in visited:
                    queue.append(nei)
        return answer
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
