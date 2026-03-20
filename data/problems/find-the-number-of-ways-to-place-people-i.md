---
id: "3278"
title: "Find the Number of Ways to Place People I"
slug: "find-the-number-of-ways-to-place-people-i"
difficulty: "Medium"
tags: ["Array", "Math", "Geometry", "Sorting", "Enumeration"]
language: "cpp"
date_solved: "2025-09-02"
status: "solved"
submission_id: "1756678511"
---

## Problem

You are given a 2D array `points` of size `n x 2` representing integer coordinates of some points on a 2D plane, where `points[i] = [xi, yi]`.

Count the number of pairs of points `(A, B)`, where

  * `A` is on the **upper left** side of `B`, and
  * there are no other points in the rectangle (or line) they make (**including the border**), except for the points `A` and `B`.



Return the count.

 

**Example 1:**

**Input:** points = [[1,1],[2,2],[3,3]]

**Output:** 0

**Explanation:**

There is no way to choose `A` and `B` such that `A` is on the upper left side of `B`.

**Example 2:**

**Input:** points = [[6,2],[4,4],[2,6]]

**Output:** 2

**Explanation:**

  * The left one is the pair `(points[1], points[0])`, where `points[1]` is on the upper left side of `points[0]` and the rectangle is empty.
  * The middle one is the pair `(points[2], points[1])`, same as the left one it is a valid pair.
  * The right one is the pair `(points[2], points[0])`, where `points[2]` is on the upper left side of `points[0]`, but `points[1]` is inside the rectangle so it's not a valid pair.



**Example 3:**

**Input:** points = [[3,1],[1,3],[1,1]]

**Output:** 2

**Explanation:**

  * The left one is the pair `(points[2], points[0])`, where `points[2]` is on the upper left side of `points[0]` and there are no other points on the line they form. Note that it is a valid state when the two points form a line.
  * The middle one is the pair `(points[1], points[2])`, it is a valid pair same as the left one.
  * The right one is the pair `(points[1], points[0])`, it is not a valid pair as `points[2]` is on the border of the rectangle.



 

**Constraints:**

  * `2 <= n <= 50`
  * `points[i].length == 2`
  * `0 <= points[i][0], points[i][1] <= 50`
  * All `points[i]` are distinct.

## Solution

```cpp
// this version is slight modified for LC 3027
class Solution {
public:
    static bool cmp(const vector<int>& p, const vector<int>& q){
        return (p[0]==q[0])?p[1]<q[1]:p[0]>q[0];// order by (x, >)
    }
    static int numberOfPairs(vector<vector<int>>& P) {
        sort(P.begin(), P.end(), cmp);
        int n = P.size(), ans = 0;
        for(int i=0; i<n-1; i++){
            int y=INT_MAX, yi=P[i][1];
            for(int j = i+1; j<n; j++){
                const int yj=P[j][1];
                if (yj>=yi && y>yj){//P[j] cannot be in between
                    ans++;
                    y=yj;
                }
            }
        }
        return ans;
    }
};

auto init = []()
{ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
