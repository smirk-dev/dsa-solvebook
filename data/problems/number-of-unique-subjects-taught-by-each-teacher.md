---
id: "2495"
title: "Number of Unique Subjects Taught by Each Teacher"
slug: "number-of-unique-subjects-taught-by-each-teacher"
difficulty: "Easy"
tags: ["Database"]
language: "pythondata"
date_solved: "2025-08-03"
status: "solved"
submission_id: "1722091908"
---

## Problem

Table: `Teacher`
    
    
    +-------------+------+
    | Column Name | Type |
    +-------------+------+
    | teacher_id  | int  |
    | subject_id  | int  |
    | dept_id     | int  |
    +-------------+------+
    (subject_id, dept_id) is the primary key (combinations of columns with unique values) of this table.
    Each row in this table indicates that the teacher with teacher_id teaches the subject subject_id in the department dept_id.
    

 

Write a solution to calculate the number of unique subjects each teacher teaches in the university.

Return the result table in **any order**.

The result format is shown in the following example.

 

**Example 1:**
    
    
    **Input:** 
    Teacher table:
    +------------+------------+---------+
    | teacher_id | subject_id | dept_id |
    +------------+------------+---------+
    | 1          | 2          | 3       |
    | 1          | 2          | 4       |
    | 1          | 3          | 3       |
    | 2          | 1          | 1       |
    | 2          | 2          | 1       |
    | 2          | 3          | 1       |
    | 2          | 4          | 1       |
    +------------+------------+---------+
    **Output:**  
    +------------+-----+
    | teacher_id | cnt |
    +------------+-----+
    | 1          | 2   |
    | 2          | 4   |
    +------------+-----+
    **Explanation:** 
    Teacher 1:
      - They teach subject 2 in departments 3 and 4.
      - They teach subject 3 in department 3.
    Teacher 2:
      - They teach subject 1 in department 1.
      - They teach subject 2 in department 1.
      - They teach subject 3 in department 1.
      - They teach subject 4 in department 1.

## Solution

```pythondata
import pandas as pd

def count_unique_subjects(teacher: pd.DataFrame) -> pd.DataFrame:
    result = teacher.groupby('teacher_id')['subject_id'].nunique().reset_index()
    result.rename(columns ={'subject_id': 'cnt'}, inplace=True)
    return result
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
