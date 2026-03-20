---
id: "1811"
title: "Fix Names in a Table"
slug: "fix-names-in-a-table"
difficulty: "Easy"
tags: ["Database"]
language: "pythondata"
date_solved: "2025-07-24"
status: "solved"
submission_id: "1709594769"
---

## Problem

Table: `Users`
    
    
    +----------------+---------+
    | Column Name    | Type    |
    +----------------+---------+
    | user_id        | int     |
    | name           | varchar |
    +----------------+---------+
    user_id is the primary key (column with unique values) for this table.
    This table contains the ID and the name of the user. The name consists of only lowercase and uppercase characters.
    

 

Write a solution to fix the names so that only the first character is uppercase and the rest are lowercase.

Return the result table ordered by `user_id`.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    Users table:
    +---------+-------+
    | user_id | name  |
    +---------+-------+
    | 1       | aLice |
    | 2       | bOB   |
    +---------+-------+
    **Output:** 
    +---------+-------+
    | user_id | name  |
    +---------+-------+
    | 1       | Alice |
    | 2       | Bob   |
    +---------+-------+

## Solution

```pythondata
import pandas as pd
def fix_names(users: pd.DataFrame) -> pd.DataFrame:
    users['name'] = users['name'].str.capitalize()
    result_df = users.sort_values(by='user_id', ascending=True)
    return result_df
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
