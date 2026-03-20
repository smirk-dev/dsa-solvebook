---
id: "833"
title: "Bus Routes"
slug: "bus-routes"
difficulty: "Hard"
tags: ["Array", "Hash Table", "Breadth-First Search"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830340311"
---

## Problem

You are given an array `routes` representing bus routes where `routes[i]` is a bus route that the `ith` bus repeats forever.

  * For example, if `routes[0] = [1, 5, 7]`, this means that the `0th` bus travels in the sequence `1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ...` forever.



You will start at the bus stop `source` (You are not on any bus initially), and you want to go to the bus stop `target`. You can travel between bus stops by buses only.

Return _the least number of buses you must take to travel from_`source` _to_`target`. Return `-1` if it is not possible.

 

**Example 1:**
    
    
    **Input:** routes = [[1,2,7],[3,6,7]], source = 1, target = 6
    **Output:** 2
    **Explanation:** The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
    

**Example 2:**
    
    
    **Input:** routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
    **Output:** -1
    

 

 

**Constraints:**

  * `1 <= routes.length <= 500`.
  * `1 <= routes[i].length <= 105`
  * All the values of `routes[i]` are **unique**.
  * `sum(routes[i].length) <= 105`
  * `0 <= routes[i][j] < 106`
  * `0 <= source, target < 106`

## Solution

```python
class Solution:
    def numBusesToDestination(self, routes: List[List[int]], source: int, target: int) -> int:
        from collections import defaultdict, deque
        if source == target:
            return 0
        stop_to_routes = defaultdict(set)
        for i, route in enumerate(routes):
            for stop in route:
                stop_to_routes[stop].add(i)
        visited_stops = set()
        visited_routes = set()
        queue = deque([source])
        buses = 0
        while queue:
            for _ in range(len(queue)):
                stop = queue.popleft()
                for route_i in stop_to_routes[stop]:
                    if route_i in visited_routes:
                        continue
                    visited_routes.add(route_i)
                    for next_stop in routes[route_i]:
                        if next_stop == target:
                            return buses + 1
                        if next_stop not in visited_stops:
                            visited_stops.add(next_stop)
                            queue.append(next_stop)
            buses += 1
        return -1
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
