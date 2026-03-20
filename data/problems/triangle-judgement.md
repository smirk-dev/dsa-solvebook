---
id: "610"
title: "Triangle Judgement"
slug: "triangle-judgement"
difficulty: "Easy"
tags: ["Database"]
language: "pythondata"
date_solved: "2025-11-04"
status: "solved"
submission_id: "1820275665"
---

## Problem

Table: `Triangle`
    
    
    +-------------+------+
    | Column Name | Type |
    +-------------+------+
    | x           | int  |
    | y           | int  |
    | z           | int  |
    +-------------+------+
    In SQL, (x, y, z) is the primary key column for this table.
    Each row of this table contains the lengths of three line segments.
    

 

Report for every three line segments whether they can form a triangle.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    Triangle table:
    +----+----+----+
    | x  | y  | z  |
    +----+----+----+
    | 13 | 15 | 30 |
    | 10 | 20 | 15 |
    +----+----+----+
    **Output:** 
    +----+----+----+----------+
    | x  | y  | z  | triangle |
    +----+----+----+----------+
    | 13 | 15 | 30 | No       |
    | 10 | 20 | 15 | Yes      |
    +----+----+----+----------+

## Solution

```pythondata
import pandas as pd

def triangle_judgement(triangle: pd.DataFrame) -> pd.DataFrame:

  triangle['triangle'] = triangle.apply(
                         lambda x: 'Yes' if  sum(x) > 2 * max(x) 
                              else 'No', axis = 1)
  return triangle
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
