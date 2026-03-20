---
id: "207"
title: "Course Schedule"
slug: "course-schedule"
difficulty: "Medium"
tags: ["Depth-First Search", "Breadth-First Search", "Graph Theory", "Topological Sort"]
language: "java"
date_solved: "2026-03-09"
status: "solved"
submission_id: "1942557846"
---

## Problem

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

  * For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.



Return `true` if you can finish all courses. Otherwise, return `false`.

 

**Example 1:**
    
    
    **Input:** numCourses = 2, prerequisites = [[1,0]]
    **Output:** true
    **Explanation:** There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0. So it is possible.
    

**Example 2:**
    
    
    **Input:** numCourses = 2, prerequisites = [[1,0],[0,1]]
    **Output:** false
    **Explanation:** There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
    

 

**Constraints:**

  * `1 <= numCourses <= 2000`
  * `0 <= prerequisites.length <= 5000`
  * `prerequisites[i].length == 2`
  * `0 <= ai, bi < numCourses`
  * All the pairs prerequisites[i] are **unique**.

## Solution

```java
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());

        for (int[] pre : prerequisites)
            adj.get(pre[1]).add(pre[0]);

        boolean[] vis = new boolean[numCourses];
        boolean[] path = new boolean[numCourses];

        for (int i = 0; i < numCourses; i++)
            if (!vis[i] && dfs(i, adj, vis, path)) return false;

        return true;
    }

    private boolean dfs(int node, List<List<Integer>> adj, boolean[] vis, boolean[] path) {
        vis[node] = path[node] = true;

        for (int next : adj.get(node))
            if (!vis[next] && dfs(next, adj, vis, path)) return true;
            else if (path[next]) return true;
            
        path[node] = false;
        return false;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
