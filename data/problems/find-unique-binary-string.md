---
id: "2107"
title: "Find Unique Binary String"
slug: "find-unique-binary-string"
difficulty: "Medium"
tags: ["Array", "Hash Table", "String", "Backtracking"]
language: "java"
date_solved: "2026-03-08"
status: "solved"
submission_id: "1941691941"
---

## Problem

Given an array of strings `nums` containing `n` **unique** binary strings each of length `n`, return _a binary string of length_`n` _that**does not appear** in _`nums` _. If there are multiple answers, you may return**any** of them_.

 

**Example 1:**
    
    
    **Input:** nums = ["01","10"]
    **Output:** "11"
    **Explanation:** "11" does not appear in nums. "00" would also be correct.
    

**Example 2:**
    
    
    **Input:** nums = ["00","01"]
    **Output:** "11"
    **Explanation:** "11" does not appear in nums. "10" would also be correct.
    

**Example 3:**
    
    
    **Input:** nums = ["111","011","001"]
    **Output:** "101"
    **Explanation:** "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
    

 

**Constraints:**

  * `n == nums.length`
  * `1 <= n <= 16`
  * `nums[i].length == n`
  * `nums[i] `is either `'0'` or `'1'`.
  * All the strings of `nums` are **unique**.

## Solution

```java
class Solution {
    public String findDifferentBinaryString(String[] nums) {

        int n = nums.length;
        int size = (int)Math.pow(2, n);

        int[] nu = new int[size];

        for(String num : nums){
            int val = Integer.parseInt(num, 2);
            nu[val]++;
        }

        for(int i = 0; i < size; i++){
            if(nu[i] == 0){
                String ans = Integer.toBinaryString(i);
                return "0".repeat(n - ans.length()) + ans;
            }
        }

        return "0".repeat(n);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
