---
id: "210"
title: "Course Schedule II"
slug: "course-schedule-ii"
difficulty: "Medium"
tags: ["Depth-First Search", "Breadth-First Search", "Graph Theory", "Topological Sort"]
language: "python3"
date_solved: "2025-11-10"
status: "solved"
submission_id: "1826052243"
---

## Problem

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

  * For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.



Return _the ordering of courses you should take to finish all courses_. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.

 

**Example 1:**
    
    
    **Input:** numCourses = 2, prerequisites = [[1,0]]
    **Output:** [0,1]
    **Explanation:** There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
    

**Example 2:**
    
    
    **Input:** numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    **Output:** [0,2,1,3]
    **Explanation:** There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
    So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
    

**Example 3:**
    
    
    **Input:** numCourses = 1, prerequisites = []
    **Output:** [0]
    

 

**Constraints:**

  * `1 <= numCourses <= 2000`
  * `0 <= prerequisites.length <= numCourses * (numCourses - 1)`
  * `prerequisites[i].length == 2`
  * `0 <= ai, bi < numCourses`
  * `ai != bi`
  * All the pairs `[ai, bi]` are **distinct**.

## Solution

```python
from typing import List

class Solution:
    def dfs(self, i: int, adj: List[List[int]], hash: set, visited: List[bool], stack: List[int]) -> bool:
        hash.add(i)
        visited[i] = True

        for neighbor in adj[i]:
            if not visited[neighbor]:
                if not self.dfs(neighbor, adj, hash, visited, stack):
                    return False
            elif neighbor in hash:
                return False

        hash.remove(i)
        stack.append(i)
        return True

    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = [[] for _ in range(numCourses)]
        for dest, src in prerequisites:
            adj[src].append(dest)

        visited = [False] * numCourses
        stack = []

        for i in range(numCourses):
            if not visited[i]:
                hash = set()
                if not self.dfs(i, adj, hash, visited, stack):
                    return []

        return stack[::-1]
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
