---
id: "3076"
title: "Get the Size of a DataFrame"
slug: "get-the-size-of-a-dataframe"
difficulty: "Easy"
tags: []
language: "pythondata"
date_solved: "2025-07-17"
status: "solved"
submission_id: "1701218256"
---

## Problem

DataFrame players:
    +-------------+--------+
    | Column Name | Type   |
    +-------------+--------+
    | player_id   | int    |
    | name        | object |
    | age         | int    |
    | position    | object |
    | ...         | ...    |
    +-------------+--------+
    

Write a solution to calculate and display the **number of rows and columns** of `players`.

Return the result as an array:

`[number of rows, number of columns]`

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** +-----------+----------+-----+-------------+--------------------+
    | player_id | name     | age | position    | team               |
    +-----------+----------+-----+-------------+--------------------+
    | 846       | Mason    | 21  | Forward     | RealMadrid         |
    | 749       | Riley    | 30  | Winger      | Barcelona          |
    | 155       | Bob      | 28  | Striker     | ManchesterUnited   |
    | 583       | Isabella | 32  | Goalkeeper  | Liverpool          |
    | 388       | Zachary  | 24  | Midfielder  | BayernMunich       |
    | 883       | Ava      | 23  | Defender    | Chelsea            |
    | 355       | Violet   | 18  | Striker     | Juventus           |
    | 247       | Thomas   | 27  | Striker     | ParisSaint-Germain |
    | 761       | Jack     | 33  | Midfielder  | ManchesterCity     |
    | 642       | Charlie  | 36  | Center-back | Arsenal            |
    +-----------+----------+-----+-------------+--------------------+**Output:**[10, 5]
    **Explanation:**
    This DataFrame contains 10 rows and 5 columns.

## Solution

```pythondata
import pandas as pd

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    return list(players.shape)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
