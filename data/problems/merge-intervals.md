---
id: "56"
title: "Merge Intervals"
slug: "merge-intervals"
difficulty: "Medium"
tags: ["Array", "Sorting"]
language: "java"
date_solved: "2026-03-09"
status: "solved"
submission_id: "1942553616"
---

## Problem

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return _an array of the non-overlapping intervals that cover all the intervals in the input_.

 

**Example 1:**
    
    
    **Input:** intervals = [[1,3],[2,6],[8,10],[15,18]]
    **Output:** [[1,6],[8,10],[15,18]]
    **Explanation:** Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
    

**Example 2:**
    
    
    **Input:** intervals = [[1,4],[4,5]]
    **Output:** [[1,5]]
    **Explanation:** Intervals [1,4] and [4,5] are considered overlapping.
    

**Example 3:**
    
    
    **Input:** intervals = [[4,7],[1,4]]
    **Output:** [[1,7]]
    **Explanation:** Intervals [1,4] and [4,7] are considered overlapping.
    

 

**Constraints:**

  * `1 <= intervals.length <= 104`
  * `intervals[i].length == 2`
  * `0 <= starti <= endi <= 104`

## Solution

```java
class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a,b) -> a[0] - b[0]);
        List<int[]> res = new ArrayList<>();
        for(int[] interval : intervals){  
            if(res.isEmpty() || res.get(res.size()-1)[1] < interval[0]){
                res.add(interval);
            }
            else{
                res.get(res.size()-1)[1] =Math.max(res.get(res.size()-1)[1], interval[1]);
            }
        }
        return res.toArray(new int[res.size()][]);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
