---
id: "1827"
title: "Invalid Tweets"
slug: "invalid-tweets"
difficulty: "Easy"
tags: ["Database"]
language: "pythondata"
date_solved: "2025-07-22"
status: "solved"
submission_id: "1706769200"
---

## Problem

Table: `Tweets`
    
    
    +----------------+---------+
    | Column Name    | Type    |
    +----------------+---------+
    | tweet_id       | int     |
    | content        | varchar |
    +----------------+---------+
    tweet_id is the primary key (column with unique values) for this table.
    content consists of alphanumeric characters, '!', or ' ' and no other special characters.
    This table contains all the tweets in a social media app.
    

 

Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is **strictly greater** than `15`.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**
    
    
    **Input:** 
    Tweets table:
    +----------+-----------------------------------+
    | tweet_id | content                           |
    +----------+-----------------------------------+
    | 1        | Let us Code                       |
    | 2        | More than fifteen chars are here! |
    +----------+-----------------------------------+
    **Output:** 
    +----------+
    | tweet_id |
    +----------+
    | 2        |
    +----------+
    **Explanation:** 
    Tweet 1 has length = 11. It is a valid tweet.
    Tweet 2 has length = 33. It is an invalid tweet.

## Solution

```pythondata
import pandas as pd

def invalid_tweets(tweets: pd.DataFrame) -> pd.DataFrame:
    invalid_tweets_df = tweets[tweets['content'].str.len()>15]
    result_df = invalid_tweets_df[['tweet_id']] 
    return result_df
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
