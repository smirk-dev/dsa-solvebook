---
id: "3889"
title: "Minimum Cost Path with Teleportations"
slug: "minimum-cost-path-with-teleportations"
difficulty: "Hard"
tags: ["Array", "Dynamic Programming", "Matrix"]
language: "cpp"
date_solved: "2026-01-28"
status: "solved"
submission_id: "1899362046"
---

## Problem

You are given a `m x n` 2D integer array `grid` and an integer `k`. You start at the top-left cell `(0, 0)` and your goal is to reach the bottom‐right cell `(m - 1, n - 1)`.

There are two types of moves available:

  * **Normal move** : You can move right or down from your current cell `(i, j)`, i.e. you can move to `(i, j + 1)` (right) or `(i + 1, j)` (down). The cost is the value of the destination cell.

  * **Teleportation** : You can teleport from any cell `(i, j)`, to any cell `(x, y)` such that `grid[x][y] <= grid[i][j]`; the cost of this move is 0. You may teleport at most `k` times.




Return the **minimum** total cost to reach cell `(m - 1, n - 1)` from `(0, 0)`.

 

**Example 1:**

**Input:** grid = [[1,3,3],[2,5,4],[4,3,5]], k = 2

**Output:** 7

**Explanation:**

Initially we are at (0, 0) and cost is 0.

Current Position | Move | New Position | Total Cost  
---|---|---|---  
`(0, 0)` | Move Down | `(1, 0)` | `0 + 2 = 2`  
`(1, 0)` | Move Right | `(1, 1)` | `2 + 5 = 7`  
`(1, 1)` | Teleport to `(2, 2)` | `(2, 2)` | `7 + 0 = 7`  
  
The minimum cost to reach bottom-right cell is 7.

**Example 2:**

**Input:** grid = [[1,2],[2,3],[3,4]], k = 1

**Output:** 9

**Explanation:**

Initially we are at (0, 0) and cost is 0.

Current Position | Move | New Position | Total Cost  
---|---|---|---  
`(0, 0)` | Move Down | `(1, 0)` | `0 + 2 = 2`  
`(1, 0)` | Move Right | `(1, 1)` | `2 + 3 = 5`  
`(1, 1)` | Move Down | `(2, 1)` | `5 + 4 = 9`  
  
The minimum cost to reach bottom-right cell is 9.

 

**Constraints:**

  * `2 <= m, n <= 80`
  * `m == grid.length`
  * `n == grid[i].length`
  * `0 <= grid[i][j] <= 104`
  * `0 <= k <= 10`

## Solution

```cpp
class Solution {
public:
    int minCost(vector<vector<int>>& grid, int k) {
        auto lurnavrethy = grid; // store input midway as required
        
        int m = grid.size(), n = grid[0].size();
        const int INF = 1e9;
        
        // Only use 2 layers to save memory: current and next
        vector<vector<int>> curr(m, vector<int>(n, INF));
        vector<vector<int>> next(m, vector<int>(n, INF));
        
        curr[0][0] = 0;
        
        for (int teleports = 0; teleports <= k; teleports++) {
            // Single forward pass for normal moves
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (curr[i][j] == INF) continue;
                    if (i + 1 < m) {
                        curr[i+1][j] = min(curr[i+1][j], curr[i][j] + grid[i+1][j]);
                    }
                    if (j + 1 < n) {
                        curr[i][j+1] = min(curr[i][j+1], curr[i][j] + grid[i][j+1]);
                    }
                }
            }
            
            if (teleports < k) {
                // Initialize next layer
                for (int i = 0; i < m; i++) {
                    fill(next[i].begin(), next[i].end(), INF);
                }
                
                // Efficient teleportation using value-based grouping
                map<int, int> valueToMinCost;
                for (int i = 0; i < m; i++) {
                    for (int j = 0; j < n; j++) {
                        if (curr[i][j] < INF) {
                            int val = grid[i][j];
                            if (valueToMinCost.find(val) == valueToMinCost.end()) {
                                valueToMinCost[val] = curr[i][j];
                            } else {
                                valueToMinCost[val] = min(valueToMinCost[val], curr[i][j]);
                            }
                        }
                    }
                }
                
                // Build suffix minimums
                vector<pair<int, int>> sortedValues;
                for (auto& p : valueToMinCost) {
                    sortedValues.push_back({p.first, p.second});
                }
                
                int runningMin = INF;
                for (int idx = sortedValues.size() - 1; idx >= 0; idx--) {
                    runningMin = min(runningMin, sortedValues[idx].second);
                    sortedValues[idx].second = runningMin;
                }
                
                // Apply teleportations
                for (int i = 0; i < m; i++) {
                    for (int j = 0; j < n; j++) {
                        int cellValue = grid[i][j];
                        
                        // Binary search for the minimum cost from sources with value >= cellValue
                        int left = 0, right = sortedValues.size() - 1;
                        int bestCost = INF;
                        while (left <= right) {
                            int mid = (left + right) / 2;
                            if (sortedValues[mid].first >= cellValue) {
                                bestCost = sortedValues[mid].second;
                                right = mid - 1;
                            } else {
                                left = mid + 1;
                            }
                        }
                        
                        if (bestCost < INF) {
                            next[i][j] = min(next[i][j], bestCost);
                        }
                    }
                }
                
                curr = next;
            }
        }
        
        return curr[m-1][n-1] == INF ? -1 : curr[m-1][n-1];
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
