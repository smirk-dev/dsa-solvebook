---
id: "2914"
title: "Find the Safest Path in a Grid"
slug: "find-the-safest-path-in-a-grid"
difficulty: "Medium"
tags: ["Array", "Binary Search", "Breadth-First Search", "Union-Find", "Heap (Priority Queue)", "Matrix"]
language: "java"
date_solved: "2026-07-01"
status: "solved"
submission_id: "2051944523"
---

## Problem

You are given a **0-indexed** 2D matrix `grid` of size `n x n`, where `(r, c)` represents:

  * A cell containing a thief if `grid[r][c] = 1`
  * An empty cell if `grid[r][c] = 0`



You are initially positioned at cell `(0, 0)`. In one move, you can move to any adjacent cell in the grid, including cells containing thieves.

The **safeness factor** of a path on the grid is defined as the **minimum** manhattan distance from any cell in the path to any thief in the grid.

Return _the**maximum safeness factor** of all paths leading to cell _`(n - 1, n - 1)`_._

An **adjacent** cell of cell `(r, c)`, is one of the cells `(r, c + 1)`, `(r, c - 1)`, `(r + 1, c)` and `(r - 1, c)` if it exists.

The **Manhattan distance** between two cells `(a, b)` and `(x, y)` is equal to `|a - x| + |b - y|`, where `|val|` denotes the absolute value of val.

 

**Example 1:**
    
    
    **Input:** grid = [[1,0,0],[0,0,0],[0,0,1]]
    **Output:** 0
    **Explanation:** All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).
    

**Example 2:**
    
    
    **Input:** grid = [[0,0,1],[0,0,0],[0,0,0]]
    **Output:** 2
    **Explanation:** The path depicted in the picture above has a safeness factor of 2 since:
    - The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
    It can be shown that there are no other paths with a higher safeness factor.
    

**Example 3:**
    
    
    **Input:** grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
    **Output:** 2
    **Explanation:** The path depicted in the picture above has a safeness factor of 2 since:
    - The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
    - The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
    It can be shown that there are no other paths with a higher safeness factor.
    

 

**Constraints:**

  * `1 <= grid.length == n <= 400`
  * `grid[i].length == n`
  * `grid[i][j]` is either `0` or `1`.
  * There is at least one thief in the `grid`.

## Solution

```java
class Solution {
    private final int[] row = {0, 0, -1, 1};
    private final int[] col = {-1, 1, 0, 0};

    private void bfs(int[][] grid, int[][] score, int n) {
        Queue<int[]> queue = new LinkedList<>();

        // Finding all thieves
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    score[i][j] = 0;
                    queue.offer(new int[]{i, j});
                }
            }
        }

        // Multi-source BFS
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int x = curr[0];
            int y = curr[1];
            int s = score[x][y];

            for (int k = 0; k < 4; k++) {
                int newX = x + row[k];
                int newY = y + col[k];

                if (newX >= 0 && newX < n && newY >= 0 && newY < n
                        && score[newX][newY] > s + 1) {

                    score[newX][newY] = s + 1;
                    queue.offer(new int[]{newX, newY});
                }
            }
        }
    }

    public int maximumSafenessFactor(List<List<Integer>> grid) {
        int n = grid.size();

        if (grid.get(0).get(0) == 1 || grid.get(n - 1).get(n - 1) == 1)
            return 0;

        int[][] score = new int[n][n];
        for (int[] arr : score)
            Arrays.fill(arr, Integer.MAX_VALUE);

        int[][] mat = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                mat[i][j] = grid.get(i).get(j);

        bfs(mat, score, n);

        boolean[][] vis = new boolean[n][n];

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        pq.offer(new int[]{score[0][0], 0, 0});

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();

            int safe = curr[0];
            int x = curr[1];
            int y = curr[2];

            if (x == n - 1 && y == n - 1)
                return safe;

            if (vis[x][y])
                continue;

            vis[x][y] = true;

            for (int k = 0; k < 4; k++) {
                int newX = x + row[k];
                int newY = y + col[k];

                if (newX >= 0 && newX < n && newY >= 0 && newY < n
                        && !vis[newX][newY]) {

                    int newSafe = Math.min(safe, score[newX][newY]);
                    pq.offer(new int[]{newSafe, newX, newY});
                }
            }
        }

        return -1;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
