---
id: "1283"
title: "Reformat Date"
slug: "reformat-date"
difficulty: "Easy"
tags: ["String"]
language: "python3"
date_solved: "2025-11-14"
status: "solved"
submission_id: "1829421189"
---

## Problem

Given a `date` string in the form `Day Month Year`, where:

  * `Day` is in the set `{"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}`.
  * `Month` is in the set `{"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}`.
  * `Year` is in the range `[1900, 2100]`.



Convert the date string to the format `YYYY-MM-DD`, where:

  * `YYYY` denotes the 4 digit year.
  * `MM` denotes the 2 digit month.
  * `DD` denotes the 2 digit day.



 

**Example 1:**
    
    
    **Input:** date = "20th Oct 2052"
    **Output:** "2052-10-20"
    

**Example 2:**
    
    
    **Input:** date = "6th Jun 1933"
    **Output:** "1933-06-06"
    

**Example 3:**
    
    
    **Input:** date = "26th May 1960"
    **Output:** "1960-05-26"
    

 

**Constraints:**

  * The given dates are guaranteed to be valid, so no error handling is necessary.

## Solution

```python
class Solution:
    def reformatDate(self, date: str) -> str:
        # Month mapping
        months = {
            "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04",
            "May": "05", "Jun": "06", "Jul": "07", "Aug": "08",
            "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"
        }
        
        # Split the date string
        parts = date.split()
        day_str = parts[0]
        month_str = parts[1]
        year_str = parts[2]
        
        # Extract day number (remove suffix like 'st', 'nd', 'rd', 'th')
        day = ""
        for char in day_str:
            if char.isdigit():
                day += char
        
        # Pad day with leading zero if needed
        day = day.zfill(2)
        
        # Get month number from mapping
        month = months[month_str]
        
        # Year is already in correct format
        year = year_str
        
        return f"{year}-{month}-{day}"
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
