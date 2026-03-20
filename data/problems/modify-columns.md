---
id: "3067"
title: "Modify Columns"
slug: "modify-columns"
difficulty: "Easy"
tags: []
language: "pythondata"
date_solved: "2025-07-17"
status: "solved"
submission_id: "1701250299"
---

## Problem

DataFrame employees
    +-------------+--------+
    | Column Name | Type   |
    +-------------+--------+
    | name        | object |
    | salary      | int    |
    +-------------+--------+
    

A company intends to give its employees a pay rise.

Write a solution to **modify** the `salary` column by multiplying each salary by 2.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** DataFrame employees
    +---------+--------+
    | name    | salary |
    +---------+--------+
    | Jack    | 19666  |
    | Piper   | 74754  |
    | Mia     | 62509  |
    | Ulysses | 54866  |
    +---------+--------+
    **Output:** +---------+--------+
    | name    | salary |
    +---------+--------+
    | Jack    | 39332  |
    | Piper   | 149508 |
    | Mia     | 125018 |
    | Ulysses | 109732 |
    +---------+--------+
    **Explanation:** Every salary has been doubled.

## Solution

```pythondata
import pandas as pd

def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees.salary *= 2
    return employees
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
