---
id: "1036"
title: "Rotting Oranges"
slug: "rotting-oranges"
difficulty: "Medium"
tags: ["Array", "Breadth-First Search", "Matrix"]
language: "java"
date_solved: "2026-03-09"
status: "solved"
submission_id: "1942555669"
---

## Problem

You are given an `m x n` `grid` where each cell can have one of three values:

  * `0` representing an empty cell,
  * `1` representing a fresh orange, or
  * `2` representing a rotten orange.



Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.

Return _the minimum number of minutes that must elapse until no cell has a fresh orange_. If _this is impossible, return_ `-1`.

 

**Example 1:**
    
    
    **Input:** grid = [[2,1,1],[1,1,0],[0,1,1]]
    **Output:** 4
    

**Example 2:**
    
    
    **Input:** grid = [[2,1,1],[0,1,1],[1,0,1]]
    **Output:** -1
    **Explanation:** The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
    

**Example 3:**
    
    
    **Input:** grid = [[0,2]]
    **Output:** 0
    **Explanation:** Since there are already no fresh oranges at minute 0, the answer is just 0.
    

 

**Constraints:**

  * `m == grid.length`
  * `n == grid[i].length`
  * `1 <= m, n <= 10`
  * `grid[i][j]` is `0`, `1`, or `2`.

## Solution

```java
class Solution {
    static class selva{
        int i;
        int j;
        int time;
        selva(int i, int j, int time){
            this.i=i;
            this.j=j;
            this.time=time;
        }
    }

    public int orangesRotting(int[][] grid) {

        int time=0;
        int m=grid.length;
        int n=grid[0].length;

        Queue<selva> queue=new LinkedList<>();

        // Step 1: push all rotten oranges into queue
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(grid[i][j]==2){
                    queue.add(new selva(i,j,0));
                }
            }
        }

        // directions: left, right, up, down
        int dir[][]={
            {0,-1},
            {0,1},
            {-1,0},
            {1,0}
        };

        // Step 2: BFS spreading
        while(!queue.isEmpty()){
            selva temp=queue.poll();

            for(int k=0;k<4;k++){
                int ii=temp.i+dir[k][0];
                int jj=temp.j+dir[k][1];

                if(ii>=0 && ii<m && jj>=0 && jj<n && grid[ii][jj]==1){
                    grid[ii][jj]=2;
                    queue.add(new selva(ii,jj,temp.time+1));
                    time=Math.max(time,temp.time+1);
                }
            }
        }

        // Step 3: check if any fresh orange remains
        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(grid[i][j]==1) return -1;
            }
        }

        return time;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
