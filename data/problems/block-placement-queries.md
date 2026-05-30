---
id: "3435"
title: "Block Placement Queries"
slug: "block-placement-queries"
difficulty: "Hard"
tags: ["Array", "Binary Search", "Binary Indexed Tree", "Segment Tree"]
language: "java"
date_solved: "2026-05-30"
status: "solved"
submission_id: "2016887027"
---

## Problem

There exists an infinite number line, with its origin at 0 and extending towards the **positive** x-axis.

You are given a 2D array `queries`, which contains two types of queries:

  1. For a query of type 1, `queries[i] = [1, x]`. Build an obstacle at distance `x` from the origin. It is guaranteed that there is **no** obstacle at distance `x` when the query is asked.
  2. For a query of type 2, `queries[i] = [2, x, sz]`. Check if it is possible to place a block of size `sz` _anywhere_ in the range `[0, x]` on the line, such that the block **entirely** lies in the range `[0, x]`. A block **cannot** be placed if it intersects with any obstacle, but it may touch it. Note that you do**not** actually place the block. Queries are separate.



Return a boolean array `results`, where `results[i]` is `true` if you can place the block specified in the `ith` query of type 2, and `false` otherwise.

 

**Example 1:**

**Input:** queries = [[1,2],[2,3,3],[2,3,1],[2,2,2]]

**Output:** [false,true,true]

**Explanation:**

****

For query 0, place an obstacle at `x = 2`. A block of size at most 2 can be placed before `x = 3`.

**Example 2:**

**Input:** queries = [[1,7],[2,7,6],[1,2],[2,7,5],[2,7,6]]

**Output:** [true,true,false]

**Explanation:**

****

  * Place an obstacle at `x = 7` for query 0. A block of size at most 7 can be placed before `x = 7`.
  * Place an obstacle at `x = 2` for query 2. Now, a block of size at most 5 can be placed before `x = 7`, and a block of size at most 2 before `x = 2`.



 

**Constraints:**

  * `1 <= queries.length <= 15 * 104`
  * `2 <= queries[i].length <= 3`
  * `1 <= queries[i][0] <= 2`
  * `1 <= x, sz <= min(5 * 104, 3 * queries.length)`
  * The input is generated such that for queries of type 1, no obstacle exists at distance `x` when the query is asked.
  * The input is generated such that there is at least one query of type 2.

## Solution

```java
class Solution {

    private final int MAXX = 50000;
    private int[] seg;

    private void update(int node, int l, int r, int idx, int val) {
        if (l == r) {
            seg[node] = val;
            return;
        }

        int mid = (l + r) / 2;

        if (idx <= mid)
            update(2 * node, l, mid, idx, val);
        else
            update(2 * node + 1, mid + 1, r, idx, val);

        seg[node] = Math.max(seg[2 * node], seg[2 * node + 1]);
    }

    private int query(int node, int l, int r, int ql, int qr) {
        if (ql > r || qr < l)
            return 0;

        if (ql <= l && r <= qr)
            return seg[node];

        int mid = (l + r) / 2;

        return Math.max(
            query(2 * node, l, mid, ql, qr),
            query(2 * node + 1, mid + 1, r, ql, qr)
        );
    }

    public List<Boolean> getResults(int[][] queries) {

        seg = new int[4 * (MAXX + 1)];

        TreeSet<Integer> obstacles = new TreeSet<>();
        obstacles.add(0);

        for (int[] q : queries) {
            if (q[0] == 1) obstacles.add(q[1]);
        }

        List<Integer> pos = new ArrayList<>(obstacles);

        for (int i = 1; i < pos.size(); i++) {
            update(1,0,MAXX,pos.get(i),pos.get(i) - pos.get(i - 1));
        }

        List<Boolean> ans = new ArrayList<>();

        for (int i = queries.length - 1; i >= 0; i--) {

            if (queries[i][0] == 2) {

                int x = queries[i][1];
                int sz = queries[i][2];

                int prevObstacle = obstacles.floor(x);

                int best = query(1, 0,MAXX,0,prevObstacle);
                best = Math.max(best, x - prevObstacle);

                ans.add(best >= sz);
            }
            else {

                int x = queries[i][1];

                Integer leftPos = obstacles.lower(x);

                update(1,0,MAXX,x,0);

                Integer rightPos = obstacles.higher(x);

                if (rightPos != null) {
                    update(1,0,MAXX,rightPos,rightPos - leftPos);
                }

                obstacles.remove(x);
            }
        }

        Collections.reverse(ans);
        return ans;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
