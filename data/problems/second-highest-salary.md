---
id: "176"
title: "Second Highest Salary"
slug: "second-highest-salary"
difficulty: "Medium"
tags: ["Database"]
language: "pythondata"
date_solved: "2025-07-30"
status: "solved"
submission_id: "1717560549"
---

## Problem

Table: `Employee`
    
    
    +-------------+------+
    | Column Name | Type |
    +-------------+------+
    | id          | int  |
    | salary      | int  |
    +-------------+------+
    id is the primary key (column with unique values) for this table.
    Each row of this table contains information about the salary of an employee.
    

 

Write a solution to find the second highest **distinct** salary from the `Employee` table. If there is no second highest salary, return `null (return None in Pandas)`.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    Employee table:
    +----+--------+
    | id | salary |
    +----+--------+
    | 1  | 100    |
    | 2  | 200    |
    | 3  | 300    |
    +----+--------+
    **Output:** 
    +---------------------+
    | SecondHighestSalary |
    +---------------------+
    | 200                 |
    +---------------------+
    

**Example 2:**
    
    
    **Input:** 
    Employee table:
    +----+--------+
    | id | salary |
    +----+--------+
    | 1  | 100    |
    +----+--------+
    **Output:** 
    +---------------------+
    | SecondHighestSalary |
    +---------------------+
    | null                |
    +---------------------+

## Solution

```pythondata
import pandas as pd

def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    # Drop any duplicate salary values to avoid counting duplicates as separate salary ranks
    unique_salaries = employee['salary'].drop_duplicates()

    # Sort the unique salaries in descending order and get the second highest salary
    second_highest = unique_salaries.nlargest(2).iloc[-1] if len(unique_salaries) >= 2 else None

    # If the second highest salary doesn't exist (e.g., there are fewer than two unique salaries), return None
    if second_highest is None:
        return pd.DataFrame({'SecondHighestSalary': [None]})

    # Create a DataFrame with the second highest salary
    result_df = pd.DataFrame({'SecondHighestSalary': [second_highest]})

    return result_df
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
