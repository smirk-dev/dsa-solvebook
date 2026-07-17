---
id: "541"
title: "Reverse String II"
slug: "reverse-string-ii"
difficulty: "Easy"
tags: ["Two Pointers", "String"]
language: "java"
date_solved: "2026-07-17"
status: "solved"
submission_id: "2071541702"
---

## Problem

Given a string `s` and an integer `k`, reverse the first `k` characters for every `2k` characters counting from the start of the string.

If there are fewer than `k` characters left, reverse all of them. If there are less than `2k` but greater than or equal to `k` characters, then reverse the first `k` characters and leave the other as original.

 

**Example 1:**
    
    
    **Input:** s = "abcdefg", k = 2
    **Output:** "bacdfeg"
    

**Example 2:**
    
    
    **Input:** s = "abcd", k = 2
    **Output:** "bacd"
    

 

**Constraints:**

  * `1 <= s.length <= 104`
  * `s` consists of only lowercase English letters.
  * `1 <= k <= 104`

## Solution

```java
class Solution {
    public String reverseStr(String s, int k) {

        int step = k * 2;
        char[] arr = s.toCharArray();

        for(int i = 0; i < arr.length; i += step){

            int start = i;
            int end = Math.min(i + k - 1, arr.length - 1);

            while(start < end){

                char temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;

                start++;
                end--;
            }
        }

        return new String(arr);
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
