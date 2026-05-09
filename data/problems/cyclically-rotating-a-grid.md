---
id: "2043"
title: "Cyclically Rotating a Grid"
slug: "cyclically-rotating-a-grid"
difficulty: "Medium"
tags: ["Array", "Matrix", "Simulation"]
language: "java"
date_solved: "2026-05-09"
status: "solved"
submission_id: "1998627933"
---

## Problem

You are given an `m x n` integer matrix `grid`​​​, where `m` and `n` are both **even** integers, and an integer `k`.

The matrix is composed of several layers, which is shown in the below image, where each color is its own layer:

A cyclic rotation of the matrix is done by cyclically rotating **each layer** in the matrix. To cyclically rotate a layer once, each element in the layer will take the place of the adjacent element in the **counter-clockwise** direction. An example rotation is shown below:

Return _the matrix after applying_`k` _cyclic rotations to it_.

 

**Example 1:**
    
    
    **Input:** grid = [[40,10],[30,20]], k = 1
    **Output:** [[10,20],[40,30]]
    **Explanation:** The figures above represent the grid at every state.
    

**Example 2:**

************
    
    
    **Input:** grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], k = 2
    **Output:** [[3,4,8,12],[2,11,10,16],[1,7,6,15],[5,9,13,14]]
    **Explanation:** The figures above represent the grid at every state.
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `2 <= m, n <= 50`
  * Both `m` and `n` are **even** integers.
  * `1 <= grid[i][j] <= 5000`
  * `1 <= k <= 109`

## Solution

```java
class Solution {
    public int[][] rotateGrid(int[][] grid, int k) {

        int m = grid.length;
        int n = grid[0].length;

        int layers = Math.min(m, n) / 2;

        for(int layer = 0; layer < layers; layer++) {

            ArrayList<Integer> vals = new ArrayList<>();

            int top = layer;
            int left = layer;

            int bottom = m - layer - 1;
            int right = n - layer - 1;

            // top row
            for(int j = left; j <= right; j++) {
                vals.add(grid[top][j]);
            }

            // right column
            for(int i = top + 1; i <= bottom - 1; i++) {
                vals.add(grid[i][right]);
            }

            // bottom row
            for(int j = right; j >= left; j--) {
                vals.add(grid[bottom][j]);
            }

            // left column
            for(int i = bottom - 1; i >= top + 1; i--) {
                vals.add(grid[i][left]);
            }

            int sz = vals.size();

            int idx = k % sz;

            // top row
            for(int j = left; j <= right; j++) {

                grid[top][j] = vals.get(idx);

                idx++;

                if(idx == sz) {
                    idx = 0;
                }
            }

            // right column
            for(int i = top + 1; i <= bottom - 1; i++) {

                grid[i][right] = vals.get(idx);

                idx++;

                if(idx == sz) {
                    idx = 0;
                }
            }

            // bottom row
            for(int j = right; j >= left; j--) {

                grid[bottom][j] = vals.get(idx);

                idx++;

                if(idx == sz) {
                    idx = 0;
                }
            }

            // left column
            for(int i = bottom - 1; i >= top + 1; i--) {

                grid[i][left] = vals.get(idx);

                idx++;

                if(idx == sz) {
                    idx = 0;
                }
            }
        }

        return grid;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
