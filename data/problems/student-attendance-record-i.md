---
id: "551"
title: "Student Attendance Record I"
slug: "student-attendance-record-i"
difficulty: "Easy"
tags: ["String"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071542405"
---

## Problem

You are given a string `s` representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

  * `'A'`: Absent.
  * `'L'`: Late.
  * `'P'`: Present.



The student is eligible for an attendance award if they meet **both** of the following criteria:

  * The student was absent (`'A'`) for **strictly** fewer than 2 days **total**.
  * The student was **never** late (`'L'`) for 3 or more **consecutive** days.



Return `true` _if the student is eligible for an attendance award, or_`false` _otherwise_.

 

**Example 1:**
    
    
    **Input:** s = "PPALLP"
    **Output:** true
    **Explanation:** The student has fewer than 2 absences and was never late 3 or more consecutive days.
    

**Example 2:**
    
    
    **Input:** s = "PPALLL"
    **Output:** false
    **Explanation:** The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
    

 

**Constraints:**

  * `1 <= s.length <= 1000`
  * `s[i]` is either `'A'`, `'L'`, or `'P'`.

## Solution

```java
class Solution {
    public boolean checkRecord(String s) {
        int countA = 0, countL = 0;

        for (char ch : s.toCharArray()) {
            if (ch != 'L') countL = 0;
            if (ch == 'L') countL++;
            if (ch == 'A') countA++;
            if (countA == 2 || countL == 3) return false;
        }

        return true;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
