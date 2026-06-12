---
id: "3842"
title: "Number of Ways to Assign Edge Weights II"
slug: "number-of-ways-to-assign-edge-weights-ii"
difficulty: "Hard"
tags: ["Array", "Math", "Dynamic Programming", "Bit Manipulation", "Tree", "Depth-First Search"]
language: "java"
date_solved: "2026-06-12"
status: "solved"
submission_id: "2030357057"
---

## Problem

There is an undirected tree with `n` nodes labeled from 1 to `n`, rooted at node 1. The tree is represented by a 2D integer array `edges` of length `n - 1`, where `edges[i] = [ui, vi]` indicates that there is an edge between nodes `ui` and `vi`.

Initially, all edges have a weight of 0. You must assign each edge a weight of either **1** or **2**.

The **cost** of a path between any two nodes `u` and `v` is the total weight of all edges in the path connecting them.

You are given a 2D integer array `queries`. For each `queries[i] = [ui, vi]`, determine the number of ways to assign weights to edges **in the path** such that the cost of the path between `ui` and `vi` is **odd**.

Return an array `answer`, where `answer[i]` is the number of valid assignments for `queries[i]`.

Since the answer may be large, apply **modulo** `109 + 7` to each `answer[i]`.

**Note:** For each query, disregard all edges **not** in the path between node `ui` and `vi`.

 

**Example 1:**

**Input:** edges = [[1,2]], queries = [[1,1],[1,2]]

**Output:** [0,1]

**Explanation:**

  * Query `[1,1]`: The path from Node 1 to itself consists of no edges, so the cost is 0. Thus, the number of valid assignments is 0.
  * Query `[1,2]`: The path from Node 1 to Node 2 consists of one edge (`1 -> 2`). Assigning weight 1 makes the cost odd, while 2 makes it even. Thus, the number of valid assignments is 1.



**Example 2:**

**Input:** edges = [[1,2],[1,3],[3,4],[3,5]], queries = [[1,4],[3,4],[2,5]]

**Output:** [2,1,4]

**Explanation:**

  * Query `[1,4]`: The path from Node 1 to Node 4 consists of two edges (`1 -> 3` and `3 -> 4`). Assigning weights (1,2) or (2,1) results in an odd cost. Thus, the number of valid assignments is 2.
  * Query `[3,4]`: The path from Node 3 to Node 4 consists of one edge (`3 -> 4`). Assigning weight 1 makes the cost odd, while 2 makes it even. Thus, the number of valid assignments is 1.
  * Query `[2,5]`: The path from Node 2 to Node 5 consists of three edges (`2 -> 1, 1 -> 3`, and `3 -> 5`). Assigning (1,2,2), (2,1,2), (2,2,1), or (1,1,1) makes the cost odd. Thus, the number of valid assignments is 4.



 

**Constraints:**

  * `2 <= n <= 105`
  * `edges.length == n - 1`
  * `edges[i] == [ui, vi]`
  * `1 <= queries.length <= 105`
  * `queries[i] == [ui, vi]`
  * `1 <= ui, vi <= n`
  * `edges` represents a valid tree.

## Solution

```java
class Solution {
    static int[] binaryExponent;
    static final long mod = 1000000007l;

    static {
        binaryExponent = new int[100001];
        long pro = 1l;
        for (int i = 1; i < binaryExponent.length; i++) {
            binaryExponent[i] = (int) (pro);
            pro = (pro * 2l) % mod;
        }
    }
    
    int[][] ancestors;
    int[] ans, parent;
    int[] depth;
    boolean[] visited;

    private void buildAncestors(int[] parent, int numNodes) {
        ancestors = new int[(int) (Math.log(numNodes) / Math.log(2)) + 1][numNodes + 1];
        int n = ancestors.length, m = ancestors[0].length;
        for (int i = 0; i < m; i++) {
            ancestors[0][i] = parent[i];
        }

        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                ancestors[i][j] = ancestors[i - 1][ancestors[i - 1][j]];
            }
        }
    }

    public int[] assignEdgeWeights(int[][] edges, int[][] queries) {
        int n = edges.length, q = queries.length;
        ans = new int[q];
        parent = new int[n + 2];
        visited = new boolean[n + 2];
        depth = new int[n + 2];

        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i <= n + 1; i++) {
            adj.add(new ArrayList<>());
        }
        for (int i = 0; i < edges.length; i++) {
            adj.get(edges[i][0]).add(edges[i][1]);
            adj.get(edges[i][1]).add(edges[i][0]);
        }

        parent[1] = 1;

        dfs(1, adj, 0);
        buildAncestors(parent, n + 1);
        
        for (int i = 0; i < q; i++) {
            ans[i] = binaryExponent[getPathCount(queries[i][0], queries[i][1])];
        }
        return ans;
    }

    private int getPathCount(int u, int v) {
        int depthU = depth[u], depthV = depth[v], lca = -1;

        if (depthU > depthV) lca = LCA(u, v);
        else lca = LCA(v, u);
    
        return depth[u] + depth[v] - 2 * depth[lca];
    }

    private int LCA(int u, int v) {
        int depthU = depth[u];
        int depthV = depth[v];

        int diff = depthU - depthV;
        int mask = 1, idx = 0;

        while (mask <= diff) {
            if ((mask & diff) > 0) {
                u = ancestors[idx][u];
            }

            mask <<= 1;
            idx++;
        }

        if (u == v) return u;

        int maxJumps = ancestors.length - 1;

        while (maxJumps >= 0) {
            if (ancestors[maxJumps][u] != ancestors[maxJumps][v]) {
                u = ancestors[maxJumps][u];
                v = ancestors[maxJumps][v];
            }
            maxJumps--;
        }

        int lca = ancestors[0][u];
        return lca;
    }

    private void dfs(int node, List<List<Integer>> adj, int depthValue) {
        visited[node] = true;
        depth[node] = depthValue;
        List<Integer> children = adj.get(node);

        for (int v : children) {
            if (visited[v]) continue;
            parent[v] = node;
            dfs(v, adj, depthValue + 1);
        }
    }

}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
