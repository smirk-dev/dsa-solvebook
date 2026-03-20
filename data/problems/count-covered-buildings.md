---
id: "3819"
title: "Count Covered Buildings"
slug: "count-covered-buildings"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Sorting"]
language: "python3"
date_solved: "2025-12-11"
status: "solved"
submission_id: "1852845522"
---

## Problem

You are given a positive integer `n`, representing an `n x n` city. You are also given a 2D grid `buildings`, where `buildings[i] = [x, y]` denotes a **unique** building located at coordinates `[x, y]`.

A building is **covered** if there is at least one building in all **four** directions: left, right, above, and below.

Return the number of **covered** buildings.

 

**Example 1:**

**Input:** n = 3, buildings = [[1,2],[2,2],[3,2],[2,1],[2,3]]

**Output:** 1

**Explanation:**

  * Only building `[2,2]` is covered as it has at least one building: 
    * above (`[1,2]`)
    * below (`[3,2]`)
    * left (`[2,1]`)
    * right (`[2,3]`)
  * Thus, the count of covered buildings is 1.



**Example 2:**

**Input:** n = 3, buildings = [[1,1],[1,2],[2,1],[2,2]]

**Output:** 0

**Explanation:**

  * No building has at least one building in all four directions.



**Example 3:**

**Input:** n = 5, buildings = [[1,3],[3,2],[3,3],[3,5],[5,3]]

**Output:** 1

**Explanation:**

  * Only building `[3,3]` is covered as it has at least one building: 
    * above (`[1,3]`)
    * below (`[5,3]`)
    * left (`[3,2]`)
    * right (`[3,5]`)
  * Thus, the count of covered buildings is 1.



 

**Constraints:**

  * `2 <= n <= 105`
  * `1 <= buildings.length <= 105 `
  * `buildings[i] = [x, y]`
  * `1 <= x, y <= n`
  * All coordinates of `buildings` are **unique**.

## Solution

```python
class Solution:
    def countCoveredBuildings(self, n: int, buildings: List[List[int]]) -> int:
        xMax, yMax=[0]*(n+1), [0]*(n+1)
        xMin, yMin=[1<<31]*(n+1), [1<<31]*(n+1)

        for x, y in buildings:
            xMin[y]=min(xMin[y], x)
            xMax[y]=max(xMax[y], x)
            yMin[x]=min(yMin[x], y)
            yMax[x]=max(yMax[x], y)

        cnt=0
        for x, y in buildings:
            coverX=(xMin[y]<x & x<xMax[y])
            coverY=(yMin[x]<y & y<yMax[x])
            cnt+=(coverX & coverY)
        return cnt
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
