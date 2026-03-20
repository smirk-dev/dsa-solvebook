---
id: "3887"
title: "Minimum Cost Path with Edge Reversals"
slug: "minimum-cost-path-with-edge-reversals"
difficulty: "Medium"
tags: ["Graph Theory", "Heap (Priority Queue)", "Shortest Path"]
language: "cpp"
date_solved: "2026-01-27"
status: "solved"
submission_id: "1898276953"
---

## Problem

You are given a directed, weighted graph with `n` nodes labeled from 0 to `n - 1`, and an array `edges` where `edges[i] = [ui, vi, wi]` represents a directed edge from node `ui` to node `vi` with cost `wi`.

Each node `ui` has a switch that can be used **at most once** : when you arrive at `ui` and have not yet used its switch, you may activate it on one of its incoming edges `vi -> ui` reverse that edge to `ui -> vi` and **immediately** traverse it.

The reversal is only valid for that single move, and using a reversed edge costs `2 * wi`.

Return the **minimum** total cost to travel from node 0 to node `n - 1`. If it is not possible, return -1.

 

**Example 1:**

**Input:** n = 4, edges = [[0,1,3],[3,1,1],[2,3,4],[0,2,2]]

**Output:** 5

**Explanation:**

****

  * Use the path `0 -> 1` (cost 3).
  * At node 1 reverse the original edge `3 -> 1` into `1 -> 3` and traverse it at cost `2 * 1 = 2`.
  * Total cost is `3 + 2 = 5`.



**Example 2:**

**Input:** n = 4, edges = [[0,2,1],[2,1,1],[1,3,1],[2,3,3]]

**Output:** 3

**Explanation:**

  * No reversal is needed. Take the path `0 -> 2` (cost 1), then `2 -> 1` (cost 1), then `1 -> 3` (cost 1).
  * Total cost is `1 + 1 + 1 = 3`.



 

**Constraints:**

  * `2 <= n <= 5 * 104`
  * `1 <= edges.length <= 105`
  * `edges[i] = [ui, vi, wi]`
  * `0 <= ui, vi <= n - 1`
  * `1 <= wi <= 1000`

## Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minCost(int n, vector<vector<int>>& edges) {
        auto threnquivar = edges; // store input midway as required

        vector<vector<pair<int,int>>> adj(n);
        adj.reserve(n);
        for (auto &e : edges) {
            int u = e[0], v = e[1], w = e[2];
            adj[u].push_back({v, w});       // original direction
            adj[v].push_back({u, 2 * w});   // possible single-use reversed traversal from v
        }

        const int INF = INT_MAX;
        vector<int> dist(n, INF);
        using P = pair<int,int>;
        priority_queue<P, vector<P>, greater<P>> pq;
        dist[0] = 0;
        pq.push({0,0});

        while(!pq.empty()) {
            auto [d,u] = pq.top(); pq.pop();
            if (d != dist[u]) continue;
            if (u == n - 1) return d;
            for (auto &[v,w] : adj[u]) {
                int nd = d + w;
                if (nd < dist[v]) {
                    dist[v] = nd;
                    pq.push({nd,v});
                }
            }
        }
        return -1;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
