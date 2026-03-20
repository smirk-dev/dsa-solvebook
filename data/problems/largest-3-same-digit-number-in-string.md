---
id: "2346"
title: "Largest 3-Same-Digit Number in String"
slug: "largest-3-same-digit-number-in-string"
difficulty: "Easy"
tags: ["String"]
language: "cpp"
date_solved: "2025-08-14"
status: "solved"
submission_id: "1735416870"
---

## Problem

You are given a string `num` representing a large integer. An integer is **good** if it meets the following conditions:

  * It is a **substring** of `num` with length `3`.
  * It consists of only one unique digit.



Return _the**maximum good** integer as a **string** or an empty string _`""`_if no such integer exists_.

Note:

  * A **substring** is a contiguous sequence of characters within a string.
  * There may be **leading zeroes** in `num` or a good integer.



 

**Example 1:**
    
    
    **Input:** num = "6** _777_** 133339"
    **Output:** "777"
    **Explanation:** There are two distinct good integers: "777" and "333".
    "777" is the largest, so we return "777".
    

**Example 2:**
    
    
    **Input:** num = "23** _000_** 19"
    **Output:** "000"
    **Explanation:** "000" is the only good integer.
    

**Example 3:**
    
    
    **Input:** num = "42352338"
    **Output:** ""
    **Explanation:** No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.
    

 

**Constraints:**

  * `3 <= num.length <= 1000`
  * `num` only consists of digits.

## Solution

```cpp
class Solution {
public:
    string largestGoodInteger(string num) {
        string best = "";
        for (int i = 0; i + 2 < num.size(); i++) {
            if (num[i] == num[i+1] && num[i] == num[i+2]) {
                best = max(best, num.substr(i, 3));
            }
        }
        return best;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
