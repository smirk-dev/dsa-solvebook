---
id: "619"
title: "Biggest Single Number"
slug: "biggest-single-number"
difficulty: "Easy"
tags: ["Database"]
language: "pythondata"
date_solved: "2025-11-04"
status: "solved"
submission_id: "1820273613"
---

## Problem

Table: `MyNumbers`
    
    
    +-------------+------+
    | Column Name | Type |
    +-------------+------+
    | num         | int  |
    +-------------+------+
    This table may contain duplicates (In other words, there is no primary key for this table in SQL).
    Each row of this table contains an integer.
    

 

A **single number** is a number that appeared only once in the `MyNumbers` table.

Find the largest **single number**. If there is no **single number** , report `null`.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    MyNumbers table:
    +-----+
    | num |
    +-----+
    | 8   |
    | 8   |
    | 3   |
    | 3   |
    | 1   |
    | 4   |
    | 5   |
    | 6   |
    +-----+
    **Output:** 
    +-----+
    | num |
    +-----+
    | 6   |
    +-----+
    **Explanation:** The single numbers are 1, 4, 5, and 6.
    Since 6 is the largest single number, we return it.
    

**Example 2:**
    
    
    **Input:** 
    MyNumbers table:
    +-----+
    | num |
    +-----+
    | 8   |
    | 8   |
    | 7   |
    | 7   |
    | 3   |
    | 3   |
    | 3   |
    +-----+
    **Output:** 
    +------+
    | num  |
    +------+
    | null |
    +------+
    **Explanation:** There are no single numbers in the input table so we return null.

## Solution

```pythondata
import pandas as pd

def biggest_single_number(my_numbers: pd.DataFrame) -> pd.DataFrame:
    return my_numbers.drop_duplicates(keep = False).max().to_frame(name = 'num')
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
