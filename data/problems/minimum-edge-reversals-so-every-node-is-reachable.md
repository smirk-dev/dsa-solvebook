---
id: "3105"
title: "Minimum Edge Reversals So Every Node Is Reachable"
slug: "minimum-edge-reversals-so-every-node-is-reachable"
difficulty: "Hard"
tags: ["Dynamic Programming", "Depth-First Search", "Breadth-First Search", "Graph Theory"]
language: "java"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951117689"
---

## Problem

There is a **simple directed graph** with `n` nodes labeled from `0` to `n - 1`. The graph would form a **tree** if its edges were bi-directional.

You are given an integer `n` and a **2D** integer array `edges`, where `edges[i] = [ui, vi]` represents a **directed edge** going from node `ui` to node `vi`.

An **edge reversal** changes the direction of an edge, i.e., a directed edge going from node `ui` to node `vi` becomes a directed edge going from node `vi` to node `ui`.

For every node `i` in the range `[0, n - 1]`, your task is to **independently** calculate the **minimum** number of **edge reversals** required so it is possible to reach any other node starting from node `i` through a **sequence** of **directed edges**.

Return _an integer array_`answer` _, where_`answer[i]`_is the_ __ _**minimum** number of **edge reversals** required so it is possible to reach any other node starting from node _`i` _through a**sequence** of **directed edges**._

 

**Example 1:**
    
    
    **Input:** n = 4, edges = [[2,0],[2,1],[1,3]]
    **Output:** [1,1,0,2]
    **Explanation:** The image above shows the graph formed by the edges.
    For node 0: after reversing the edge [2,0], it is possible to reach any other node starting from node 0.
    So, answer[0] = 1.
    For node 1: after reversing the edge [2,1], it is possible to reach any other node starting from node 1.
    So, answer[1] = 1.
    For node 2: it is already possible to reach any other node starting from node 2.
    So, answer[2] = 0.
    For node 3: after reversing the edges [1,3] and [2,1], it is possible to reach any other node starting from node 3.
    So, answer[3] = 2.
    

**Example 2:**
    
    
    **Input:** n = 3, edges = [[1,2],[2,0]]
    **Output:** [2,0,1]
    **Explanation:** The image above shows the graph formed by the edges.
    For node 0: after reversing the edges [2,0] and [1,2], it is possible to reach any other node starting from node 0.
    So, answer[0] = 2.
    For node 1: it is already possible to reach any other node starting from node 1.
    So, answer[1] = 0.
    For node 2: after reversing the edge [1, 2], it is possible to reach any other node starting from node 2.
    So, answer[2] = 1.
    

 

**Constraints:**

  * `2 <= n <= 105`
  * `edges.length == n - 1`
  * `edges[i].length == 2`
  * `0 <= ui == edges[i][0] < n`
  * `0 <= vi == edges[i][1] < n`
  * `ui != vi`
  * The input is generated such that if the edges were bi-directional, the graph would be a tree.

## Solution

```java
class Solution {
    //A tree with n nodes has exactly n-1 edges, and there's exactly one path between any two nodes.
    
    private List<int[]>[] graph;
    private int[] result;
    
    public int[] minEdgeReversals(int n, int[][] edges) {
        // Build bidirectional graph with edge costs
        // cost = 0 for original direction, cost = 1 for reverse direction
        graph = new List[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        
        for (int[] edge : edges) {
            int u = edge[0], v = edge[1];
            graph[u].add(new int[]{v, 0}); // original edge, no cost
            graph[v].add(new int[]{u, 1}); // reverse edge, cost = 1
        }
        
        result = new int[n];
        
        // Step 1: Calculate result for node 0 using DFS
        boolean[] visited = new boolean[n];
        result[0] = dfs(0, visited);
        
        // Step 2: Re-root to calculate results for all other nodes
        Arrays.fill(visited, false);
        reroot(0, visited);
        
        return result;
    }
    
    // Calculate minimum reversals needed when starting from node 'start'
    private int dfs(int node, boolean[] visited) {
        visited[node] = true;
        int reversals = 0;
        
        for (int[] neighbor : graph[node]) {
            int nextNode = neighbor[0];
            int cost = neighbor[1];
            
            if (!visited[nextNode]) {
                reversals += cost + dfs(nextNode, visited);
            }
        }
        
        return reversals;
    }
    
    // Re-root the tree to calculate results for all nodes
    private void reroot(int node, boolean[] visited) {
        visited[node] = true;
        
        for (int[] neighbor : graph[node]) {
            int nextNode = neighbor[0];
            int cost = neighbor[1];
            
            if (!visited[nextNode]) {
                // When we move the root from 'node' to 'nextNode':
                // - If original edge was node->nextNode (cost=0), now we need nextNode->node (cost=1)
                //   result[nextNode] = result[node] + 1
                // - If original edge was nextNode->node (cost=1), now we need node->nextNode (cost=0)
                //   result[nextNode] = result[node] - 1
                // So the change in cost is: 1 - 2*cost
                result[nextNode] = result[node] + 1 - 2 * cost;
                reroot(nextNode, visited);
            }
        }
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
