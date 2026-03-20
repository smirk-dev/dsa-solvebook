---
id: "3075"
title: "Drop Missing Data"
slug: "drop-missing-data"
difficulty: "Easy"
tags: []
language: "pythondata"
date_solved: "2025-07-17"
status: "solved"
submission_id: "1701248016"
---

## Problem

DataFrame students
    +-------------+--------+
    | Column Name | Type   |
    +-------------+--------+
    | student_id  | int    |
    | name        | object |
    | age         | int    |
    +-------------+--------+
    

There are some rows having missing values in the `name` column.

Write a solution to remove the rows with missing values.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** +------------+---------+-----+
    | student_id | name    | age |
    +------------+---------+-----+
    | 32         | Piper   | 5   |
    | 217        | None    | 19  |
    | 779        | Georgia | 20  |
    | 849        | Willow  | 14  |
    +------------+---------+-----+
    **Output:** +------------+---------+-----+
    | student_id | name    | age |
    +------------+---------+-----+
    | 32         | Piper   | 5   |
    | 779        | Georgia | 20  | 
    | 849        | Willow  | 14  | 
    +------------+---------+-----+
    **Explanation:** 
    Student with id 217 havs empty value in the name column, so it will be removed.

## Solution

```pythondata
import pandas as pd

def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
    return students.dropna(subset=['name'])
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
