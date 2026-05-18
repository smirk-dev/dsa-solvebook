---
id: "1447"
title: "Jump Game IV"
slug: "jump-game-iv"
difficulty: "Hard"
tags: ["Array", "Hash Table", "Breadth-First Search"]
language: "java"
date_solved: "2026-05-18"
status: "solved"
submission_id: "2006145717"
---

## Problem

Given an array of integers `arr`, you are initially positioned at the first index of the array.

In one step you can jump from index `i` to index:

  * `i + 1` where: `i + 1 < arr.length`.
  * `i - 1` where: `i - 1 >= 0`.
  * `j` where: `arr[i] == arr[j]` and `i != j`.



Return _the minimum number of steps_ to reach the **last index** of the array.

Notice that you can not jump outside of the array at any time.

 

**Example 1:**
    
    
    **Input:** arr = [100,-23,-23,404,100,23,23,23,3,404]
    **Output:** 3
    **Explanation:** You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.
    

**Example 2:**
    
    
    **Input:** arr = [7]
    **Output:** 0
    **Explanation:** Start index is the last index. You do not need to jump.
    

**Example 3:**
    
    
    **Input:** arr = [7,6,9,6,9,6,9,7]
    **Output:** 1
    **Explanation:** You can jump directly from index 0 to index 7 which is last index of the array.
    

 

**Constraints:**

  * `1 <= arr.length <= 5 * 104`
  * `-108 <= arr[i] <= 108`

## Solution

```java
import java.util.*;

class Solution {
    public int minJumps(int[] arr) {
        int n = arr.length;
        if (n == 1) return 0;

        Map<Integer, List<Integer>> mp = new HashMap<>();
        for (int i = 0; i < n; i++) {
            mp.computeIfAbsent(arr[i], k -> new ArrayList<>()).add(i);
        }

        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{0, 0});

        boolean[] vis = new boolean[n];
        vis[0] = true;

        while (!q.isEmpty()) {
            int[] curr = q.poll();
            int node = curr[0];
            int dist = curr[1];

            if (node == n - 1) return dist;

            if (node - 1 >= 0 && !vis[node - 1]) {
                vis[node - 1] = true;
                q.offer(new int[]{node - 1, dist + 1});
            }

            if (node + 1 < n && !vis[node + 1]) {
                vis[node + 1] = true;
                q.offer(new int[]{node + 1, dist + 1});
            }

            for (int next : mp.get(arr[node])) {
                if (!vis[next]) {
                    vis[next] = true;
                    q.offer(new int[]{next, dist + 1});
                }
            }

            mp.get(arr[node]).clear();
        }

        return -1;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
