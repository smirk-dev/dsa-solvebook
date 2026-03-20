---
id: "1278"
title: "Product Price at a Given Date"
slug: "product-price-at-a-given-date"
difficulty: "Medium"
tags: ["Database"]
language: "pythondata"
date_solved: "2025-11-04"
status: "solved"
submission_id: "1820276263"
---

## Problem

Table: `Products`
    
    
    +---------------+---------+
    | Column Name   | Type    |
    +---------------+---------+
    | product_id    | int     |
    | new_price     | int     |
    | change_date   | date    |
    +---------------+---------+
    (product_id, change_date) is the primary key (combination of columns with unique values) of this table.
    Each row of this table indicates that the price of some product was changed to a new price at some date.

Initially, all products have price 10.

Write a solution to find the prices of all products on the date `2019-08-16`.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    Products table:
    +------------+-----------+-------------+
    | product_id | new_price | change_date |
    +------------+-----------+-------------+
    | 1          | 20        | 2019-08-14  |
    | 2          | 50        | 2019-08-14  |
    | 1          | 30        | 2019-08-15  |
    | 1          | 35        | 2019-08-16  |
    | 2          | 65        | 2019-08-17  |
    | 3          | 20        | 2019-08-18  |
    +------------+-----------+-------------+
    **Output:** 
    +------------+-------+
    | product_id | price |
    +------------+-------+
    | 2          | 50    |
    | 1          | 35    |
    | 3          | 10    |
    +------------+-------+

## Solution

```pythondata
import pandas as pd

def price_at_given_date(products: pd.DataFrame) -> pd.DataFrame:

    df = products[products.change_date <= '2019-08-16']         # <-- 1)
    latest_dates = (df.groupby('product_id')['change_date']
                      .transform('max'))
    
    return (df[df.change_date == latest_dates]                  # <-- 2)
              .merge(products.product_id.drop_duplicates(), how = 'right')
              .fillna(10)
              .rename(columns = {'new_price': 'price'}) .iloc[:,[0,1]])
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
