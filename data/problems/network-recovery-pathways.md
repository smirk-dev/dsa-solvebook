---
id: "3919"
title: "Network Recovery Pathways"
slug: "network-recovery-pathways"
difficulty: "Hard"
tags: ["Array", "Binary Search", "Dynamic Programming", "Graph Theory", "Topological Sort", "Heap (Priority Queue)", "Shortest Path"]
language: "java"
date_solved: "2026-07-03"
status: "solved"
submission_id: "2054195579"
---

## Problem

You are given a directed acyclic graph of `n` nodes numbered from 0 to `n − 1`. This is represented by a 2D array `edges` of length `m`, where `edges[i] = [ui, vi, costi]` indicates a one‑way communication from node `ui` to node `vi` with a recovery cost of `costi`.

Some nodes may be offline. You are given a boolean array `online` where `online[i] = true` means node `i` is online. Nodes 0 and `n − 1` are always online.

A path from 0 to `n − 1` is **valid** if:

  * All intermediate nodes on the path are online.
  * The total recovery cost of all edges on the path does not exceed `k`.



For each valid path, define its **score** as the minimum edge‑cost along that path.

Return the **maximum** path score (i.e., the largest **minimum** -edge cost) among all valid paths. If no valid path exists, return -1.

 

**Example 1:**

**Input:** edges = [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], online = [true,true,true,true], k = 10

**Output:** 3

**Explanation:**

  * The graph has two possible routes from node 0 to node 3:

    1. Path `0 -> 1 -> 3`

       * Total cost = `5 + 10 = 15`, which exceeds k (`15 > 10`), so this path is invalid.

    2. Path `0 -> 2 -> 3`

       * Total cost = `3 + 4 = 7 <= k`, so this path is valid.

       * The minimum edge‐cost along this path is `min(3, 4) = 3`.

  * There are no other valid paths. Hence, the maximum among all valid path‐scores is 3.




**Example 2:**

**Input:** edges = [[0,1,7],[1,4,5],[0,2,6],[2,3,6],[3,4,2],[2,4,6]], online = [true,true,true,false,true], k = 12

**Output:** 6

**Explanation:**

  * Node 3 is offline, so any path passing through 3 is invalid.

  * Consider the remaining routes from 0 to 4:

    1. Path `0 -> 1 -> 4`

       * Total cost = `7 + 5 = 12 <= k`, so this path is valid.

       * The minimum edge‐cost along this path is `min(7, 5) = 5`.

    2. Path `0 -> 2 -> 3 -> 4`

       * Node 3 is offline, so this path is invalid regardless of cost.

    3. Path `0 -> 2 -> 4`

       * Total cost = `6 + 6 = 12 <= k`, so this path is valid.

       * The minimum edge‐cost along this path is `min(6, 6) = 6`.

  * Among the two valid paths, their scores are 5 and 6. Therefore, the answer is 6.




 

**Constraints:**

  * `n == online.length`
  * `2 <= n <= 5 * 104`
  * `0 <= m == edges.length <= ``min(105, n * (n - 1) / 2)`
  * `edges[i] = [ui, vi, costi]`
  * `0 <= ui, vi < n`
  * `ui != vi`
  * `0 <= costi <= 109`
  * `0 <= k <= 5 * 1013`
  * `online[i]` is either `true` or `false`, and both `online[0]` and `online[n − 1]` are `true`.
  * The given graph is a directed acyclic graph.

## Solution

```java
class Solution {
    private boolean check(long mid, List<int[]>[] adj, List<Integer> topo,
                          boolean[] online, long k, int n) {

        long INF = (long) 1e18;
        long[] dist = new long[n];
        Arrays.fill(dist, INF);
        dist[0] = 0;

        for (int u : topo) {
            if (dist[u] == INF) continue;

            if (u != 0 && u != n - 1 && !online[u]) continue;

            for (int[] edge : adj[u]) {
                int v = edge[0];
                int w = edge[1];

                if (w < mid) continue;
                if (v != n - 1 && !online[v]) continue;

                dist[v] = Math.min(dist[v], dist[u] + w);
            }
        }

        return dist[n - 1] <= k;
    }

    public int findMaxPathScore(int[][] edges, boolean[] online, long k) {

        int n = online.length;

        List<int[]>[] adj = new ArrayList[n];
        for (int i = 0; i < n; i++)
            adj[i] = new ArrayList<>();

        int[] indegree = new int[n];

        int maxEdge = 0;

        for (int[] e : edges) {
            int u = e[0];
            int v = e[1];
            int w = e[2];

            adj[u].add(new int[]{v, w});
            indegree[v]++;
            maxEdge = Math.max(maxEdge, w);
        }

        Queue<Integer> q = new LinkedList<>();

        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0)
                q.offer(i);
        }

        List<Integer> topo = new ArrayList<>();

        while (!q.isEmpty()) {
            int u = q.poll();
            topo.add(u);

            for (int[] edge : adj[u]) {
                int v = edge[0];
                indegree[v]--;

                if (indegree[v] == 0)
                    q.offer(v);
            }
        }

        long low = 0, high = maxEdge;
        int ans = -1;

        while (low <= high) {
            long mid = low + (high - low) / 2;

            if (check(mid, adj, topo, online, k, n)) {
                ans = (int) mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
