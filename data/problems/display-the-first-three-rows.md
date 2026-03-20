---
id: "3065"
title: "Display the First Three Rows"
slug: "display-the-first-three-rows"
difficulty: "Easy"
tags: []
language: "pythondata"
date_solved: "2025-07-17"
status: "solved"
submission_id: "1701233516"
---

## Problem

DataFrame: employees
    +-------------+--------+
    | Column Name | Type   |
    +-------------+--------+
    | employee_id | int    |
    | name        | object |
    | department  | object |
    | salary      | int    |
    +-------------+--------+
    

Write a solution to display the **first`3` **rows**** of this DataFrame.

 

**Example 1:**
    
    
    **Input:** DataFrame employees
    +-------------+-----------+-----------------------+--------+
    | employee_id | name      | department            | salary |
    +-------------+-----------+-----------------------+--------+
    | 3           | Bob       | Operations            | 48675  |
    | 90          | Alice     | Sales                 | 11096  |
    | 9           | Tatiana   | Engineering           | 33805  |
    | 60          | Annabelle | InformationTechnology | 37678  |
    | 49          | Jonathan  | HumanResources        | 23793  |
    | 43          | Khaled    | Administration        | 40454  |
    +-------------+-----------+-----------------------+--------+
    **Output:**
    +-------------+---------+-------------+--------+
    | employee_id | name    | department  | salary |
    +-------------+---------+-------------+--------+
    | 3           | Bob     | Operations  | 48675  |
    | 90          | Alice   | Sales       | 11096  |
    | 9           | Tatiana | Engineering | 33805  |
    +-------------+---------+-------------+--------+
    **Explanation:** 
    Only the first 3 rows are displayed.

## Solution

```pythondata
import pandas as pd

def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    return employees.head(3)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
