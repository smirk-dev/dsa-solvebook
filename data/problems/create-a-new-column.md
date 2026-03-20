---
id: "3066"
title: "Create a New Column"
slug: "create-a-new-column"
difficulty: "Easy"
tags: []
language: "pythondata"
date_solved: "2025-07-17"
status: "solved"
submission_id: "1701243261"
---

## Problem

DataFrame employees
    +-------------+--------+
    | Column Name | Type.  |
    +-------------+--------+
    | name        | object |
    | salary      | int.   |
    +-------------+--------+
    

A company plans to provide its employees with a bonus.

Write a solution to create a new column name `bonus` that contains the **doubled values** of the `salary` column.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:**
    DataFrame employees
    +---------+--------+
    | name    | salary |
    +---------+--------+
    | Piper   | 4548   |
    | Grace   | 28150  |
    | Georgia | 1103   |
    | Willow  | 6593   |
    | Finn    | 74576  |
    | Thomas  | 24433  |
    +---------+--------+
    **Output:**
    +---------+--------+--------+
    | name    | salary | bonus  |
    +---------+--------+--------+
    | Piper   | 4548   | 9096   |
    | Grace   | 28150  | 56300  |
    | Georgia | 1103   | 2206   |
    | Willow  | 6593   | 13186  |
    | Finn    | 74576  | 149152 |
    | Thomas  | 24433  | 48866  |
    +---------+--------+--------+
    **Explanation:** 
    A new column bonus is created by doubling the value in the column salary.

## Solution

```pythondata
import pandas as pd

def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:
    return employees.assign(bonus=employees["salary"] * 2)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
