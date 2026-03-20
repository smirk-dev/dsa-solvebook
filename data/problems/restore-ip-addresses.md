---
id: "93"
title: "Restore IP Addresses"
slug: "restore-ip-addresses"
difficulty: "Medium"
tags: ["String", "Backtracking"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830333836"
---

## Problem

A **valid IP address** consists of exactly four integers separated by single dots. Each integer is between `0` and `255` (**inclusive**) and cannot have leading zeros.

  * For example, `"0.1.2.201"` and `"192.168.1.1"` are **valid** IP addresses, but `"0.011.255.245"`, `"192.168.1.312"` and `"192.168@1.1"` are **invalid** IP addresses.



Given a string `s` containing only digits, return _all possible valid IP addresses that can be formed by inserting dots into_`s`. You are **not** allowed to reorder or remove any digits in `s`. You may return the valid IP addresses in **any** order.

 

**Example 1:**
    
    
    **Input:** s = "25525511135"
    **Output:** ["255.255.11.135","255.255.111.35"]
    

**Example 2:**
    
    
    **Input:** s = "0000"
    **Output:** ["0.0.0.0"]
    

**Example 3:**
    
    
    **Input:** s = "101023"
    **Output:** ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
    

 

**Constraints:**

  * `1 <= s.length <= 20`
  * `s` consists of digits only.

## Solution

```python
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        res = []
        def backtrack(start, path):
            if len(path) == 4:
                if start == len(s):
                    res.append('.'.join(path))
                return
            for end in range(start + 1, min(len(s) + 1, start + 4)):
                part = s[start:end]
                if (len(part) > 1 and part[0] == '0') or int(part) > 255:
                    continue
                backtrack(end, path + [part])
        backtrack(0, [])
        return res
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
