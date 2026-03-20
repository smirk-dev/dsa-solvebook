---
id: "3069"
title: "Change Data Type"
slug: "change-data-type"
difficulty: "Easy"
tags: []
language: "pythondata"
date_solved: "2025-07-17"
status: "solved"
submission_id: "1701253261"
---

## Problem

DataFrame students
    +-------------+--------+
    | Column Name | Type   |
    +-------------+--------+
    | student_id  | int    |
    | name        | object |
    | age         | int    |
    | grade       | float  |
    +-------------+--------+
    

Write a solution to correct the errors:

The `grade` column is stored as floats, convert it to integers.

The result format is in the following example.

 
    
    
    **Example 1:**
    **Input:** DataFrame students:
    +------------+------+-----+-------+
    | student_id | name | age | grade |
    +------------+------+-----+-------+
    | 1          | Ava  | 6   | 73.0  |
    | 2          | Kate | 15  | 87.0  |
    +------------+------+-----+-------+
    **Output:** +------------+------+-----+-------+
    | student_id | name | age | grade |
    +------------+------+-----+-------+
    | 1          | Ava  | 6   | 73    |
    | 2          | Kate | 15  | 87    |
    +------------+------+-----+-------+
    **Explanation:** 
    The data types of the column grade is converted to int.

## Solution

```pythondata
import pandas as pd

def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
    df = pd.DataFrame(students)
    df['grade'] = df[['grade']].astype(int) # changing datatype to int.
    return df
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
